import { notFound } from 'next/navigation';
import ServiceDetail from '@/components/services/ServiceDetail';
import { serviceDetails } from '@/data/service-details';

export default function ServiceDetailPage({ params }) {
  const service = serviceDetails.find((item) => item.slug === params.slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetail service={service} />;
}

export async function generateStaticParams() {
  return serviceDetails.map((item) => ({ slug: item.slug }));
}
