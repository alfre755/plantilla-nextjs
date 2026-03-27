import Footer from "./_components/footer";
import Navbar from "./_components/navbar";
import Image from "next/image";
import { CustomCard } from "@/components/shared/custom-card";
import { EnvelopeIcon, MapInIcon, PhoneIcon } from "@/utils/select-icons";
import FormContact from "./_components/form-contact";

const services = [
  {
    title: "Consultoría",
    desc: "Diagnóstico estratégico y hoja de ruta para modernizar tu empresa.",
    content: "Planificación, estrategia y arquitectura con foco en resultados.",
  },
  {
    title: "Desarrollo a medida",
    desc: "Construcción de software escalable con metodologías ágiles.",
    content:
      "Apps modernas, API's y mejoras continuas para crecimiento digital.",
  },
  {
    title: "Soporte y operación",
    desc: "Mantenimiento continuo y optimización para tu arquitectura.",
    content:
      "Servicios de mantenimiento y soporte técnico para garantizar el funcionamiento óptimo de tu infraestructura.",
  },
];

const metricas = [
  { number: "10+", label: "Proyectos entregados" },
  { number: "2", label: "Años de experiencia" },
  { number: "100%", label: "Compromiso con el cliente" },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navbar />
      </header>
      <main className="flex-1 w-full flex flex-col gap-4">
        <section id="home" className="relative h-100 overflow-visible">
          <div className="absolute inset-0">
            <Image
              src="/assets/images/fondo2.png"
              alt="Background"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
          <div className="relative z-10 p-4 text-white text-center">
            <h1 className="text-3xl font-black leading-tight md:text-5xl md:leading-tight">
              Soluciones tecnológicas que impulsan tu negocio
            </h1>
            <p className="mt-3 text-lg md:text-xl max-w-2xl mx-auto">
              Automatizamos procesos y entregamos productos digitales robustos
              para ayudarte a ser más competitivo.
            </p>
            <p className="mt-4 text-xs md:text-sm uppercase tracking-wider text-primary-light font-semibold">
              Tu socio digital confiable en cada etapa.
            </p>
          </div>
        </section>

        <div className="relative mx-auto -mt-16 w-full max-w-6xl px-4 md:px-8">
          <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3">
            {services.map((service) => (
              <CustomCard
                key={service.title}
                title={service.title}
                desc={service.desc}
                content={service.content}
              />
            ))}
          </div>
        </div>
        <section
          id="about"
          className="py-20 px-4 md:px-8 bg-foreground text-background"
        >
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Texto */}
            <div>
              <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-3">
                Quiénes somos
              </p>
              <h2 className="text-3xl md:text-4xl font-black leading-tight mb-6">
                Tecnología con propósito, resultados con impacto
              </h2>
              <p className="text-background/70 text-base leading-relaxed mb-4">
                Somos un equipo de ingenieros y estrategas digitales apasionados
                por construir soluciones que realmente transforman negocios. Nos
                especializamos en consultoría, desarrollo a medida y soporte
                continuo.
              </p>
              <p className="text-background/70 text-base leading-relaxed">
                Trabajamos como un socio estratégico, no solo como proveedores.
                Entendemos tu negocio antes de escribir la primera línea de
                código.
              </p>
            </div>

            {/* Métricas */}
            <div className="grid grid-cols-3 gap-6 text-center">
              {metricas.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-2">
                  <span className="text-4xl font-black text-secondary">
                    {stat.number}
                  </span>
                  <span className="text-sm text-background/60 leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="py-20 px-4 md:px-8 bg-background text-foreground"
        >
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Encabezado + datos */}
            <div>
              <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
                Contacto
              </p>
              <h2 className="text-3xl md:text-4xl font-black leading-tight mb-6">
                Hablemos de tu próximo proyecto
              </h2>
              <p className="text-foreground/60 mb-8 leading-relaxed">
                Cuéntanos qué necesitas. Responderemos lo antes posible.
              </p>
              <div className="flex flex-col gap-4 text-sm text-foreground/70">
                <span className="flex gap-2">
                  <EnvelopeIcon className="w-5 h-5 fill-foreground" />
                  alfredo@curidocode.cl
                </span>
                <span className="flex gap-2">
                  <PhoneIcon className="w-5 h-5 fill-foreground" /> +569 6442
                  8992
                </span>
                <span className="flex gap-2">
                  <MapInIcon className="w-5 h-5 fill-foreground" /> Curico,
                  Chile
                </span>
              </div>
            </div>

            {/* Formulario */}
            <FormContact />
          </div>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
