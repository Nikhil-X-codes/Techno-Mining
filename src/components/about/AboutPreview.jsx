'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPreview() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-white">
      <div className="pointer-events-none absolute -top-24 right-0 h-64 w-64 rounded-full bg-blue-100 blur-3xl opacity-70" />
      <div className="pointer-events-none absolute -bottom-20 left-10 h-72 w-72 rounded-full bg-amber-100 blur-3xl opacity-60" />
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
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
              About Us
            </motion.span>

            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-900 my-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false }}
            >
              Trusted Leader in Mining Services
            </motion.h2>

            <motion.p
              className="text-gray-600 text-lg leading-relaxed mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: false }}
            >
              Techno Mining delivers compliance-ready planning, surveying, and safety systems for modern mining operations. We help teams reduce risk, meet regulatory timelines, and keep production steady.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: false }}
            >
              <Link href="/about">
                <motion.button
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
                  whileHover={{ x: 5 }}
                >
                  Read More →
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative h-96 rounded-2xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            whileHover={{ scale: 1.02 }}
          >
            <Image
              src="/images/owner-1.jpg"
              alt="Techno Mining leadership team"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={false}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/50 via-slate-900/10 to-transparent" />
            <div className="absolute bottom-6 left-6 rounded-xl bg-white/90 px-4 py-3 shadow-lg">
              <p className="text-sm uppercase tracking-wide text-gray-500">Company Focus</p>
              <p className="text-lg font-semibold text-gray-900">Compliance-led operations</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
