'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const blogPosts = [
  {
    title: 'Innovating Technology Solutions for Modern Business',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=800&auto=format&fit=crop&q=60',
  },
  {
    title: 'Digital Transformation: The Key to Future Success',
    category: 'Business Strategy',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&auto=format&fit=crop&q=60',
  },
  {
    title: 'Building Scalable Cloud Infrastructure',
    category: 'Cloud Solutions',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=800&auto=format&fit=crop&q=60',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function BlogCards() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="flex flex-col items-center w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          {/* Header */}
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-3">
            Latest Blog & Resources
          </h2>
          <p className="text-sm md:text-base text-gray-600 mt-2 max-w-2xl text-center">
            Stay ahead of the curve with fresh insights on technology, business strategy, and best practices for digital transformation.
          </p>

          {/* Blog Cards */}
          <motion.div
            className="mt-12 flex flex-wrap justify-center gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="max-w-72 w-full group cursor-pointer"
              >
                <motion.div
                  className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
                  whileHover={{ y: -8 }}
                >
                  <div className="relative overflow-hidden bg-gray-200 h-48">
                    <motion.img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                </motion.div>

                <motion.div className="mt-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                  <h3 className="text-base text-gray-900 font-semibold leading-relaxed group-hover:text-blue-600 transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-xs text-blue-600 font-medium mt-3 uppercase tracking-wide">
                    {post.category}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default BlogCards;
