'use client';

import { motion } from 'framer-motion';
import ServiceCard from '@/components/services/ServiceCard';
import { FileCheck, Users, Map, Drone, Zap, Shield, CheckCircle2 } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      icon: FileCheck,
      title: 'DGMS Permission & Compliance',
      description:
        'Expert assistance in obtaining DGMS permissions and ensuring statutory compliance for mining operations.',
      details: [
        'Regulatory documentation and submissions',
        'Compliance audits and action plans',
        'Ongoing statutory reporting support',
      ],
    },
    {
      icon: Users,
      title: 'Statutory Manpower Deployment',
      description:
        'Professional manpower deployment meeting all statutory requirements and safety standards.',
      details: [
        'Qualified managers and safety officers',
        'Shift coverage and staffing plans',
        'Training and readiness audits',
      ],
    },
    {
      icon: Map,
      title: 'DGMS Survey Plan & Section',
      description:
        'Comprehensive survey documentation including detailed plans and geological sections for mining sites.',
      details: [
        'Certified mine plans and sections',
        'Boundary and lease demarcation',
        'GIS-ready documentation packages',
      ],
    },
    {
      icon: Drone,
      title: 'Drone Surveying Services',
      description:
        'Modern drone technology for precise aerial surveys, mapping, and site documentation.',
      details: [
        'Orthomosaic and contour mapping',
        'Volumetric analysis and reporting',
        'Rapid turnarounds for large sites',
      ],
    },
    {
      icon: Zap,
      title: 'Scientific Blasting & Slope Stability',
      description:
        'Expert blasting design and comprehensive slope stability analysis using scientific methods.',
      details: [
        'Blast pattern design and review',
        'Slope stability modeling',
        'Risk mitigation recommendations',
      ],
    },
    {
      icon: Shield,
      title: 'EC & CTO/CTE Applications',
      description:
        'Complete assistance with Environment Clearance and technical approval applications.',
      details: [
        'Application drafting and compliance',
        'Stakeholder coordination',
        'Follow-ups through approvals',
      ],
    },
  ];

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
        className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-12 md:py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-lg text-blue-100">
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
            viewport={{ once: false }}
          >
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 0.05}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Detailed Service Coverage
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-3">
              Choose the exact support you need or combine services for a full compliance and operations package.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm"
                whileHover={{ y: -6, boxShadow: '0 18px 40px rgba(15, 23, 42, 0.12)' }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                    <service.icon size={26} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.details.map((detail) => (
                        <li key={detail} className="flex items-center gap-2 text-sm text-gray-700">
                          <CheckCircle2 size={16} className="text-blue-600" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
