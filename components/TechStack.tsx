'use client';

import {
  techSection,
  sectionTitle,
  sectionSubtitle,
  techGrid,
  techItem,
  techIcon,
  techLabel,
} from '@/styles/sections/tech.css';

import Image from 'next/image';

const technologies = [
  { name: 'Java', icon: '/tech/java.svg' },
  { name: 'Spring Boot', icon: '/tech/spring.svg' },
  { name: 'Docker', icon: '/tech/docker.svg' },
  { name: 'Google Cloud', icon: '/tech/gcp.svg' },
  { name: 'AWS', icon: '/tech/aws.svg' },
  { name: 'Azure', icon: '/tech/azure.svg' },
  { name: 'GitHub Actions', icon: '/tech/github.svg' },
  { name: 'Jenkins CI/CD', icon: '/tech/jenkins.svg' },
  { name: 'Git', icon: '/tech/git.svg' },
  { name: 'PostgreSQL / MySQL / Oracle', icon: '/tech/databases.svg' },
  { name: 'React', icon: '/tech/react.svg' },
  { name: 'Angular', icon: '/tech/angular.svg' },
  { name: 'JUnit / Mockito', icon: '/tech/testing.svg' },
  { name: 'APIs REST', icon: '/tech/api.svg' },
  { name: 'Seguridad / OWASP', icon: '/tech/security.svg' },
];

export default function TechStack() {
  return (
    <section className={techSection} id="tech">
      <h2 className={sectionTitle}>Tecnologías y Herramientas</h2>
      <p className={sectionSubtitle}>
        Trabajo con tecnologías modernas y estándares de ingeniería para garantizar rendimiento, seguridad y escalabilidad.
      </p>
      <div className={techGrid}>
        {technologies.map((tech) => (
          <div key={tech.name} className={techItem}>
            <Image
              src={tech.icon}
              alt={tech.name}
              width={48}
              height={48}
              className={techIcon}
            />
            <span className={techLabel}>{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}