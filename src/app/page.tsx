import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import Footer from "./_components/footer";
import Navbar from "./_components/navbar";
import Image from "next/image";

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
          <div className="relative z-10 p-4 text-background text-center">
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
              <Card
                key={service.title}
                className="p-0 bg-background/90 backdrop-blur-sm border border-border shadow-lg"
              >
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{service.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <section
          id="about"
          className="bg-foreground text-background p-4 rounded-sm"
        >
          b
        </section>
        <section
          id="contact"
          className="bg-foreground text-background p-4 rounded-sm"
        >
          c
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
