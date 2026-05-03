'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ServiceHero({ title, description, image, imageAlt }) {
  return (
    <motion.section
      className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 grid gap-8 md:grid-cols-[1.1fr_0.9fr] items-center">
        <div>
          <p className="text-blue-200 text-sm uppercase tracking-widest mb-3">Service</p>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">{title}</h1>
          <p className="text-blue-100 text-lg max-w-xl">{description}</p>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 rounded-3xl bg-blue-500/20 blur-2xl" />
          <Image
            className="relative w-full h-56 md:h-64 object-cover rounded-2xl border border-white/10 shadow-xl"
            src={encodeURI(image)}
            alt={imageAlt}
            width={400}
            height={256}
          />
        </div>
      </div>
    </motion.section>
  );
}
