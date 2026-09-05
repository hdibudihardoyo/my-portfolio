// Manual shadcn registry downloader (npm 12 forbids the CLI's internal
// `--allow-scripts` flag, so we fetch component sources straight from the
// public style registry instead).
//
// Usage: node scripts/fetch-shadcn.mjs <component> [...more]
// Writes files under ./src, mapping `registry/base-nova/*` -> `src/*`.
import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'

const ROOT = process.cwd()
const STYLE = 'base-nova'
const baseUrl = `https://ui.shadcn.com/r/styles/${STYLE}`
const initial = process.argv.slice(2)
if (initial.length === 0) {
  console.error('Usage: node scripts/fetch-shadcn.mjs <component> [...]')
  process.exit(1)
}

const seen = new Set()
const order = []

async function fetchItem(name) {
  const res = await fetch(`${baseUrl}/${name}.json`)
  if (!res.ok) throw new Error(`GET ${name}.json -> ${res.status}`)
  return res.json()
}

async function collect(name) {
  if (seen.has(name)) return
  seen.add(name)
  const item = await fetchItem(name)
  for (const dep of item.registryDependencies ?? []) {
    await collect(dep)
  }
  order.push(item)
}

for (const name of initial) await collect(name)

for (const item of order) {
  for (const file of item.files ?? []) {
    const rel = file.path.replace(`registry/${STYLE}`, 'src').replace(/^src\/src/, 'src')
    const out = path.join(ROOT, rel)
    await mkdir(path.dirname(out), { recursive: true })
    await writeFile(out, file.content, 'utf8')
    console.log(`wrote ${rel}`)
  }
}

const deps = [
  ...new Set(order.flatMap((i) => i.dependencies ?? [])),
].filter((d) => !['cn', '@base-ui/react', 'tw-animate-css'].includes(d))
console.log(
  `\n${order.length} component(s). npm deps to add manually:\n  ${[
    'cn',
    '@base-ui/react',
    'tw-animate-css',
    ...deps,
  ].join('\n  ')}`,
)