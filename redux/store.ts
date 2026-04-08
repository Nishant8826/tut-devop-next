import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import { githubApi } from './api/githubApi';

// WHAT: The Redux store configuration.
// WHY: Centralizes the application state and integrates RTK Query.
// HOW: Using configureStore from Redux Toolkit.
// IMPACT: Provides a scalable foundation for global state management.

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    [githubApi.reducerPath]: githubApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Often useful for complex API objects
    }).concat(githubApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
