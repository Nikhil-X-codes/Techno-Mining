'use client';

import { motion } from 'framer-motion';
import { BookOpen, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

export function GlassBlogCard({
  title = 'The Future of Service Delivery',
  excerpt = 'Exploring innovative approaches to service excellence and client satisfaction.',
  image = 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
  author = {
    name: 'Expert Team',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100',
  },
  date = 'May 1, 2026',
  readTime = '5 min read',
  tags = ['Innovation', 'Services'],
  className = '',
  onClick = () => {},
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false }}
      className={cn('w-full max-w-[400px] mx-auto', className)}
    >
      <div
        className={cn(
          'group relative h-full overflow-hidden rounded-2xl',
          'border border-blue-200 dark:border-blue-500/30',
          'bg-white/40 dark:bg-gray-900/40 backdrop-blur-xl',
          'transition-all duration-300 hover:border-blue-500 dark:hover:border-blue-400',
          'hover:shadow-2xl hover:shadow-blue-500/20',
          'cursor-pointer'
        )}
        onClick={onClick}
      >
        {/* Image Section */}
        <div className="relative aspect-[16/9] overflow-hidden bg-gray-200 dark:bg-gray-800">
          <motion.img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-50" />

          {/* Tags */}
          <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
            {tags?.map((tag, index) => (
              <span
                key={index}
                className={cn(
                  'px-3 py-1 rounded-full text-xs font-medium',
                  'bg-white/30 dark:bg-white/10 backdrop-blur-md',
                  'text-white border border-white/20',
                  'hover:bg-white/40 transition-colors'
                )}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Hover Action Button */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                'flex items-center gap-2 rounded-full',
                'bg-blue-600 hover:bg-blue-700 px-6 py-2.5',
                'text-sm font-semibold text-white',
                'shadow-lg shadow-blue-600/40',
                'transition-all duration-300'
              )}
            >
              <BookOpen size={16} />
              Read More
            </motion.button>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col gap-4 p-5">
          {/* Title & Excerpt */}
          <div className="space-y-2">
            <h3 className="text-lg font-bold leading-tight text-gray-900 dark:text-white transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400 line-clamp-2">
              {title}
            </h3>
            <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {excerpt}
            </p>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between border-t border-gray-200/50 dark:border-gray-700/50 pt-4">
            {/* Author */}
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full overflow-hidden border border-gray-300 dark:border-gray-600 flex-shrink-0">
                <img
                  src={author.avatar}
                  alt={author.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col text-xs">
                <span className="font-semibold text-gray-900 dark:text-white">
                  {author.name}
                </span>
                <span className="text-gray-500 dark:text-gray-400">{date}</span>
              </div>
            </div>

            {/* Read Time */}
            <div className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400 whitespace-nowrap">
              <Clock size={14} />
              <span>{readTime}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default GlassBlogCard;
