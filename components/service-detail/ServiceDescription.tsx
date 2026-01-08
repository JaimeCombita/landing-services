'use client';

import {
  descriptionSection,
  descriptionContainer,
  descriptionTitle,
  descriptionText,
  featuresList,
  featureItem,
  featureIcon,
  featureContent,
  featureTitle,
  featureDescription,
} from '@/styles/sections/service-detail.css';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

interface Feature {
  title: string;
  description: string;
}

interface ServiceDescriptionProps {
  title: string;
  description: string;
  features: Feature[];
}

export default function ServiceDescription({
  title,
  description,
  features,
}: ServiceDescriptionProps) {
  return (
    <section className={descriptionSection}>
      <div className={descriptionContainer}>
        <h2 className={descriptionTitle}>{title}</h2>
        <p className={descriptionText}>{description}</p>
        <div className={featuresList}>
          {features.map((feature, index) => (
            <div key={index} className={featureItem}>
              <CheckCircleIcon className={featureIcon} />
              <div className={featureContent}>
                <h3 className={featureTitle}>{feature.title}</h3>
                <p className={featureDescription}>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
