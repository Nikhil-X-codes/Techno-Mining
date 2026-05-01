'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import CounterCard from './AchievementCard';
import { achievementCounters } from '@/data/achievement-counters';

export default function AchievementsPreview() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-white">
      <div className="pointer-events-none absolute -top-16 right-8 h-60 w-60 rounded-full bg-indigo-100 blur-3xl opacity-60" />
      <div className="pointer-events-none absolute -bottom-24 left-0 h-80 w-80 rounded-full bg-blue-50 blur-3xl opacity-80" />
      <div className="max-w-7xl mx-auto px-4 relative">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <motion.span
            className="text-blue-600 font-semibold text-sm uppercase tracking-wide"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: false }}
          >
            Our Track Record
          </motion.span>

          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 my-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
          >
            Proven Excellence & Results
          </motion.h2>

          <motion.p
            className="text-gray-600 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: false }}
          >
            Our achievements showcase our commitment to quality and customer satisfaction in the mining industry.
          </motion.p>
        </motion.div>

        {/* Counter Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {achievementCounters.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: false }}
            >
              <CounterCard
                icon={achievement.icon}
                label={achievement.label}
                value={achievement.value}
                suffix={achievement.suffix}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: false }}
        >
          <Link href="/achievements">
            <motion.button
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
              whileHover={{ x: 5 }}
            >
              Explore Our Achievements →
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
