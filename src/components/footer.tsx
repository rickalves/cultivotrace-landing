"use client"
import { motion } from "motion/react"
import { fadeUp } from "./anim"
import Image from "next/image"

export function Footer() {
  return (
    <motion.footer {...fadeUp(0)} className="border-t mt-12 md:mt-16 bg-[#02190B] text-white">
      <div className="py-8 md:py-10 text-sm md:text-sm flex flex-col md:flex-row items-center justify-between gap-3">
        <a href="#"><Image src="/logo-v2.svg" alt="Cultivo Trace Logo" width={192} height={48} /></a>
        <div className=" text-green-neon text-center md:text-left">
          © {new Date().getFullYear()} CultivoTrace. Todos os direitos reservados.
        </div>
        <div>
          Rastreabilidade e gestão agrícola inteligente
        </div>
      </div>
    </motion.footer>
  )
}
