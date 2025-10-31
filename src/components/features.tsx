// src/components/features.tsx
"use client" // Indica que este componente é um componente cliente do Next.js

import { Card, CardContent } from "@/components/ui/card"
import { QrCode, BarChart3, Boxes, Sprout} from "lucide-react"
import { motion } from "motion/react"

const items = [
  { icon: Sprout, title: "Rastreabilidade Total", desc: "Acompanhe cada etapa do plantio à colheita com dados seguros e em tempo real." },
  { icon: Boxes, title: "Gestão de Lotes", desc: "Registre cultivos, insumos e colheitas com organização e controle visual por mapa." },
  { icon: BarChart3, title: "Painel de Indicadores", desc: "Veja métricas de produtividade, uso de insumos e desempenho por safra." },
  { icon: QrCode, title: "QR Code Público", desc: "Permita que consumidores acessem informações sobre origem, práticas sustentáveis e qualidade do produto." },
]

export function Features() {
  return (
    <section id="features" className="bg-zinc-50 py-2 px-4 md:py-16 md:px-8 lg:px-30">
      <div className="text-center mb-10">
        <h2 className="text-2xl text-primary md:text-3xl font-semibold">Funcionalidades Principais</h2>
        <p className="text-md md:font-medium font-medium mt-3">Ferramentas que conectam o campo à tecnologia</p>
      </div>

      {/* Animação de entrada */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Animação dos itens */}
        {items.map(({ icon: Icon, title, desc }, i) => (
          <motion.div 
            key={title}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
              duration: 0.5, 
              delay: i * 0.1,
              ease: [0.21, 0.47, 0.32, 0.98],
              scale: {
                type: "spring",
                damping: 15,
                stiffness: 100
              }
            }}
            whileHover={{ 
              y: -8,
              transition: { duration: 0.2 }
            }}
          >
            <Card className="h-full shadow-soft hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <Icon className="text-primary mb-3 h-8 w-8" />
                <div className="font-medium">{title}</div>
                <p className="text-sm text-zinc-700 mt-1">{desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
