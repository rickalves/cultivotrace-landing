"use client"
import { motion } from "motion/react"
import { fadeUp } from "./anim"
import Image from "next/image"

export function Footer() {
  return (
    <motion.footer {...fadeUp(0)} className="bg-[#02190B] text-white border-t mt-12 md:mt-0">
      <div className="py-8 text-sm flex flex-col items-center justify-between gap-3 md:py-8 md:px-8 lg:px-30 md:text-sm md:flex-row">
        <a href="#"><Image src="/logo-v2.svg" alt="Cultivo Trace Logo" width={192} height={48} /></a>
        <div className="flex flex-col gap-1">
          <div className=" text-green-neon text-center md:text-left">
            © {new Date().getFullYear()} CultivoTrace. Todos os direitos reservados.
          </div>
          <div>
            Rastreabilidade e gestão agrícola inteligente
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
