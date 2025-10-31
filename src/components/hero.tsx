// src/components/hero.tsx
"use client"
import { Button } from "@/components/ui/button"
import { motion } from "motion/react"
import { fadeUp } from "./anim"

export function Hero() {
  return (
    <section className="relative h-[400px] md:h-[600px] lg:h-[600px] bg-[url('/hero.jpg')] bg-cover bg-position-[30%] bg-no-repeat overflow-hidden">
      <div className="absolute inset-0 bg-black/20" />
      <div className="py-8 px-4 h-full text-white flex flex-col items-center justify-center text-center relative z-10 md:px-8">
        <motion.div {...fadeUp(0)} className="text-3xl font-semibold leading-tight max-w-5xl md:text-5xl lg:text-6xl">
          Rastreie, gerencie e valorize sua produção agrícola.
        </motion.div>

        <motion.p {...fadeUp(0.5)} className="mt-4 text-md opacity-90 max-w-3xl">
          O CultivoTrace conecta campo e consumidor, garantindo qualidade, sustentabilidade e transparência em cada etapa do cultivo.
        </motion.p>

        <motion.div {...fadeUp(1)} className="mt-8 flex flex-col sm:flex-row gap-3">
          <Button size="lg" className="w-56" variant="default" asChild><a href="#cta">Começar gratuitamente</a></Button>
          <Button size="lg" className="w-56" variant="glass" asChild><a href="#how">Ver como funciona</a></Button>
        </motion.div>
      </div>
    </section>
  )
}
