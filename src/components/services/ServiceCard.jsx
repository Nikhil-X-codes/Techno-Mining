'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ServiceCard({ icon: Icon, title, description, delay = 0, href }) {
  return (
    <motion.div
      className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-600 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: false }}
      whileHover={{
        y: -10,
        boxShadow: '0 20px 40px rgba(37, 99, 235, 0.1)',
      }}
    >
      <motion.div
        className="text-5xl text-blue-600 mb-4"
        whileHover={{ scale: 1.2, rotate: 10 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      >
        {Icon && <Icon size={48} />}
      </motion.div>

      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>

      {href ? (
        <Link
          href={href}
          className="mt-4 text-blue-600 font-medium hover:text-blue-700 inline-flex items-center gap-2"
        >
          <motion.span whileHover={{ x: 5 }} className="inline-flex items-center gap-2">
            Learn More -&gt;
          </motion.span>
        </Link>
      ) : (
        <motion.button
          className="mt-4 text-blue-600 font-medium hover:text-blue-700 flex items-center gap-2"
          whileHover={{ x: 5 }}
        >
          Learn More -&gt;
        </motion.button>
      )}
    </motion.div>
  );
}