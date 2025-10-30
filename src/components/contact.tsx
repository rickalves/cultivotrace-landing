"use client"
import { useState } from "react"
import { motion } from "motion/react"
import { fadeUp } from "./anim"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Instagram, Linkedin} from "lucide-react"

export function Contact() {
  const [sent, setSent] = useState(false)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // TODO: integrar com API (Resend/Brevo etc.)
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section id="contact" className="py-4 px-8 md:py-16 lg:py-20">
      <motion.h2 {...fadeUp(0)} className="text-2xl md:text-2xl lg:text-3xl font-semibold text-center text-primary">
        Entre em Contato
      </motion.h2>
      <motion.p {...fadeUp(0.15)} className="text-center text-zinc-700 mt-2">
        Tire suas dúvidas ou solicite uma demonstração personalizada
      </motion.p>

      {/* mobile: formulário em cima e infos abaixo; md+: lado a lado */}
      <div className="mt-6 grid gap-6 md:grid-cols-3 md:gap-8">
        <motion.form
          {...fadeUp(0.3)}
          onSubmit={onSubmit}
          className="md:col-span-2 grid gap-3 md:gap-4"
        >
          <Input type="text" placeholder="Seu nome" required />
          <Input type="email" placeholder="Seu e-mail" required />
          <Input type="tel" placeholder="Seu telefone" />
          <Textarea placeholder="Sua mensagem" className="min-h-[120px]" required />
          <Button variant="default" type="submit">Enviar Mensagem</Button>
          {sent && <p className="text-sm text-green-700">Mensagem enviada! Em breve entraremos em contato.</p>}
        </motion.form>

        <motion.div {...fadeUp(0.45)} className="space-y-4 text-md mt-2">
          <div className="text-2xl font-medium text-primary">Fale Conosco</div>
          <div className="flex items-center gap-2"><Mail className="text-primary" /><span>contato@cultivotrace.com.br</span></div>
          <div className="flex items-center gap-2"><Phone className="text-primary" /><span>(88) 9 9999-9999</span></div>
          <div className="flex items-center gap-2"><MapPin className="text-primary" /><span>Guaraciaba do Norte-CE</span></div>
          <div className="text-xl font-medium mt-2">Redes Sociais</div>
          <div className="flex items-center gap-4">
            <a href="#" className="inline-flex items-center gap-1 hover:text-primary">
                <Instagram size={40} className="border-2 border-green-700 rounded-full p-2 overflow-visible text-white bg-primary" />Instagram
            </a>
            <a href="#" className="inline-flex items-center gap-1 hover:text-primary">
                <Linkedin size={40} className="border-2 border-green-700 rounded-full p-2 overflow-visible text-white bg-primary"/>Linkedin
            </a>
            
          </div>
        </motion.div>
      </div>
    </section>
  )
}
