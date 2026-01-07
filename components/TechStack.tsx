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
  { name: 'Java', icon: '/tech/java.png' },
  { name: 'Spring Boot', icon: '/tech/spring.png' },
  { name: 'Docker', icon: '/tech/docker.png' },
  { name: 'Google Cloud', icon: '/tech/gcp.png' },
  { name: 'AWS', icon: '/tech/aws.png' },
  { name: 'Azure', icon: '/tech/azure.png' },
  { name: 'GitHub Actions', icon: '/tech/github.png' },
  { name: 'Jenkins CI/CD', icon: '/tech/jenkins.png' },
  { name: 'Git', icon: '/tech/git.png' },
  { name: 'PostgreSQL / MySQL / Oracle', icon: '/tech/databases.png' },
  { name: 'Redis', icon: '/tech/redis.png' },
  { name: 'React', icon: '/tech/react.png' },
  { name: 'Angular', icon: '/tech/angular.png' },
  { name: 'JUnit / Mockito', icon: '/tech/testing.png' },
  { name: 'APIs REST', icon: '/tech/api.png' },
  { name: 'Seguridad / OWASP', icon: '/tech/security.png' },
  { name: 'Inteligencia Artificial', icon: '/tech/ai.png' },
];

export default function TechStack() {
  return (
    <section className={techSection} id="tech">
      <h2 className={sectionTitle}>Tecnologías y Herramientas</h2>
      <p className={sectionSubtitle}>
        Trabajo con tecnologías modernas y estándares de ingeniería para garantizar rendimiento, seguridad y escalabilidad.
      </p>
      <div className={techGrid}>
        {technologies.map((tech, index) => (
          <div 
            key={tech.name} 
            className={techItem}
            style={{
              animationDelay: `${index * 0.05}s`
            }}
          >
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