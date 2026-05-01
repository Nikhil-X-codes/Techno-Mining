'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function CounterCard({ icon: Icon, label, value, suffix = '', delay = 0 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isInView]);

  useEffect(() => {
    if (!isInView) return;

    let animationFrameId;
    let currentCount = 0;
    const increment = value / 50;
    const duration = 2000;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      currentCount = Math.floor(value * progress);
      setCount(currentCount);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center justify-center p-6 md:p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg hover:shadow-lg transition-shadow"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: false, margin: "0px 0px -100px 0px" }}
      whileHover={{ y: -5 }}
    >
      <motion.div
        className="text-4xl md:text-5xl text-blue-600 mb-4"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {Icon && <Icon size={48} />}
      </motion.div>

      <motion.div className="text-3xl md:text-5xl font-bold text-gray-800 mb-2">
        {count}
        <span className="text-2xl md:text-3xl ml-1">{suffix}</span>
      </motion.div>

      <p className="text-gray-700 text-center font-medium">{label}</p>
    </motion.div>
  );
}
