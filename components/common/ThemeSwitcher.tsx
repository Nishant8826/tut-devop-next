'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Sun, Moon, TreePine, Waves, Sunset, Palette } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const themes = [
  { name: 'light', icon: Sun, color: 'bg-blue-500' },
  { name: 'dark', icon: Moon, color: 'bg-slate-900' },
  { name: 'forest', icon: TreePine, color: 'bg-emerald-700' },
  { name: 'ocean', icon: Waves, color: 'bg-sky-700' },
  { name: 'sunset', icon: Sunset, color: 'bg-purple-700' },
];

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full hover:bg-current/10 transition-colors flex items-center gap-2"
        aria-label="Select Theme"
      >
        <Palette size={20} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="absolute right-0 mt-2 w-48 p-2 rounded-2xl glassmorphism z-50 border border-current/10 shadow-xl"
            >
              <div className="grid grid-cols-1 gap-1">
                {themes.map((t) => {
                  const Icon = t.icon;
                  return (
                    <button
                      key={t.name}
                      onClick={() => {
                        setTheme(t.name);
                        setIsOpen(false);
                      }}
                      className={`flex items-center gap-3 w-full px-3 py-2 rounded-xl transition-all ${
                        theme === t.name 
                          ? 'bg-primary text-white shadow-lg' 
                          : 'hover:bg-current/10'
                      }`}
                    >
                      <div className={`p-1.5 rounded-lg ${theme === t.name ? 'bg-white/20' : 'bg-current/5'}`}>
                        <Icon size={16} />
                      </div>
                      <span className="text-sm font-medium capitalize">{t.name}</span>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
