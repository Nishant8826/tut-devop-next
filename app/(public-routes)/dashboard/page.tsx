'use client';

import React from 'react';
import { useGetUserQuery, useGetReposQuery } from '@/redux/api/githubApi';

// WHAT: Dashboard Page (Client-Side Rendering - CSR).
// WHY: CSR is suitable for private, user-specific data or interactive dashboards.
// HOW: Using 'use client' and RTK Query hooks for data fetching.
// IMPACT: Provides a highly interactive and stateful experience for complex tasks.

export default function DashboardPage() {
  const username = 'octocat'; // Example user
  const { data: user, isLoading: isUserLoading } = useGetUserQuery(username);
  const { data: repos, isLoading: isReposLoading } = useGetReposQuery(username);

  if (isUserLoading || isReposLoading) {
    return (
      <div className="container mx-auto px-6 py-20 animate-pulse">
        <div className="h-10 w-48 bg-gray-200 dark:bg-gray-800 rounded mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1,2,3,4].map(i => <div key={i} className="h-40 bg-gray-200 dark:bg-gray-800 rounded-2xl"></div>)}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold mb-8 italic">GitHub Insights</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {[
          { label: 'Followers', value: user?.followers, icon: '👥' },
          { label: 'Following', value: user?.following, icon: '🤝' },
          { label: 'Public Repos', value: user?.public_repos, icon: '📦' },
          { label: 'Public Gists', value: user?.public_gists, icon: '📝' }
        ].map((stat, i) => (
          <div key={i} className="p-8 glassmorphism rounded-3xl text-center">
            <span className="text-4xl block mb-2">{stat.icon}</span>
            <span className="text-3xl font-extrabold block">{stat.value}</span>
            <span className="text-secondary text-sm font-medium">{stat.label}</span>
          </div>
        ))}
      </div>

      <div className="glassmorphism rounded-3xl p-8">
        <h3 className="text-2xl font-bold mb-6">Recent Activity Timeline</h3>
        <div className="space-y-6">
          {repos?.slice(0, 5).map((repo: any) => (
            <div key={repo.id} className="flex gap-4 items-start border-l-2 border-primary/20 pl-6 pb-6 last:pb-0">
              <div className="w-3 h-3 bg-primary rounded-full -ml-[31px] mt-2 ring-4 ring-primary/10"></div>
              <div>
                <p className="font-bold">{repo.name}</p>
                <p className="text-sm text-secondary">Updated on {new Date(repo.updated_at).toLocaleDateString()}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
