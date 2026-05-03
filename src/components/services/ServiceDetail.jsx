'use client';

import ServiceHero from './ServiceHero';
import ServiceSection from './ServiceSection';

export default function ServiceDetail({ service }) {
  const { title, description, image, imageAlt, details } = service;

  return (
    <div className="pb-16 md:pb-24">
      <ServiceHero title={title} description={description} image={image} imageAlt={imageAlt} />

      <div className="max-w-5xl mx-auto px-4 py-12 md:py-16 space-y-10">
        <ServiceSection title="What is this service" description={details.whatIs} />
        <ServiceSection title="Why it is needed" items={details.whyNeeded} />
        <ServiceSection title="What we do" items={details.whatWeDo} />
        <ServiceSection title="Step-by-step process" items={details.processSteps} />
        <ServiceSection title="Required documents" items={details.requiredDocuments} />
        <ServiceSection title="Benefits" items={details.benefits} />
      </div>
    </div>
  );
}
