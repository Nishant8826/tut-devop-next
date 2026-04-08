import React from 'react';

// WHAT: Home Layout (SSG).
// WHY: Used for logic or styling specific to the home page route grouping.
// HOW: Standard Server Component layout.
// IMPACT: More granular control over the home page's layout without affecting other public routes.

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="home-layout">
      {children}
    </div>
  );
}
