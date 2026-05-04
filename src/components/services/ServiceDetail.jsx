'use client';

import ServiceHero from './ServiceHero';
import SplitSection from './SplitSection';
import IconGrid from './IconGrid';
import Timeline from './Timeline';
import ZigZagSteps from './ZigZagSteps';
import Checklist from './Checklist';
import HighlightSection from './HighlightSection';

export default function ServiceDetail({ service }) {
  const { title, description, image, imageAlt, details } = service;

  return (
    <div className="pb-16 md:pb-24">
      <ServiceHero title={title} description={description} image={image} imageAlt={imageAlt} />

      <SplitSection title="What is this service" description={details.whatIs} />
      <IconGrid title="Why it is needed" items={details.whyNeeded} />
      <Timeline title="What we do" items={details.whatWeDo} />
      <ZigZagSteps title="Step-by-step process" items={details.processSteps} />
      <Checklist title="Required documents" items={details.requiredDocuments} />
      <HighlightSection title="Benefits" items={details.benefits} />
    </div>
  );
}
