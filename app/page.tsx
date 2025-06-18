"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Calendar, CheckCircle, Play } from "lucide-react"
import { useEffect, useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
// Import the TransformationCarousel component
import { TransformationCarousel } from "@/components/transformation-carousel"
import { WhatsAppTestimonials } from "@/components/whatsapp-testimonials"
import { transformationItems } from "@/lib/cambios"

export default function Home() {
  const [videoPlaying, setVideoPlaying] = useState(false)

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20 md:py-32 min-h-screen flex items-center">
        <div className="container mx-auto px-4 md:px-6 ">
          <motion.div
            className="flex flex-col lg:flex-row items-center gap-12"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div className="lg:w-1/2 space-y-6" variants={fadeInUp}>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                ¿Sos un trabajador ocupado, que busca ganar masa muscular y perder grasa?
              </h1>
              <p className="text-lg md:text-xl text-gray-300">
                En solo 12 semanas, transforma tu cuerpo con un plan 100% personalizado que se adapta a tu cuerpo y
                estilo de vida. Sin dietas estrictas ni horas interminables en el gimnasio.
              </p>
              <motion.div className="hidden lg:block" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-6 text-lg"
                  onClick={() => document.getElementById("calendly")?.scrollIntoView({ behavior: "smooth" })}
                >
                  AGENDAR REUNIÓN GRATUITA
                </Button>
              
              </motion.div>
            </motion.div>

            <motion.div
              className="lg:w-1/2 relative aspect-video w-full max-w-2xl rounded-xl overflow-hidden shadow-2xl"
              variants={fadeInUp}
            >
              {!videoPlaying ? (
                <div className="relative w-full h-full bg-gray-800 flex items-center justify-center">
                  <Image
                    src="/logo.png"
                    alt="Video thumbnail"
                    width={300}
                    height={350}
                    className="object-cover"
                  />
                  <motion.button
                    className="absolute inset-0 flex items-center justify-center bg-black/30 group"
                    onClick={() => setVideoPlaying(true)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="w-20 h-20 rounded-full bg-emerald-500 flex items-center justify-center group-hover:bg-emerald-400 transition-colors">
                      <Play size={36} className="text-white ml-2" />
                    </div>
                  </motion.button>
                </div>
              ) : (
                <div className="bg-gray-800 flex items-center justify-center w-full h-full object-cover">
                  <video controls className="absolute inset-0 w-full h-full object-cover rounded-xl">
                    <source src="/video.mov" />
                  </video>
                </div>
              )}
            </motion.div>
             <motion.div className="block lg:hidden" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-6 text-lg"
                  onClick={() => document.getElementById("calendly")?.scrollIntoView({ behavior: "smooth" })}
                >
                  AGENDAR REUNIÓN GRATUITA
                </Button>
              </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 bg-white" id="about">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="flex flex-col lg:flex-row items-center gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div
              className="lg:w-1/3 relative aspect-square w-full max-w-md rounded-xl overflow-hidden shadow-xl"
              variants={fadeInUp}
            >
              <Image
                src="/about-me.jpg?height=600&width=600"
                alt="Luciano Colombo"
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div className="lg:w-2/3 space-y-6" variants={fadeInUp}>
              <div className="inline-block bg-gray-100 px-4 py-2 rounded-full">
                <h2 className="text-emerald-500 font-bold">SOBRE MI</h2>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">LUCIANO COLOMBO</h2>
              <p className="text-emerald-500 font-medium">@luchocolombotraining</p>

              <div className="space-y-4 text-gray-700">
                <p>
                  Profesor de Educación Física y Personal Trainer certificado a nivel internacional. A lo largo de mi
                  carrera complementé mi formación con cursos relacionados a la nutrición, porque creo que el enfoque
                  integral es clave para lograr resultados reales y sostenibles en el tiempo.
                </p>
                <p>
                  Desde 2018 ayudo a transformar el cuerpo y la vida de muchas personas. Y sinceramente, no hay nada que
                  me haga más feliz que ver esos cambios.
                </p>
                <p>
                  Me mantengo en constante aprendizaje, ya que el mundo fitness evoluciona, y mi compromiso es seguir
                  creciendo para dar lo mejor a cada persona que confia su proceso en mi trabajo y experiencia.
                </p>
                <p>
                  Hace +5 años me dedico profesionalmente al coaching fitness. En este tiempo, la experiencia me enseño
                  muchisimo sobre cómo funciona el cuerpo, cómo acompañar de forma personalizada a cada persona, y sobre
                  todo, cómo guiar procesos que sean efectivos, saludables y duraderos.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Cambios Section */}
      <section className="py-20 bg-gray-50" id="cambios">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="text-center mb-12" variants={fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Con +10 años de experiencia, he ayudado a +120 personas a lograr su cambio físico y alcanzar sus
                objetivos
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">Estas son algunas que lo lograron</p>
              {/*<div className="h-1 w-20 bg-emerald-500 mx-auto mt-6"></div> */}
            </motion.div>

            <motion.div className="space-y-12" variants={fadeInUp}>
              <div className="space-y-2">
                <TransformationCarousel items = {transformationItems} />
              </div>

              {/* WhatsApp Testimonials Section */}
              <div className="space-y-8">
                <motion.div className="text-center" variants={fadeInUp}>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Lo que dicen mis clientes</h3>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Testimonios reales de WhatsApp de personas que han transformado su vida con mi programa
                    personalizado
                  </p>
                </motion.div>
                <div className="flex justify-center px-4 md:px-0">
                  <WhatsAppTestimonials
                    messages={[]}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Calendly Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white" id="calendly">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="space-y-6 mb-10" variants={fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold">
                Tomá el primer paso para lograr el cambio físico que soñas, y agenda tu videollamada gratuita HOY
              </h2>
              <p className="text-gray-300">
                Solo trabajo con personas dedicadas y comprometidas a cambiar sus vidas y a trabajar para llegar al
                objetivo. Aplicá a través del calendario y asegurate de contarnos por qué debería elegirte para ayudarte
                a lograr tus metas.
              </p>
            </motion.div>

            <motion.div className="bg-white rounded-xl p-8 shadow-2xl" variants={fadeInUp}>
              <h3 className="text-gray-800 text-xl font-bold mb-6">Esta llamada es ideal para vos si:</h3>

              <ul className="space-y-4 text-left mb-8">
                {[
                  "Queres cambiar tu cuerpo y estilo de vida de una vez y para siempre",
                  "Crees no tener tiempo pero si ganas de alcanzar tus objtivos",
                  "Estas realmente comprometido/a con el cambio",
                  "Queres sentirte bien, saludable y con energía",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3 text-gray-700"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="h-6 w-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="bg-gray-100 p-2 rounded-lg">
               {/*  <div className="flex items-center justify-center gap-3 mb-4">
                  <Calendar className="h-6 w-6 text-emerald-500" />
                  <h4 className="text-gray-800 font-bold">CALENDLY</h4>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Selecciona una fecha y hora que te convenga para tu sesión gratuita de consulta
                </p>
                Placeholder for Calendly integration */}
                
                <div
                  className="calendly-inline-widget"
                  data-url="https://calendly.com/luchocolombotraining/llamada-gratuita"
                  style={{ height: '1200px' }}
                ></div>
                </div>
              
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50" id="faq">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="text-center mb-12" variants={fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">PREGUNTAS FRECUENTES</h2>
              <div className="h-1 w-20 bg-emerald-500 mx-auto"></div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="border rounded-lg overflow-hidden shadow-sm">
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-100 transition-colors">
                    <span className="text-left font-medium">¿Puedo aplicar si nunca entrené?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 bg-white">
                    Si, la asesoría se adapta a cualquier nivel.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border rounded-lg overflow-hidden shadow-sm">
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-100 transition-colors">
                    <span className="text-left font-medium">¿Puedo acceder desde cualquier parte del mundo?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 bg-white">
                    Si, el programa es completamente online. Todo lo que necesitas es Internet y ganas de lograr tu
                    cambio físico.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border rounded-lg overflow-hidden shadow-sm">
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-100 transition-colors">
                    <span className="text-left font-medium">¿Qué pasa si tengo días más ocupados de lo normal?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 bg-white">
                    El plan es 100% personalizado y flexible, ya que se ajusta a tu disponibilidad y contempla
                    imprevistos.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border rounded-lg overflow-hidden shadow-sm">
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-100 transition-colors">
                    <span className="text-left font-medium">¿Cuánto tiempo toma empezar a ver resultados?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 bg-white">
                    Depende de tu compromiso y situación actual. Algunos alumnos ven resultados a las pocas semanas,
                    mientras que otros lo logran llegado a las 12 semanas con implementación constante y estrategia.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border rounded-lg overflow-hidden shadow-sm">
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-100 transition-colors">
                    <span className="text-left font-medium">¿Cómo puedo empezar?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 bg-white">
                    Podes agendar una llamada directamente en el calendario que encontrarás en esta página. En esa
                    llamada evaluaremos tu situación actual y definiremos cómo podemos ayudarte a lograr tus objetivos.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Image src="/logo.png" alt="Lucho Colombo Logo" width={180} height={90} className="h-20 w-auto" />
            </div>
            <div className="text-gray-400 text-sm text-center w-full">
              © 2025 Lucho Colombo. Todos los derechos reservados.
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
