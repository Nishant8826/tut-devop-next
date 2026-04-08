'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes';

// WHAT: Theme provider component.
// WHY: Handles theme hydration and switching logic consistently.
// HOW: Utilizing next-themes for easy class-based theme switching.
// IMPACT: Prevents hydration mismatch and provides smooth theme transitions.

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
