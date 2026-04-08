'use client';

import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import React from 'react';

// WHAT: Client component to provide Redux store to the application.
// WHY: Next.js App Router requires 'use client' for context/providers.
// HOW: Wrapping children with Redux Provider.
// IMPACT: Makes the Redux store available throughout the client-side components.

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
