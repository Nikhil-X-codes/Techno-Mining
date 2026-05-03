import { notFound } from 'next/navigation';
import ServiceDetail from '@/components/services/ServiceDetail';
import { servicesData } from '@/data/services-data';

export async function generateStaticParams() {
  return servicesData.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = servicesData.find((item) => item.slug === slug);

  if (!service) {
    return { title: 'Service Not Found' };
  }

  return {
    title: `${service.title} | Services`,
    description: service.description,
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = servicesData.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const { title, description, image, imageAlt, details } = service;

  return <ServiceDetail service={{ title, description, image, imageAlt, details }} />;
}
