'use client';

import { motion } from 'framer-motion';
import { Target, Lightbulb, Users } from 'lucide-react';

export default function AboutPage() {
  const founders = [
    {
      name: 'Arjun Malhotra',
      designation: 'Founder & Managing Director',
      intro: 'Mining operations strategist focused on DGMS compliance and safe production scaling.',
      image: '/images/owner-1.jpg',
    },
    {
      name: 'Meera Iyer',
      designation: 'Co-Founder & Technical Director',
      intro: 'Surveying and safety systems expert driving data-led planning across mine sites.',
      image: '/images/owner-2.jpg',
    },
  ];

  const teamMembers = [
    {
      name: 'Rahul Singh',
      role: 'Senior Mine Planner',
      image: '/images/hero-1.jpg',
    },
    {
      name: 'Neha Kapoor',
      role: 'Compliance Lead',
      image: '/images/hero-2.jpg',
    },
    {
      name: 'Vikram Desai',
      role: 'Surveying Specialist',
      image: '/images/hero-3.jpg',
    },
    {
      name: 'Aisha Khan',
      role: 'Safety Programs Manager',
      image: '/images/owner-1.jpg',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Techno Mining</h1>
          <p className="text-lg text-blue-100">
            Built on compliance, safety, and technical expertise for modern mining operations.
          </p>
        </div>
      </motion.section>

      {/* Founders Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            Meet Our Founders
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            {founders.map((founder, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <motion.div
                  className="mb-6 aspect-square bg-gray-200 rounded-lg overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {founder.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3">
                  {founder.designation}
                </p>
                <p className="text-gray-600 leading-relaxed">{founder.intro}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Company Introduction
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Techno Mining is a professional services firm helping mine operators stay compliant, safe, and productive. We blend field experience with regulatory insight to plan, audit, and optimize operations at every stage of a mining project.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              From DGMS documentation to advanced surveying and safety programs, our teams deliver dependable outcomes that reduce risk and keep mines running smoothly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Mission */}
            <motion.div
              className="bg-blue-50 rounded-2xl p-8 md:p-12"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="text-5xl text-blue-600 mb-4"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Target size={48} />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To deliver compliance-first mining services that protect people, meet regulatory demands, and enable efficient production.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              className="bg-blue-50 rounded-2xl p-8 md:p-12"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="text-5xl text-blue-600 mb-4"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.1 }}
              >
                <Lightbulb size={48} />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To be the most trusted mining partner for safety, surveying, and compliance excellence across India.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 text-blue-600 mb-4">
              <Users size={28} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-3">
              Specialists across planning, compliance, and field safety who keep projects on track.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            {teamMembers.map((member) => (
              <motion.div
                key={member.name}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
                whileHover={{ y: -8 }}
              >
                <div className="h-52 w-full overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-sm text-blue-600 font-medium mt-1">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
