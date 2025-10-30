"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"
import { motion } from "motion/react"
import { fadeUp } from "./anim"

const plans = [
  {
    name: "Grátis",
    price: "R$ 0",
    period: "/mês",
    features: ["Até 2 cultivos", "Até 10 lotes/mês", "Rastreabilidade básica", "QR Code público", "Suporte por email"],
    cta: "Testar gratuitamente",
    highlight: false,
    i: 0,
  },
  {
    name: "Pro",
    price: "R$ 49",
    period: "/mês",
    features: ["Rastreabilidade ilimitada", "Relatórios inteligentes", "QR Code personalizado", "Dashboard completo", "Exportação de dados"],
    cta: "Assinar",
    highlight: true,
    i: 0.2,
  },
  {
    name: "Empresarial",
    price: "Sob consulta",
    period: "",
    features: ["Tudo do Pro", "Integrações/API", "Suporte premium dedicado", "Treinamento e equipe", "SLA garantido"],
    cta: "Fale com vendas",
    highlight: false,
    i: 0.4,
  },
]

export function Pricing() {
  return (
    <section id="plans" className="py-8 px-4 md:py-16 lg:py-20">
      <motion.div {...fadeUp(0)} className="text-center mb-6 md:mb-10">
        <h2 className=" text-primary text-2xl md:text-2xl lg:text-3xl font-semibold">Planos e Preços</h2>
        <p className="text-zinc-700 mt-2">Escolha o plano ideal para o tamanho da sua operação</p>
      </motion.div>

      {/* mobile: cards empilhados; tablet: 2-3 colunas (a critério) */}
      <div className="grid gap-8 md:grid-cols-3 md:gap-6">
        {plans.map((p) => (
          <motion.div key={p.name} {...fadeUp(p.i)}>
            <Card className={`relative shadow-soft ${p.highlight ? "ring-2 ring-primary" : ""} hover:-translate-y-0.5 hover:shadow-md transition`}>
              <CardContent className="p-4 md:p-6">
                <div className="flex flex-col-reverse items-center justify-between">
                  <div className="text-2xl font-semibold">{p.name}</div>
                  {p.highlight && <Badge className="absolute -top-4 py-2 px-4 bg-accent text-primary font-semibold">Mais Popular</Badge>}
                </div>

                <div className="mt-3 md:mt-4 mb-5 md:mb-6 flex justify-center items-baseline gap-1">
                  <span className="text-2xl md:text-3xl font-bold">{p.price}</span>
                  <span className="text-zinc-600">{p.period}</span>
                </div>

                <ul className="space-y-2 text-sm md:text-[15px]">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className="size-4 mt-0.5 text-brand-800" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                    variant={p.highlight ? "default" : "outline"} 
                    className={`
                        w-full mt-5 md:mt-6 hover:bg-primary hover:text-white cursor-pointer 
                        transition-all duration-500 ease-in-out border-green-700
                    `}
                >
                    {p.cta}
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
