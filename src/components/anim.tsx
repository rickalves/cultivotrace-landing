// src/components/anim.ts
import type { MotionProps } from "motion/react"

/**
 * Fade-up padrão (com delay opcional por índice)
 * Uso: <motion.div {...fadeUp(i)}> ... </motion.div>
 */
export const fadeUp = (i = 0): MotionProps => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: i * 0.08, ease: "easeInOut" },
  viewport: { once: true, amount: 0.2 },
})

/**
 * Fade-in simples (para header/navbar herdando a animação ao montar)
 */
export const fadeIn: MotionProps = {
  initial: { opacity: 0, y:-24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeInOut" },
}
