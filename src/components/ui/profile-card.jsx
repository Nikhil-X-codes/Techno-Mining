'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export function ProfileCard({ 
  name = 'Richard Nelson',
  designation = 'Software Developer',
  bio = 'Passionate about clean code, scalable systems, and solving real-world problems with elegant software.',
  image = 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200',
  social = [],
  className = '',
}) {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const divRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const bounds = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - bounds.left, y: e.clientY - bounds.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className={cn(
        'relative w-full h-full max-w-sm mx-auto rounded-xl p-px bg-gradient-to-br from-gray-100 to-gray-200',
        'shadow-lg overflow-hidden cursor-pointer transition-all duration-300',
        className
      )}
    >
      {/* Gradient Spotlight Effect */}
      <motion.div
        className={cn(
          'pointer-events-none blur-3xl rounded-full bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-400',
          'size-80 absolute z-0 transition-opacity duration-500'
        )}
        animate={{ opacity: visible ? 1 : 0 }}
        style={{
          top: position.y - 160,
          left: position.x - 160,
        }}
      />

      {/* Card Content */}
      <motion.div
        className="relative z-10 bg-white/95 backdrop-blur-sm p-6 h-full w-full rounded-[11px] flex flex-col items-center justify-center text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Profile Image */}
        <motion.div
          className="relative mb-4"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <div className="w-24 h-24 rounded-full overflow-hidden shadow-md ring-4 ring-blue-50">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Name & Title */}
        <motion.h2
          className="text-2xl font-bold text-gray-900 mb-1"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {name}
        </motion.h2>

        <motion.p
          className="text-sm text-blue-600 font-semibold mb-4 uppercase tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
        >
          {designation}
        </motion.p>

        {/* Bio */}
        <motion.p
          className="text-sm text-gray-600 mb-6 px-4 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {bio}
        </motion.p>

        {social.length > 0 && (
          <motion.div
            className="flex gap-4 text-gray-600"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            {social.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                className={cn(
                  'p-2 rounded-lg bg-gray-100 text-gray-600',
                  'hover:bg-blue-100 hover:text-blue-600',
                  'transition-all duration-300'
                )}
                whileHover={{ scale: 1.1, y: -4 }}
                whileTap={{ scale: 0.95 }}
                aria-label={link.label}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export default ProfileCard;
