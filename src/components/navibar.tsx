// src/components/navbar.tsx
"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "motion/react"
import Image from "next/image"
import { fadeIn } from "./anim"

export function Navbar() {
  return (
    <motion.div
      {...fadeIn}
      className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b"
    >
      <div className="container h-20 flex items-center justify-between px-30">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Image src="/cultivotrace-logo.svg" alt="Cultivo Trace Logo" width={240} height={64} />
        </Link>

        <div className="flex items-center gap-8">
          <nav className="hidden md:flex items-center gap-6 text-md font-medium text-gray-600">
            <Link href="#features" className="hover:text-primary transition-all duration-300 ease-in-out">Funcionalidades</Link>
            <Link href="#plans" className="hover:text-primary transition-all duration-300 ease-in-out">Planos</Link>
            <Link href="#about" className="hover:text-primary transition-all duration-300 ease-in-out">Sobre</Link>
            <Link href="#contact" className="hover:text-primary transition-all duration-300 ease-in-out">Contato</Link>
          </nav>
          <Button className=" transition-all duration-500 ease-in-outbg-primary hover:bg-primary/80" asChild>
            <Link href="#cta">Testar gratuitamente</Link>
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
