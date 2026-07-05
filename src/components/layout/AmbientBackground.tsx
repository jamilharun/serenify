import { motion, useScroll, useTransform } from "framer-motion"

export function AmbientBackground() {
  const { scrollYProgress } = useScroll()

  const yBlob1 = useTransform(scrollYProgress, [0, 1], [0, -350])
  const yBlob2 = useTransform(scrollYProgress, [0, 1], [0, 450])
  const yBlob3 = useTransform(scrollYProgress, [0, 1], [0, -250])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45])

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-primary/25 blur-3xl"
        style={{ top: "-10%", left: "-10%", y: yBlob1 }}
        animate={{ x: [0, 60, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full bg-accent/30 blur-3xl"
        style={{ bottom: "-15%", right: "-10%", y: yBlob2 }}
        animate={{ x: [0, -50, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-primary/15 blur-3xl"
        style={{ top: "45%", left: "45%", y: yBlob3, rotate }}
        animate={{ x: [0, 30, -30, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  )
}
