import { fadeInUp } from "@/hooks/animations"
import { motion } from "framer-motion"

const wordVariants = {
    hidden: { color: "#374151", fontWeight: 400 }, // gris normal
    visible: { fontWeight: 700, backgroundColor: "#10b98185" }, // verde esmeralda y bold
}

export default function SobreMi() {
    return (
        <motion.div className="lg:w-2/3 space-y-6" variants={fadeInUp}>
            <div className="inline-block bg-gray-100 px-4 py-2 rounded-full">
                <h2 className="text-emerald-500 font-bold">SOBRE MI</h2>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">LUCIANO COLOMBO</h2>
            <p className="text-emerald-500 font-medium">@luchocolombotraining</p>

            <div className="space-y-4 text-gray-700">
                <p>
                    Profesor de Educación Física y{" "}
                    <motion.span
                        variants={wordVariants}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 1, delay: 1 }}
                    >
                        Personal Trainer
                    </motion.span>{" "}
                    certificado a nivel internacional. Complementé mi formación con cursos relacionados a la nutrición
                    , porque creo que el enfoque integral es clave para lograr resultados{" "}                 
                    <motion.span
                        variants={wordVariants}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 1, delay: 1 }}
                    >
                        reales y sostenibles
                    </motion.span>{" "}en el tiempo.
                </p>
                <p>
                    Desde 2018 ayudo a {" "}
                    <motion.span
                        variants={wordVariants}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 1., delay: 1.5 }}
                    >
                        transformar
                    </motion.span>{" "} el cuerpo y la vida de muchas personas. Y sinceramente, no hay nada que
                    me haga más feliz que ver esos {" "}
                    <motion.span
                        variants={wordVariants}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 1, delay: 1.5 }}
                    >
                        cambios
                    </motion.span>.
                </p>
                <p>
                    Me mantengo en constante aprendizaje, ya que el mundo fitness evoluciona, y mi compromiso es seguir
                    creciendo para dar lo mejor a cada persona que confia su proceso en mi {" "}
                    <motion.span
                        variants={wordVariants}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 1, delay: 1.5 }}
                    >
                        trabajo y experiencia
                    </motion.span>.
                </p>
                <p>
                    Hace {" "}
                    <motion.span
                        variants={wordVariants}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 1, delay: 2 }}
                    >
                        +5 años
                    </motion.span>{" "} me dedico profesionalmente al coaching fitness. En este tiempo, la {" "}
                    <motion.span
                        variants={wordVariants}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 1, delay: 2 }}
                    >
                        experiencia
                    </motion.span>{" "}me enseño
                    muchisimo sobre cómo funciona el cuerpo, cómo acompañar de forma {" "}
                    <motion.span
                        variants={wordVariants}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 1, delay: 2 }}
                    >
                        personalizada
                    </motion.span>{" "} a cada persona, y sobre
                    todo, cómo guiar procesos que sean 
                    {" "}
                    <motion.span
                        variants={wordVariants}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 1, delay: 2 }}
                    >
                        efectivos, saludables y duraderos
                    </motion.span>.
                </p>
            </div>
        </motion.div>
    )
}
