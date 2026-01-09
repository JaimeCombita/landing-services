# 🚀 Landing Services - Portfolio Profesional

Landing page moderna y optimizada para presentación de servicios profesionales de desarrollo, arquitectura backend y consultoría tecnológica.

## 📋 Descripción

Sitio web corporativo diseñado para mostrar servicios profesionales, proyectos destacados, stack tecnológico y propuesta de valor. Optimizado para SEO, rendimiento y conversiones.

## ✨ Características

- 🎨 **Diseño Moderno**: UI/UX profesional con animaciones fluidas y responsive design
- ⚡ **Alto Rendimiento**: Desarrollado con Next.js 16 y optimización de imágenes
- 🎯 **SEO Optimizado**: Meta tags, Open Graph, sitemap y estructura semántica
- 📱 **Responsive**: Adaptado a todos los dispositivos (desktop, tablet, mobile)
- 🔄 **Navegación Suave**: Scroll animado y transiciones entre secciones
- 📬 **Formulario de Contacto**: Integración con Airtable y validación de datos
- 💬 **WhatsApp Button**: Contacto directo flotante
- 🎭 **CSS-in-JS**: Vanilla Extract para estilos type-safe y zero-runtime

## 🛠️ Stack Tecnológico

### Frontend
- **Framework**: Next.js 16.1.1 (App Router)
- **React**: 19.2.3
- **TypeScript**: 5.x
- **Estilos**: Vanilla Extract CSS
- **Iconos**: Heroicons 2.2.0

### Backend/Integraciones
- **Email**: Resend API
- **Base de Datos**: Airtable (CRM contactos)
- **Deployment**: Vercel

### Dev Tools
- ESLint
- Babel React Compiler
- Webpack 5

## 📁 Estructura del Proyecto

```
landing-services/
├── app/
│   ├── layout.tsx              # Layout principal
│   ├── page.tsx                # Home page
│   ├── globals.css             # Estilos globales
│   ├── manifest.webmanifest    # PWA manifest
│   ├── api/
│   │   └── contact/
│   │       └── route.ts        # API endpoint contacto
│   └── servicios/              # Páginas de servicios
│       ├── desarrollo-web/
│       ├── ecommerce/
│       ├── aplicaciones-medida/
│       └── consultoria-tecnologica/
├── components/
│   ├── About.tsx               # Sección Acerca de
│   ├── ContactModal.tsx        # Modal de contacto
│   ├── Cta.tsx                 # Call to action
│   ├── CVModal.tsx             # Modal CV
│   ├── Footer.tsx              # Footer
│   ├── Hero.tsx                # Hero section
│   ├── HeroVisual.tsx          # Visual del hero
│   ├── LoadingSpinner.tsx      # Spinner de carga
│   ├── Navbar.tsx              # Navegación
│   ├── Projects.tsx            # Proyectos destacados
│   ├── Services.tsx            # Servicios
│   ├── TechStack.tsx           # Stack tecnológico
│   ├── WhatsAppButton.tsx      # Botón WhatsApp
│   ├── Workflow.tsx            # Proceso de trabajo
│   └── service-detail/         # Componentes de detalle
│       ├── ServiceHero.tsx
│       ├── ServiceDescription.tsx
│       ├── ServiceTech.tsx
│       └── ServiceCTA.tsx
├── styles/
│   ├── theme.css.ts            # Tema global
│   ├── components/             # Estilos de componentes
│   ├── layout/                 # Estilos de layout
│   ├── sections/               # Estilos de secciones
│   ├── tokens/                 # Design tokens
│   └── utils/                  # Utilidades CSS
├── lib/
│   └── email-templates/        # Templates de email
├── public/
│   ├── cv/                     # CV en PDF
│   ├── projects/               # Imágenes de proyectos
│   └── tech/                   # Logos de tecnologías
└── vercel.json                 # Configuración Vercel

```

## 🚀 Instalación y Desarrollo

### Prerrequisitos
- Node.js 20.x o superior
- npm o yarn

### Instalación

```bash
# Clonar repositorio
git clone https://github.com/JaimeCombita/landing-services.git
cd landing-services

# Instalar dependencias
npm install
```

### Variables de Entorno

Crear archivo `.env.local`:

```env
# Resend API (Email)
RESEND_API_KEY=tu_api_key

# Airtable (CRM)
AIRTABLE_API_KEY=tu_api_key
AIRTABLE_BASE_ID=tu_base_id
AIRTABLE_TABLE_NAME=Contactos

# WhatsApp
NEXT_PUBLIC_WHATSAPP_NUMBER=+573XXXXXXXXX
```

### Comandos

```bash
# Desarrollo (Webpack)
npm run dev

# Desarrollo (Turbopack - más rápido)
npm run dev:turbopack

# Build para producción
npm run build

# Iniciar servidor de producción
npm start

# Linter
npm run lint
```

## 📄 Páginas y Secciones

### Home (`/`)
- **Hero**: Presentación principal con CTA
- **About**: Acerca de y propuesta de valor
- **Services**: Grid de servicios profesionales
- **Tech Stack**: Tecnologías y herramientas
- **Workflow**: Proceso de trabajo en 4 pasos
- **Projects**: Timeline de proyectos destacados
- **CTA**: Call to action final
- **Footer**: Links y redes sociales

### Servicios (`/servicios/*`)
- `/servicios/desarrollo-web`
- `/servicios/ecommerce`
- `/servicios/aplicaciones-medida`
- `/servicios/consultoria-tecnologica`

Cada página de servicio incluye:
- Hero con descripción
- Features detallados
- Stack tecnológico específico
- Metodología de trabajo
- Call to action

## 🎨 Características de Diseño

- **Color Palette**: Azul profesional (#00D1FF, #1E90FF)
- **Typography**: System fonts optimizados
- **Animations**: CSS keyframes y transitions
- **Icons**: Heroicons outline
- **Shadows**: Elevaciones sutiles
- **Hover Effects**: Interacciones fluidas

## 📱 Responsive Breakpoints

```css
Desktop:  > 1200px
Tablet:   768px - 1200px
Mobile:   < 768px
```

## 🔧 Configuración

### Next.js Config
- Webpack 5
- Vanilla Extract plugin
- Image optimization
- Strict mode

### TypeScript
- Strict mode habilitado
- Path aliases (@/)
- JSX: preserve

## 📊 SEO

- Meta tags optimizados
- Open Graph tags
- Twitter Card
- Favicon y app icons
- Manifest.json (PWA ready)
- Sitemap automático
- Structured data

## 🚀 Deployment

### Vercel (Recomendado)

```bash
# Push a GitHub
git push origin main

# Vercel detecta automáticamente y despliega
```

### Build Manual

```bash
npm run build
npm start
```

## 📞 Contacto e Información

- **Autor**: Jaime Combita
- **GitHub**: [@JaimeCombita](https://github.com/JaimeCombita)
- **LinkedIn**: [Jaime Combita](https://linkedin.com/in/jaimecombita)
- **Sitio Web**: [landing-services.vercel.app](https://landing-services.vercel.app)

## 📝 Licencia

Este proyecto es de uso personal y no cuenta con licencia pública.

## 🙏 Agradecimientos

- Heroicons por los iconos
- Vercel por el hosting
- Next.js team por el framework

---

⭐ Si te gustó este proyecto, dale una estrella en GitHub!