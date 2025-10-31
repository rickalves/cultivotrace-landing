"use client"
import { motion } from "motion/react"
import { fadeUp } from "./anim"

export function About() {
    return (
        <section id="about" className="bg-zinc-50 py-8 px-4 md:py-8 lg:py-16 lg:px-30">
            {/* mobile: coluna; tablet/desktop: 2 colunas */}
            <div className="grid gap-6 md:grid-cols-2 md:gap-8 items-center md:items-start lg:gap-40">
                <motion.div {...fadeUp(0)}>
                    <h2 className="text-2xl text-center font-semibold text-primary md:text-3xl md:text-left lg:text-3xl">Sobre o CultivoTrace</h2>
                    <p className="mt-3 text-zinc-700 text-center md:text-left">
                        Nascemos da necessidade de conectar produtores rurais com consumidores cada vez mais conscientes e exigentes quanto à origem e qualidade dos alimentos.
                    </p>
                    <p className="mt-3 text-zinc-700 text-center md:text-left">
                        Nossa missão é democratizar o acesso à tecnologia de rastreabilidade agrícola, permitindo que produtores de todos os tamanhos possam valorizar seu trabalho e construir confiança com seus clientes.
                    </p>
                    <p className="mt-3 text-zinc-700 text-center md:text-left">
                        Acreditamos que a transparência na cadeia produtiva é essencial para um futuro mais sustentável e justo no agronegócio brasileiro.
                    </p>

                    <div className="mt-6 grid grid-cols-3 gap-4 md:gap-1 text-center">
                        {[
                            { n: "120+", label: "Produtores" },
                            { n: "5", label: "Estados" },
                            { n: "50k+", label: "Lotes rastreados" },
                        ].map((kpi, i) => (
                            <motion.div key={kpi.label} {...fadeUp(i * 0.15)}>
                                <div className="text-xl md:text-2xl font-bold text-primary">{kpi.n}</div>
                                <div className="text-sm md:text-sm opacity-70">{kpi.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    {...fadeUp(0.2)}
                    className="aspect-16/10 md:aspect-video rounded-2xl bg-[url('/about.jpg')] bg-cover bg-center shadow-soft md:w-full md:h-full lg:h-[350px]"
                />
            </div>
        </section>
    )
}
