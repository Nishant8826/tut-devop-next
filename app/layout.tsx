import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { ReduxProvider } from "@/providers/ReduxProvider";
import { ThemeProvider } from "@/providers/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

// WHAT: Root Layout of the application.
// WHY: Sets up the base HTML structure and provides global state and theme contexts.
// HOW: Using Next.js Server Components and wrapping children with Providers.
// IMPACT: Centralizes layout logic and ensures performance through Server Rendering.

export const metadata: Metadata = {
  title: {
    default: "Modern Portfolio | Senior Frontend Engineer",
    template: "%s | Modern Portfolio"
  },
  description: "A production-grade portfolio built with Next.js, Redux, and Framer Motion.",
  keywords: ["Next.js", "React", "TypeScript", "Redux", "Tailwind CSS", "Portfolio"],
  authors: [{ name: "Professional Developer" }],
  creator: "Professional Developer",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio.example.com",
    siteName: "Modern Portfolio",
    title: "Modern Portfolio | Senior Frontend Engineer",
    description: "A production-grade portfolio built with Next.js, Redux, and Framer Motion.",
    images: [{ url: "/og-image.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Modern Portfolio | Senior Frontend Engineer",
    description: "A production-grade portfolio built with Next.js, Redux, and Framer Motion.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-background text-foreground transition-colors duration-300`}>
        <ReduxProvider>
          <ThemeProvider 
            attribute="data-theme" 
            defaultTheme="system" 
            enableSystem
            themes={['light', 'dark', 'forest', 'ocean', 'sunset']}
          >
            {children}
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
