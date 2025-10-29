// src/components/hero.tsx
"use client"
import { Button } from "@/components/ui/button"
import { motion } from "motion/react"
import { fadeUp } from "./anim"

export function Hero() {
  return (
    <section className="relative min-h-[600px] bg-[url('/hero.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-black/20" />
      <div className="container py-30 h-full text-white flex flex-col items-center text-center relative z-10">
        <motion.div {...fadeUp(0)} className="text-4xl md:text-5xl font-semibold leading-tight max-w-3xl">
          Rastreie, gerencie e valorize sua produção agrícola.
        </motion.div>

        <motion.p {...fadeUp(0.5)} className="mt-4 text-lg opacity-90 max-w-3xl">
          O CultivoTrace conecta campo e consumidor, garantindo qualidade, sustentabilidade e transparência em cada etapa do cultivo.
        </motion.p>

        <motion.div {...fadeUp(1)} className="mt-8 flex flex-col sm:flex-row gap-6">
          <Button size="lg" className="w-56" variant="default" asChild><a href="#cta">Começar gratuitamente</a></Button>
          <Button size="lg" className="w-56 bg-gray-700 backdrop-blur-xl text-white " variant="secondary" asChild><a href="#how">Ver como funciona</a></Button>
        </motion.div>
      </div>
    </section>
  )
}
