'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ThemeSwitcher } from './ThemeSwitcher';

const navLinks = [
  { name: 'Home', href: '/home' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Blog', href: '/blog' },
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <header className="sticky top-0 z-50 w-full glassmorphism">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/home" className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          MD.
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <ThemeSwitcher />
        </div>
      </nav>
    </header>
  );
}
