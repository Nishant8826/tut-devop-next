import React from 'react';

// WHAT: Contact Page (SSR).
// WHY: SSR ensures that the contact form is always pre-rendered correctly and ready for interaction.
// HOW: Using standard Server Components.
// IMPACT: Professional, secure, and SEO-friendly contact interface.

export default function ContactPage() {
  return (
    <div className="container mx-auto px-6 py-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-20">
        <div className="flex-1">
          <h2 className="text-5xl font-extrabold mb-8 leading-tight">
            Let's build something <span className="text-primary italic">extraordinary</span> together.
          </h2>
          <p className="text-xl text-secondary mb-12">
            Interested in collaboration? Drop me a message and I'll get back to you within 24 hours.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 glassmorphism rounded-xl flex items-center justify-center text-xl">📧</div>
              <div>
                <p className="font-bold">Email</p>
                <p className="text-secondary">hello@example.com</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 glassmorphism rounded-xl flex items-center justify-center text-xl">📍</div>
              <div>
                <p className="font-bold">Location</p>
                <p className="text-secondary">San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <form className="glassmorphism p-10 rounded-3xl space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-bold mb-2">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full bg-background/50 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-all"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-bold mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full bg-background/50 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-all"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-bold mb-2">Message</label>
              <textarea 
                id="message" 
                rows={5}
                className="w-full bg-background/50 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-all"
                placeholder="How can I help you?"
              ></textarea>
            </div>
            <button className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:opacity-90 shadow-lg shadow-primary/20 transition-all">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
