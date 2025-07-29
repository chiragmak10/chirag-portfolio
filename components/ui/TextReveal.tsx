import { motion } from "framer-motion";

export function TextReveal({ text, className = "" }: { text: string; className?: string }) {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={className}
    >
      {text}
    </motion.h1>
  );
} 