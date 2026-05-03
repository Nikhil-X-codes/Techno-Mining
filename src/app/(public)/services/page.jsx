'use client';

import { motion } from 'framer-motion';
import ServiceCard from '@/components/services/ServiceCard';
import { servicesData } from '@/data/services-data';

export default function ServicesPage() {
  const caseStudies = [
    {
      title: 'DGMS Permission Fast-Track Processing',
      excerpt: 'Successfully obtained DGMS permissions for 50+ mining projects with 95% first-time approval rate.',
      image: 'https://images.unsplash.com/photo-1581092162562-40038f56386c?w=800&q=80',
      author: { name: 'Mining Expert Team', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100' },
      date: 'April 28, 2026',
      readTime: '4 min read',
      tags: ['DGMS', 'Compliance'],
    },
    {
      title: 'Drone Survey Efficiency Improvements',
      excerpt: 'Reduced survey costs by 40% while improving accuracy through advanced drone mapping technology.',
      image: 'https://images.unsplash.com/photo-1579088336603-cff46ba1143c?w=800&q=80',
      author: { name: 'Surveying Dept', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100' },
      date: 'April 25, 2026',
      readTime: '5 min read',
      tags: ['Drone', 'Technology'],
    },
    {
      title: 'Slope Stability Success Stories',
      excerpt: 'Prevented 15+ potential failures through scientific slope stability analysis and mitigation strategies.',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80',
      author: { name: 'Safety Team', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100' },
      date: 'April 22, 2026',
      readTime: '6 min read',
      tags: ['Safety', 'Analysis'],
    },
  ];

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
    <div className="pb-16 md:pb-24">
      {/* Page Header */}
      <motion.section
        className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 dark:from-slate-950 dark:via-blue-950 dark:to-slate-950 text-white py-12 md:py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-lg text-blue-100 dark:text-blue-200">
            Comprehensive mining and DGMS compliance solutions for your operations
          </p>
        </div>
      </motion.section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            {servicesData.map((service, index) => (
              <ServiceCard
                key={service.slug}
                icon={service.icon}
                title={service.title}
                description={service.description}
                image={service.image}
                imageAlt={service.imageAlt}
                href={`/services/${service.slug}`}
                delay={index * 0.05}
              />
            ))}
          </motion.div>
        </div>
      </section>

    </div>
  );
}
