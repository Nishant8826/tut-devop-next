import React from 'react';
import Link from 'next/link';

// WHAT: Projects Page (Incremental Static Regeneration - ISR).
// WHY: ISR updates content (like recent GitHub repos) periodically without a full rebuild.
// HOW: Using 'export const revalidate = 3600' (re-renders every hour).
// IMPACT: Keeps dynamic data up to date without sacrificing performance or hurting SEO.

export const revalidate = 3600; // Revalidate every hour

async function getRepos() {
  const res = await fetch('https://api.github.com/users/octocat/repos?sort=updated&per_page=6', {
    next: { revalidate: 3600 }
  });
  if (!res.ok) throw new Error('Failed to fetch repos');
  return res.json();
}

export default async function ProjectsPage() {
  const repos = await getRepos();

  return (
    <div className="container mx-auto px-6 py-20">
      <h2 className="text-4xl md:text-5xl font-bold mb-12">My <span className="text-primary italic">Latest</span> Repos</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {repos.map((repo: any) => (
          <Link 
            key={repo.id} 
            href={`/projects/${repo.name}`}
            className="group p-8 glassmorphism rounded-2xl hover:bg-primary/5 transition-all duration-300"
          >
            <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{repo.name}</h3>
            <p className="text-secondary text-sm h-12 overflow-hidden mb-6">{repo.description || "No description provided."}</p>
            <div className="flex justify-between items-center text-xs font-mono text-secondary">
              <span>⭐ {repo.stargazers_count}</span>
              <span>🍴 {repo.forks_count}</span>
              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">{repo.language || "TypeScript"}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
