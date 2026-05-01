'use client';

import { motion } from 'framer-motion';
import CounterCard from '@/components/achievements/AchievementCard';
import { achievementCounters } from '@/data/achievement-counters';
import { Award, ShieldCheck, Star, Trophy } from 'lucide-react';

export default function AchievementsPage() {
  return (
    <div className="pb-16 md:pb-24">
      {/* Page Header */}
      <motion.section
        className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-12 md:py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Achievements
          </h1>
          <p className="text-lg text-blue-100">
            Proven results, trusted partnerships, and measurable impact across mining operations.
          </p>
        </div>
      </motion.section>

      {/* Achievements Grid - Larger Layout */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Performance Snapshot</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-3">
              Four key indicators that reflect our scale, safety-first delivery, and compliance record.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {achievementCounters.map((achievement, index) => (
              <motion.div key={achievement.label} className="text-center">
                <div className="scale-110 md:scale-105">
                  <CounterCard
                    icon={achievement.icon}
                    label={achievement.label}
                    value={achievement.value}
                    suffix={achievement.suffix}
                    delay={index * 0.1}
                  />
                </div>
                <motion.p
                  className="text-gray-600 text-sm mt-4 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: false }}
                >
                  {achievement.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 text-blue-600 mb-4">
              <Trophy size={28} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Awards & Recognition</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-3">
              Industry acknowledgements for our safety, compliance, and project delivery outcomes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                award: 'National Mining Safety Excellence',
                issuer: 'Directorate General of Mines Safety',
                year: '2025',
              },
              {
                award: 'Compliance Partner of the Year',
                issuer: 'Mining Operations Council',
                year: '2024',
              },
              {
                award: 'Innovation in Surveying',
                issuer: 'GeoTech Industry Forum',
                year: '2023',
              },
            ].map((item, index) => (
              <motion.div
                key={item.award}
                className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: false }}
                whileHover={{ y: -6, boxShadow: '0 18px 40px rgba(15, 23, 42, 0.12)' }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center">
                    <Award size={26} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{item.award}</h3>
                    <p className="text-sm text-gray-600 mt-1">{item.issuer}</p>
                    <p className="text-sm font-semibold text-blue-600 mt-3">{item.year}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Performance Metrics</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-3">
              Quantified outcomes that show how we deliver reliable, compliant, and safe mining projects.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              { label: 'Client Satisfaction', value: 96 },
              { label: 'Success Rate', value: 94 },
              { label: 'Safety Score', value: 98 },
            ].map((metric, index) => (
              <motion.div
                key={metric.label}
                className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: false }}
              >
                <div className="flex items-center justify-between mb-4">
                  <p className="text-gray-900 font-semibold">{metric.label}</p>
                  <p className="text-blue-600 font-semibold">{metric.value}%</p>
                </div>
                <div className="h-3 rounded-full bg-gray-100 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${metric.value}%` }}
                    transition={{ duration: 1.2, delay: 0.2 }}
                    viewport={{ once: false }}
                  />
                </div>
                <p className="text-sm text-gray-500 mt-3">
                  Consistent delivery across multiple mining programs.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <motion.section
        className="py-20 md:py-28 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 text-blue-600 mb-4">
              <Star size={26} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Client Testimonials</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-3">
              Partners rely on Techno Mining for clear compliance guidance and dependable execution.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Amit Verma',
                company: 'Shakti Minerals',
                quote:
                  'Techno Mining helped us align every DGMS requirement while keeping production on schedule.',
              },
              {
                name: 'Priya Nair',
                company: 'North Ridge Mining',
                quote:
                  'Their surveying and reporting workflows are detailed, fast, and highly dependable.',
              },
              {
                name: 'Vikram Patil',
                company: 'Aranya Resources',
                quote: 'A safety-first partner that makes compliance feel structured and manageable.',
              },
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: false }}
                whileHover={{ y: -6, boxShadow: '0 18px 40px rgba(15, 23, 42, 0.12)' }}
              >
                <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.company}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Certifications */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 text-blue-600 mb-4">
              <ShieldCheck size={26} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Certifications</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-3">
              Recognized by key authorities for our compliance and safety management practices.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'ISO 9001:2015', authority: 'Quality Management', year: '2025' },
              { title: 'ISO 45001:2018', authority: 'Occupational Health & Safety', year: '2024' },
              { title: 'DGMS Certified Partner', authority: 'DGMS India', year: '2023' },
            ].map((cert, index) => (
              <motion.div
                key={cert.title}
                className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: false }}
                whileHover={{ y: -6, boxShadow: '0 18px 40px rgba(15, 23, 42, 0.12)' }}
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <ShieldCheck size={22} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{cert.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{cert.authority}</p>
                <p className="text-sm font-semibold text-blue-600 mt-3">{cert.year}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
