import React from 'react';
import { notFound } from 'next/navigation';

// WHAT: Blog Detail Page (SSG with generateStaticParams).
// WHY: Pre-renders specific paths at build time for maximum speed.
// HOW: Using generateStaticParams to define which slugs to pre-render.
// IMPACT: Near-instant load times for every blog post.

const posts: Record<string, any> = {
  'mastering-nextjs': { title: 'Mastering Next.js App Router', content: 'Detailed content about Next.js...' },
  'redux-toolkit-query': { title: 'Why RTK Query is a Game Changer', content: 'Detailed content about RTK Query...' },
  'framer-motion-premium-ui': { title: 'Building Premium UIs with Framer Motion', content: 'Detailed content about Framer Motion...' }
};

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) return notFound();

  return (
    <div className="container mx-auto px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-8">{post.title}</h1>
        <div className="prose dark:prose-invert max-w-none text-lg text-secondary leading-relaxed">
          <p className="mb-8">
            This is a production-grade blog post implementation. In a real-world scenario, 
            this content would be fetched from a headless CMS like Contentful or Sanity.
          </p>
          <p className="mb-8">
            {post.content}
          </p>
          <div className="p-8 bg-primary/5 rounded-2xl border border-primary/10 italic">
            "Education is not the learning of facts, but the training of the mind to think." - Albert Einstein
          </div>
        </div>
      </div>
    </div>
  );
}
