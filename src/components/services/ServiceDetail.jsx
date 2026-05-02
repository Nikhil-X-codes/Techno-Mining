'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  CheckCircle,
  ArrowRight,
  Info,
  HelpCircle,
  Briefcase,
  ListChecks,
  FileText,
  Sparkles,
} from 'lucide-react';

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ServiceDetail({ service }) {
  const Icon = service.icon;

  return (
    <div className="pb-16 md:pb-24">
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="pointer-events-none absolute -top-16 right-10 h-48 w-48 rounded-full bg-blue-600/30 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-56 w-56 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-20 grid gap-10 md:grid-cols-[1.2fr_0.8fr] items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-blue-200">
              Service
            </span>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mt-3">{service.name}</h1>
            <p className="text-lg md:text-xl text-blue-100 mt-4">{service.tagline}</p>
            <p className="text-sm md:text-base text-slate-200 mt-4 max-w-xl">
              {service.summary}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-slate-950 font-semibold px-5 py-3 rounded-md transition"
              >
                Get Consultation
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-blue-200/50 text-blue-100 hover:text-white hover:border-white px-5 py-3 rounded-md transition"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="bg-white/10 border border-white/10 rounded-2xl p-6 backdrop-blur"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="h-16 w-16 rounded-2xl bg-blue-500/20 flex items-center justify-center">
              {Icon && <Icon size={32} className="text-blue-200" />}
            </div>
            <h2 className="text-xl font-semibold mt-6">What you get</h2>
            <ul className="mt-4 space-y-3 text-sm text-blue-100">
              {service.benefits.slice(0, 3).map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-emerald-300 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="grid gap-6 md:grid-cols-2"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-center gap-2 text-gray-900">
                <Info size={18} className="text-blue-600" />
                <h2 className="text-xl font-semibold">What is this service?</h2>
              </div>
              <p className="text-gray-600 mt-3">{service.whatIs.what}</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-center gap-2 text-gray-900">
                <HelpCircle size={18} className="text-blue-600" />
                <h2 className="text-xl font-semibold">What problem does it solve?</h2>
              </div>
              <p className="text-gray-600 mt-3">{service.whatIs.problem}</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="grid gap-8 md:grid-cols-[0.35fr_0.65fr] items-start"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <div className="flex items-center gap-2 text-gray-900">
                <HelpCircle size={20} className="text-blue-600" />
                <h2 className="text-2xl font-bold">Why is it needed?</h2>
              </div>
              <p className="text-gray-600 mt-3">
                Strong reasons that protect safety, compliance, and business continuity.
              </p>
            </div>
            <div className="space-y-4">
              {service.whyNeeded.map((item) => (
                <div key={item} className="flex items-start gap-3 bg-white rounded-lg p-4 border border-gray-200">
                  <CheckCircle size={18} className="text-blue-600 mt-0.5" />
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="grid gap-8 md:grid-cols-[0.35fr_0.65fr]"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <div className="flex items-center gap-2 text-gray-900">
                <Briefcase size={20} className="text-blue-600" />
                <h2 className="text-2xl font-bold">What we do</h2>
              </div>
              <p className="text-gray-600 mt-3">
                Clear, practical actions that move your approval forward.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {service.whatWeDo.map((item) => (
                <div key={item} className="border border-gray-200 rounded-lg p-4 bg-white">
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-slate-950 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2">
              <ListChecks size={20} className="text-blue-200" />
              <h2 className="text-2xl font-bold">Process</h2>
            </div>
            <p className="text-blue-100 mt-3 max-w-2xl">
              A simple step-by-step flow so you know exactly what happens next.
            </p>
            <div className="mt-8 grid gap-5 md:grid-cols-5">
              {service.process.map((step, index) => (
                <div key={step.title} className="bg-white/10 border border-white/10 rounded-xl p-4">
                  <div className="h-10 w-10 rounded-full bg-blue-500/30 flex items-center justify-center text-sm font-semibold">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-base font-semibold mt-4">{step.title}</h3>
                  <p className="text-sm text-blue-100 mt-2">{step.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="grid gap-8 md:grid-cols-[0.35fr_0.65fr]"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <div className="flex items-center gap-2 text-gray-900">
                <FileText size={20} className="text-blue-600" />
                <h2 className="text-2xl font-bold">Documents required</h2>
              </div>
              <p className="text-gray-600 mt-3">
                Keep these ready to speed up the application and review stages.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {service.documents.map((item) => (
                <div key={item} className="flex items-start gap-3 border border-gray-200 rounded-lg p-4 bg-white">
                  <CheckCircle size={18} className="text-emerald-600 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 text-gray-900">
              <Sparkles size={20} className="text-emerald-600" />
              <h2 className="text-2xl font-bold">Benefits</h2>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {service.benefits.map((item) => (
                <div key={item} className="bg-white border border-gray-200 rounded-xl p-5">
                  <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center">
                    <CheckCircle size={18} className="text-emerald-600" />
                  </div>
                  <p className="text-gray-700 mt-4">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="rounded-2xl bg-gradient-to-r from-blue-600 via-blue-700 to-slate-900 text-white p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Ready to get started?</h2>
              <p className="text-blue-100 mt-3">
                Share your project details and we will guide you through the next steps.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-6 py-3 rounded-md"
              >
                Get Consultation
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-white/60 text-white px-6 py-3 rounded-md"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
