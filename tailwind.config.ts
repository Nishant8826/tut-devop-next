import type { Config } from 'tailwindcss';

// WHAT: Tailwind CSS Configuration.
// WHY: Defines the theme, colors, and content paths for the CSS framework.
// HOW: Exporting a Config object.
// IMPACT: Centralizes design tokens and ensures styles are generated correctly.

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './providers/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [],
};

export default config;
