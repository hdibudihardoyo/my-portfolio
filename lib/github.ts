export async function getGithubRepos(username: string) {
  try {
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    return await res.ok ? res.json() : [];
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
    return [];
  }
}

export async function getGithubStats(username: string) {
  try {
    const res = await fetch(`https://api.github.com/users/${username}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    return await res.json();
  } catch (error) {
    console.error("Error fetching GitHub stats:", error);
    return null;
  }
}
