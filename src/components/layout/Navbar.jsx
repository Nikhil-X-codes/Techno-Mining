'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const menuItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Achievements', href: '/achievements' },
  { label: 'Contact', href: '/contact' },
];

const containerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  return (
    <motion.nav
      className={cn(
        'sticky top-[72px] lg:top-[80px] z-40 w-full transition-all duration-300',
        isScrolled
          ? 'bg-white/90 dark:bg-gray-950/90 backdrop-blur-lg border-b border-gray-200/80 dark:border-gray-800/80 shadow-lg'
          : 'bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800'
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <div
        className={cn(
          'max-w-7xl mx-auto px-4 transition-all duration-300',
          isScrolled ? 'py-3' : 'py-4'
        )}
      >
        <div className="flex items-center justify-between">
          <Link href="/" className="text-left">
            <motion.span
              className="text-lg md:text-xl font-bold text-gray-900 dark:text-white"
              whileHover={{ y: -1 }}
            >
              Techno Mining
            </motion.span>
          </Link>

          {/* Desktop Menu */}
          <motion.div
            className="hidden md:flex items-center gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {menuItems.map((item) => (
              <motion.div key={item.href} variants={itemVariants} className="relative">
                <motion.div whileHover={{ y: -2 }}>
                  <Link
                    href={item.href}
                    className={cn(
                      'relative font-semibold transition-colors duration-300 flex items-center gap-1 text-sm lg:text-base',
                      isActive(item.href)
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                    )}
                  >
                    {item.label}
                    {isActive(item.href) && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-400"
                        layoutId="underline"
                        transition={{ type: 'spring', stiffness: 380, damping: 40 }}
                      />
                    )}
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
              className={cn(
                'p-2 rounded-lg transition-colors',
                'text-gray-700 dark:text-gray-300',
                'hover:bg-gray-100 dark:hover:bg-gray-800'
              )}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={isOpen ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div
            className={cn(
              'pt-4 border-t border-gray-200 dark:border-gray-700',
              'flex flex-col gap-2 w-full'
            )}
          >
            {menuItems.map((item) => (
              <motion.div key={item.href} whileHover={{ x: 5 }}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'block w-full text-left py-3 px-4 font-semibold',
                    'rounded-lg transition-colors duration-200',
                    isActive(item.href)
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  )}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}

