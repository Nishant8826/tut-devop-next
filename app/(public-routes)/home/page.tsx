import React from 'react';

// WHAT: Home Page (Static Site Generation - SSG).
// WHY: SSG is ideal for landing pages where content doesn't change frequently, ensuring fast TTI.
// HOW: By making it a Server Component without dynamic functions (cookies, headers, searchParams).
// IMPACT: Delivers the page almost instantly to users with perfect SEO indices.

export default function HomePage() {
  return (
    <div className="container mx-auto px-6 py-20">
      <section className="text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 animate-fade-in">
          Building Digital <span className="text-primary">Experiences</span>
        </h1>
        <p className="text-xl text-secondary max-w-2xl mx-auto mb-10">
          I'm a senior frontend engineer specializing in Next.js, TypeScript, and high-performance web applications.
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-8 py-3 bg-primary text-white rounded-lg hover:opacity-90 transition-opacity">
            View Projects
          </button>
          <button className="px-8 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors">
            Contact Me
          </button>
        </div>
      </section>
      
      <section className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: "Fast", desc: "Optimized for speed and core web vitals." },
          { title: "Dynamic", desc: "Interactive experiences with Framer Motion." },
          { title: "Scalable", desc: "Enterprise-grade architecture with Redux." }
        ].map((item, i) => (
          <div key={i} className="p-8 glassmorphism rounded-2xl">
            <h3 className="text-xl font-bold mb-4">{item.title}</h3>
            <p className="text-secondary">{item.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
