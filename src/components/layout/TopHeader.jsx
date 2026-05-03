'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Download } from 'lucide-react';
import { cn } from '@/lib/utils';

const ANNOUNCEMENT_TEXT = 'Techno Mining is Live';

export default function TopHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className={cn(
          'sticky top-0 z-50 w-full',
          'border-b border-gray-200/80 bg-white/95 backdrop-blur',
          'transition-all duration-300'
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Single Smooth Moving Announcement Banner */}
        <div className="bg-black text-white overflow-hidden">
          <div className="relative py-3">
            <motion.div
              className="flex whitespace-nowrap"
              initial={{ x: '0%' }}
              animate={{ x: '-100%' }}
              transition={{
                repeat: Infinity,
                repeatType: 'loop',
                duration: 20,
                ease: 'linear',
              }}
            >
              <div className="flex items-center justify-center gap-8 pr-8 min-w-full">
                {Array.from({ length: 5 }).map((_, index) => (
                  <div key={index} className="flex items-center gap-8">
                    <span className="text-sm font-semibold">{ANNOUNCEMENT_TEXT}</span>
                    {index < 4 && <span className="h-1 w-1 rounded-full bg-white/50" />}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Utility Bar */}
        <div className={cn('bg-white', isScrolled ? 'shadow-sm' : 'shadow-none')}>
          <div
            className={cn(
              'max-w-7xl mx-auto px-4',
              'flex items-center justify-end gap-3 md:gap-4',
              isScrolled ? 'h-9' : 'h-10'
            )}
          >
            <motion.a
              href="mailto:info@technomining.com"
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 hover:text-blue-600 transition-colors"
              whileHover={{ y: -1 }}
            >
              <Mail size={14} />
              <span className="hidden sm:inline">Email Us</span>
            </motion.a>

            <motion.a
              href="/brochure.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold border border-blue-200 text-blue-700 bg-blue-50 hover:bg-blue-100 transition-all"
              whileHover={{ scale: 1.02 }}
            >
              <Download size={14} />
              <span className="hidden sm:inline">Download Brochure</span>
            </motion.a>
          </div>
        </div>
      </motion.header>
    </>
  );
}