import React from 'react';
import { notFound } from 'next/navigation';

// WHAT: Project Detail Page (Server-Side Rendering - SSR).
// WHY: SSR is needed for dynamic content that depends on request parameters or needs to be real-time.
// HOW: Accessing params in a Server Component.
// IMPACT: Always serves the most fresh data from the API for a specific project.

interface PageProps {
  params: Promise<{ id: string }>;
}

async function getRepoDetails(name: string) {
  const res = await fetch(`https://api.github.com/repos/octocat/${name}`, {
    cache: 'no-store' // Forces SSR by disabling cache
  });
  if (!res.ok) return null;
  return res.json();
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params;
  const repo = await getRepoDetails(id);

  if (!repo) return notFound();

  return (
    <div className="container mx-auto px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <span className="text-6xl">📁</span>
          <div>
            <h1 className="text-4xl font-bold">{repo.name}</h1>
            <p className="text-secondary">{repo.full_name}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="p-6 glassmorphism rounded-xl text-center">
            <span className="block text-2xl font-bold">{repo.stargazers_count}</span>
            <span className="text-secondary text-sm">Stars</span>
          </div>
          <div className="p-6 glassmorphism rounded-xl text-center">
            <span className="block text-2xl font-bold">{repo.watchers_count}</span>
            <span className="text-secondary text-sm">Watchers</span>
          </div>
          <div className="p-6 glassmorphism rounded-xl text-center">
            <span className="block text-2xl font-bold">{repo.forks_count}</span>
            <span className="text-secondary text-sm">Forks</span>
          </div>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h2 className="text-2xl font-bold mb-4">Description</h2>
          <p className="text-xl leading-relaxed mb-8">{repo.description || "The user has not provided a description for this repository."}</p>
          
          <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-2xl border border-gray-100 dark:border-white/5">
            <h3 className="font-bold mb-4">Repository Details</h3>
            <ul className="space-y-2 text-sm text-secondary">
              <li><strong>Default Branch:</strong> {repo.default_branch}</li>
              <li><strong>License:</strong> {repo.license?.name || "None"}</li>
              <li><strong>Created:</strong> {new Date(repo.created_at).toLocaleDateString()}</li>
              <li><strong>Last Updated:</strong> {new Date(repo.updated_at).toLocaleDateString()}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
