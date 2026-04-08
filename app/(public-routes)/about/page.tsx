import React from 'react';

// WHAT: About Page (SSG).
// WHY: Static pages are extremely fast and reliable for persistent content.
// HOW: Using standard Server Components.
// IMPACT: Perfect SEO profile and zero server-side logic at runtime.

export default function AboutPage() {
  return (
    <div className="container mx-auto px-6 py-20">
      <div className="flex flex-col md:flex-row gap-16 items-center">
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Passionate About 
            <span className="text-accent underline decoration-primary/30 decoration-8 ml-2">UI Engineering</span>
          </h2>
          <p className="text-xl text-secondary mb-6 leading-relaxed">
            I’m a technical educator and senior frontend engineer with over 8 years of experience building scalable applications.
          </p>
          <p className="text-secondary mb-8 leading-relaxed">
            I specialize in the React ecosystem, specifically Next.js, Redux, and accessible design systems. I believe in writing code that is not only performant but also deeply educational.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
              <span className="block text-2xl font-bold text-primary">8+</span>
              <span className="text-secondary text-sm">Years Experience</span>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
              <span className="block text-2xl font-bold text-primary">50+</span>
              <span className="text-secondary text-sm">Projects Delivered</span>
            </div>
          </div>
        </div>
        <div className="flex-1 w-full max-w-md aspect-square glassmorphism rounded-3xl flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform duration-500">
          <div className="text-6xl grayscale opacity-40">🧑‍💻</div>
        </div>
      </div>
    </div>
  );
}
