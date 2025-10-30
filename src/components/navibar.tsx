"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { motion } from "motion/react"
import { fadeIn } from "./anim"
import { useState } from "react"
import Image from "next/image"

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <motion.header {...fadeIn} className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="h-14 md:h-16 flex items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Image src="/cultivotrace-logo.svg" alt="Cultivo Trace Logo" width={144} height={48} />
        </Link>

        {/* mobile menu button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-zinc-100"
          onClick={() => setOpen((s) => !s)}
          aria-label="Abrir menu"
        >
          <Menu />
        </button>

        {/* nav desktop */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="#features" className="hover:text-brand-800">Funcionalidades</Link>
          <Link href="#plans" className="hover:text-brand-800">Planos</Link>
          <Link href="#about" className="hover:text-brand-800">Sobre</Link>
          <Link href="#contact" className="hover:text-brand-800">Contato</Link>
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <Button variant="outline" asChild><Link href="#how">Ver como funciona</Link></Button>
          <Button className="bg-brand-800 hover:bg-brand-700" asChild><Link href="#cta">Testar gratuitamente</Link></Button>
        </div>
      </div>

      {/* dropdown mobile */}
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="md:hidden border-t bg-white px-4 absolute top-full right-0 shadow-lg overflow-hidden w-full"
        >
          <motion.div
            className="py-2 flex flex-col gap-1"
            initial="closed"
            animate="open"
            variants={{
              open: {
                transition: {
                  staggerChildren: 0.07,
                  delayChildren: 0.1
                }
              },
              closed: {
                transition: {
                  staggerChildren: 0.05,
                  staggerDirection: -1
                }
              }
            }}
          >
            {["Funcionalidades", "Planos", "Sobre", "Contato"].map((label) => (
              <motion.div
                key={label}
                variants={{
                  open: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
                  closed: { opacity: 0, x: -20 }
                }}
              >
                <Link
                  href={`#${label.toLowerCase()}`}
                  className="py-2 block hover:text-brand-800 hover:bg-brand-50 px-2 rounded transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              className="flex gap-2 pt-2"
              variants={{
                open: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
                closed: { opacity: 0, y: 10 }
              }}
            >
              <Button variant="default" asChild className="flex-1">
                <Link href="#how" onClick={() => setOpen(false)}>Testar gratuitamente</Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </motion.header>
  )
}
