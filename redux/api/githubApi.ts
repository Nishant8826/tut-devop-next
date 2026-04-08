import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// WHAT: RTK Query initialization for GitHub API.
// WHY: Better than fetch/axios because it provides built-in caching, polling, and refetching.
// HOW: Using createApi and fetchBaseQuery.
// IMPACT: Simplifies data fetching and significantly improves performance through caching.

export const githubApi = createApi({
  reducerPath: 'githubApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/' }),
  endpoints: (builder) => ({
    getUser: builder.query<any, string>({
      query: (username) => `users/${username}`,
    }),
    getRepos: builder.query<any[], string>({
      query: (username) => `users/${username}/repos?sort=updated&per_page=10`,
    }),
    getStats: builder.query<any, string>({
      query: (username) => `users/${username}`,
    }),
  }),
});

export const { useGetUserQuery, useGetReposQuery, useGetStatsQuery } = githubApi;
