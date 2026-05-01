'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPreview() {
  const contactMethods = [
    {
      id: 1,
      icon: Mail,
      label: 'Email',
      value: 'info@technomining.com',
      link: 'mailto:info@technomining.com',
    },
    {
      id: 2,
      icon: Phone,
      label: 'Phone',
      value: '+91-9876543210',
      link: 'tel:+919876543210',
    },
    {
      id: 3,
      icon: MapPin,
      label: 'Location',
      value: 'New Delhi, India',
      link: '#',
    },
  ];

  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-gray-50">
      <div className="pointer-events-none absolute -top-20 left-1/4 h-64 w-64 rounded-full bg-sky-100 blur-3xl opacity-70" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-amber-100 blur-3xl opacity-60" />
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
            Get In Touch
          </motion.span>

          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 my-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
          >
            Contact Information
          </motion.h2>

          <motion.p
            className="text-gray-600 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: false }}
          >
            Reach out to us anytime. We're here to help and answer any questions you might have.
          </motion.p>
        </motion.div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <motion.a
                key={method.id}
                href={method.link}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: false }}
              >
                <motion.div
                  className="bg-white border border-gray-200 rounded-lg p-8 text-center hover:border-blue-600 transition-all duration-300"
                  whileHover={{
                    y: -10,
                    boxShadow: '0 20px 40px rgba(37, 99, 235, 0.1)',
                  }}
                >
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <IconComponent size={32} />
                  </motion.div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {method.label}
                  </h3>
                  <p className="text-gray-600 group-hover:text-blue-600 transition-colors">
                    {method.value}
                  </p>
                </motion.div>
              </motion.a>
            );
          })}
        </div>

        {/* CTA Button */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: false }}
        >
          <Link href="/contact">
            <motion.button
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
              whileHover={{ x: 5 }}
            >
              Contact Us →
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
