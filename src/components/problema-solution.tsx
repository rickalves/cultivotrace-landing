"use client"
import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, CheckCircle2 } from "lucide-react"
import { motion } from "motion/react"

export function ProblemSolution() {
  const problems = [
    "Dificuldade em rastrear origem e qualidade.",
    "Falta de transparência na cadeia produtiva.",
    "Gestão manual e processos frágeis.",
    "Baixa confiança do consumidor final.",
  ]

  const solutions = [
    "Rastreabilidade completa do plantio à entrega.",
    "Transparência via QR Code público.",
    "Automação inteligente e indicadores.",
    "Certificação e credibilidade para a marca.",
  ]

  return (
    <section id="problem-solution" className="py-8 px-4 md:py-16 lg:py-20">
      <div className="grid gap-4 md:grid-cols-2 md:gap-6">
        <motion.div
          initial={{ opacity: 0, x: -50, rotateY: -15 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ 
            duration: 0.7,
            ease: [0.21, 0.47, 0.32, 0.98]
          }}
          whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.2 }
          }}
        >
          <Card className="shadow-soft hover:shadow-xl transition-shadow h-full border-amber-200 bg-amber-50/50">
            <CardContent className="p-4 md:p-6">
              <div className="flex items-start gap-2">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: 0.3,
                    type: "spring",
                    stiffness: 200,
                    damping: 15
                  }}
                >
                  <AlertTriangle className="text-amber-600 shrink-0 h-6 w-6" />
                </motion.div>
                <div>
                  <h3 className="font-medium mb-2 text-amber-800">Desafios do Campo</h3>
                  <ul className="space-y-2 text-sm md:text-[15px]">
                    {problems.map((p, i) => (
                      <motion.li 
                        key={p}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                        className="flex items-start gap-2"
                      >
                        <AlertTriangle className="text-amber-500 shrink-0 h-4 w-4 mt-0.5" />
                        <span className="text-zinc-700">{p}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50, rotateY: 15 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ 
            duration: 0.7,
            delay: 0.2,
            ease: [0.21, 0.47, 0.32, 0.98]
          }}
          whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.2 }
          }}
        >
          <Card className="shadow-soft hover:shadow-xl transition-shadow h-full border-green-200 bg-green-50/50">
            <CardContent className="p-4 md:p-6">
              <div className="flex items-start gap-3">
                <motion.div
                  initial={{ scale: 0, rotate: 180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: 0.5,
                    type: "spring",
                    stiffness: 200,
                    damping: 15
                  }}
                >
                  <CheckCircle2 className="text-green-600 shrink-0 h-6 w-6" />
                </motion.div>
                <div>
                  <h3 className="font-medium mb-2 text-green-800">Nossa Solução</h3>
                  <ul className="space-y-2 text-sm md:text-[15px]">
                    {solutions.map((s, i) => (
                      <motion.li 
                        key={s}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + i * 0.1 }}
                        className="flex items-start gap-2"
                      >
                        <CheckCircle2 className="text-green-500 shrink-0 h-4 w-4 mt-0.5" />
                        <span className="text-zinc-700">{s}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
