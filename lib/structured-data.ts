export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'JC Engine',
  alternateName: 'Jaime Combita - Soluciones Digitales',
  url: 'https://jcengine.co',
  logo: 'https://jcengine.co/logo.png',
  description: 'Más de 10 años construyendo sistemas seguros, tiendas online efectivas y soluciones tecnológicas. Arquitectura, desarrollo y consultoría de alto nivel para empresas.',
  foundingDate: '2014',
  founder: {
    '@type': 'Person',
    name: 'Jaime Combita',
    jobTitle: 'Tech Lead, Developer & Software Architect',
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'CO',
    addressLocality: 'Colombia',
  },
  sameAs: [
    'https://twitter.com/combita_jaime',
    'https://linkedin.com/in/jaime-combita',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    availableLanguage: ['Spanish', 'English'],
  },
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'JC Engine',
  url: 'https://jcengine.co',
  description: 'Soluciones Digitales y Consultoría Tecnológica',
  inLanguage: 'es-CO',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://jcengine.co/?s={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};

export const professionalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'JC Engine',
  image: 'https://jcengine.co/logo.png',
  '@id': 'https://jcengine.co',
  url: 'https://jcengine.co',
  telephone: '+57 3142609413',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'CO',
  },
  geo: {
    '@type': 'GeoCoordinates',
    addressCountry: 'CO',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '18:00',
  },
  sameAs: [
    'https://twitter.com/combita_jaime',
    'https://linkedin.com/in/jaime-combita',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '10',
  },
};

export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Jaime Combita',
  givenName: 'Jaime',
  familyName: 'Combita',
  jobTitle: 'Tech Lead & Software Architect',
  description: 'Más de 10 años construyendo sistemas seguros, tiendas online efectivas y soluciones tecnológicas.',
  url: 'https://jcengine.co',
  image: 'https://jcengine.co/profile.png',
  sameAs: [
    'https://twitter.com/combita_jaime',
    'https://linkedin.com/in/jaime-combita',
  ],
  knowsAbout: [
    'Software Architecture',
    'Web Development',
    'E-commerce',
    'Cloud Computing',
    'Fintech',
    'Next.js',
    'React',
    'Node.js',
    'Java',
    'Spring Boot',
  ],
  alumniOf: {
    '@type': 'Organization',
    name: 'Universidad',
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'CO',
  },
};

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const serviceSchema = (service: {
  name: string;
  description: string;
  url: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: service.name,
  provider: {
    '@type': 'Organization',
    name: 'JC Engine',
    url: 'https://jcengine.co',
  },
  name: service.name,
  description: service.description,
  url: service.url,
  areaServed: {
    '@type': 'Country',
    name: 'Colombia',
  },
  availableChannel: {
    '@type': 'ServiceChannel',
    serviceUrl: service.url,
  },
});
