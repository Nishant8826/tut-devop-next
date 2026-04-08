import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// WHAT: Utility function to merge Tailwind CSS classes.
// WHY: Prevents class conflicts and enables cleaner conditional styling.
// HOW: Using clsx and tailwind-merge together.
// IMPACT: More robust and readable UI components.

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
