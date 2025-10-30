"use client"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "motion/react"
import { fadeUp } from "./anim"
import { UserRoundPlus, Monitor, Share2 } from "lucide-react"

const steps = [
  { n: 1, title: "Cadastro", desc: "Cadastre propriedades, cultivos e lotes." },
  { n: 2, title: "Monitoramento", desc: "Registre plantio, insumos, manejo, colheita e qualidade." },
  { n: 3, title: "Compartilhamento", desc: "Gere QR codes e compartilhe o histórico do produto." },
]
const icons = [UserRoundPlus, Monitor, Share2]

export function StepsFlow() {
  return (
    <section id="how" className="relative">
      <div className="py-8 px-4 md:py-16 lg:py-20">
        <div className="text-center mb-6 md:mb-10">
          <h2 className="text-2xl text-primary md:text-3xl font-semibold">Como Funciona o CultivoTrace</h2>
          <p className="text-md md:font-medium font-medium mt-3">
            Fluxo simples e contínuo até o consumidor
          </p>
        </div>

        {/* mobile: empilhado; tablet: 3 colunas */}
        <div className="grid gap-10 md:grid-cols-3 md:gap-6">
          {steps.map((s, i) => {
            const Icon = icons[i]
            return (
              <motion.div key={s.n} {...fadeUp(i)} className="relative z-10" whileHover={{ y: -6 }} whileTap={{ scale: 0.98 }}>
                {/* conector visual: losango sempre visível; em mobile mostramos também um traço vertical ligando ao próximo card */}
                {i < steps.length - 1 && (<div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <div className="w-3 h-3 bg-accent rotate-45" />
                    <div className="absolute left-1/2 top-5 -translate-x-1/2 md:hidden">
                      <div className="w-px h-6 bg-accent" />
                    </div>
                </div>)}

                <Card className="pt-6 md:pt-10 border-green-200 bg-green-50/50 hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 md:p-6">
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-10 h-10 rounded-md bg-primary grid place-items-center text-white">
                        <Icon className="text-white w-6 h-6 md:w-8 md:h-8" />
                      </div>
                      <div className="text-gray-800 font-semibold text-center">{s.title}</div>
                    </div>
                    <p className="text-sm text-center md:text-[15px] text-zinc-700 mt-2">{s.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
