import React from 'react';
import Link from 'next/link';

// WHAT: Blog Listing Page (SSG).
// WHY: Blog posts are mostly static and benefit from the speed of SSG.
// HOW: Using standard Server Components.
// IMPACT: High performance and excellent indexability for search engines.

const posts = [
  { slug: 'mastering-nextjs', title: 'Mastering Next.js App Router', date: '2024-03-20', excerpt: 'Learn the ins and outs of the new App Router architecture.' },
  { slug: 'redux-toolkit-query', title: 'Why RTK Query is a Game Changer', date: '2024-03-15', excerpt: 'Deep dive into caching and state management with RTK Query.' },
  { slug: 'framer-motion-premium-ui', title: 'Building Premium UIs with Framer Motion', date: '2024-03-10', excerpt: 'Small animations that make a big impact on your user experience.' }
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-6 py-20">
      <h2 className="text-4xl md:text-5xl font-bold mb-12">Technical <span className="text-accent underline decoration-primary/20">Writeups</span></h2>
      
      <div className="space-y-12 max-w-3xl">
        {posts.map((post) => (
          <article key={post.slug} className="group border-b border-gray-100 dark:border-white/5 pb-12">
            <span className="text-sm text-secondary mb-2 block">{post.date}</span>
            <Link href={`/blog/${post.slug}`} className="block">
              <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">{post.title}</h3>
            </Link>
            <p className="text-secondary mb-6">{post.excerpt}</p>
            <Link href={`/blog/${post.slug}`} className="text-primary font-bold hover:underline">
              Read More →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
