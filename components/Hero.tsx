import { hero } from '../styles/hero.css';

export default function Hero() {
  return (
    <section className="bg-[var(--background)] text-[var(--foreground)] py-32">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h1 className="text-5xl font-bold font-heading leading-tight">
            Soluciones digitales escalables para empresas que necesitan arquitectura, desarrollo y consultoría de alto nivel
          </h1>
          <p className="mt-6 text-lg text-neutral-medium max-w-xl">
            Más de 10 años construyendo sistemas seguros, tiendas online efectivas y soluciones tecnológicas alineadas a objetivos de negocio.
          </p>
          <div className="mt-8 flex gap-4">
            <button className="bg-brand-electric text-white px-8 py-3 rounded-md hover:bg-brand-cyan transition">
              Agendar consulta
            </button>
            <button className="border-2 border-brand-electric text-white px-8 py-3 rounded-md hover:bg-brand-electric/20 transition">
              Ver proyectos
            </button>
          </div>
          <div className="mt-6 flex items-center gap-2 text-sm text-neutral-medium">
            <span className="inline-block w-5 h-5 bg-brand-cyan rounded-full" />
            Experiencia en banca, fintech y soluciones empresariales
          </div>
        </div>
        <div className="relative">
          {/* Aquí iría tu mockup visual */}
          <div className="w-full h-80 bg-neutral-light rounded-xl shadow-strong" />
        </div>
      </div>
    </section>
  );
}
