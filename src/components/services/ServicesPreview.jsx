'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import ServiceCard from './ServiceCard';
import { servicesData } from '@/data/services-data';

export default function ServicesPreview() {
  const featuredServices = servicesData.slice(0, 4);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-gray-50">
      <div className="pointer-events-none absolute -top-10 left-1/3 h-56 w-56 rounded-full bg-blue-100 blur-3xl opacity-70" />
      <div className="pointer-events-none absolute bottom-0 right-10 h-72 w-72 rounded-full bg-emerald-100 blur-3xl opacity-60" />
      <div className="max-w-7xl mx-auto px-4 relative">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.span
            className="text-blue-600 font-semibold text-sm uppercase tracking-wide"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            Our Services
          </motion.span>

          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 my-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            Comprehensive Mining Solutions
          </motion.h2>

          <motion.p
            className="text-gray-600 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            We offer end-to-end services tailored to meet the unique needs of modern mining operations.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          variants={containerVariants}
          initial="visible"
          animate="visible"
        >
          {featuredServices.map((service, index) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
              image={service.image}
              imageAlt={service.imageAlt}
              href={`/services/${service.slug}`}
              delay={index * 0.1}
            />
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Link href="/services">
            <motion.button
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
              whileHover={{ x: 5 }}
            >
              View All Services →
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
