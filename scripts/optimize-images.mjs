import { readdir, rm, stat } from "node:fs/promises"
import { join, resolve } from "node:path"
import sharp from "sharp"

const root = resolve(import.meta.dirname, "..")
const imagesDir = join(root, "src", "assets", "images")

const rules = [
  { match: /^Macbook-.*\.(png|jpe?g)$/i, maxWidth: 1280, quality: 80 },
  { match: /^pasphoto\.(png|jpe?g)$/i, maxWidth: 160, quality: 80 },
  { match: /^.*\.(png|jpe?g)$/i, maxWidth: 256, quality: 85 },
]

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) {
      yield* walk(full)
    } else if (entry.isFile()) {
      yield full
    }
  }
}

function pickRule(name) {
  return rules.find((r) => r.match.test(name))
}

let converted = 0
let deleted = 0

for await (const file of walk(imagesDir)) {
  const ext = file.toLowerCase().match(/\.(png|jpe?g)$/i)
  if (!ext) continue

  const name = file.split(/[\\/]/).pop()
  const rule = pickRule(name)
  if (!rule) continue

  const webpPath = file.replace(/\.(png|jpe?g)$/i, ".webp")
  if (webpPath.toLowerCase() === file.toLowerCase()) continue

  const image = sharp(file)
  const meta = await image.metadata()
  const width = Math.min(meta.width ?? rule.maxWidth, rule.maxWidth)
  const sizeBefore = (await stat(file)).size

  await image
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: rule.quality })
    .toFile(webpPath)

  await rm(file)
  const out = await sharp(webpPath).metadata()
  console.log(
    `${name.padEnd(55)} ${Math.round(meta.width ?? 0)}x${meta.height ?? 0} -> ${out.width}x${out.height ?? 0} (${(sizeBefore / 1024).toFixed(1)} KB)`
  )
  converted++
  deleted++
}

console.log(`\nDone: ${converted} converted, ${deleted} originals removed.`)