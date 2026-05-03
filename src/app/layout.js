'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { Sora } from 'next/font/google';
import TopHeader from '@/components/layout/TopHeader';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ChatbotButton from '@/components/ui/ChatbotButton';
import './globals.css';

const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const showFooter = pathname === '/';

  return (
    <html lang="en">
      <head>
        <title>Techno Mining - Compliance & Surveying Experts</title>
        <meta name="description" content="Techno Mining delivers DGMS compliance, surveying, and safety solutions for modern mining operations." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${sora.className} bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100`}>
        <TopHeader />
        <Navbar />
        <AnimatePresence mode="wait" initial={false}>
          <motion.main
            key={pathname}
            className="min-h-screen"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            {children}
          </motion.main>
        </AnimatePresence>
        <ChatbotButton />
        {showFooter ? <Footer /> : null}
      </body>
    </html>
  );
}
