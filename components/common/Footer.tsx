import React from 'react';

// WHAT: Simple footer component.
// WHY: Completes the page structure and provides copyright information.
// HOW: Using standard HTML5 footer element.
// IMPACT: Professional finish for every page.

export default function Footer() {
  return (
    <footer className="w-full border-t border-current/10 py-8 bg-background">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-secondary">
          © {new Date().getFullYear()} Modern Portfolio. All rights reserved.
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-primary text-sm transition-colors">GitHub</a>
          <a href="#" className="hover:text-primary text-sm transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-primary text-sm transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  );
}
