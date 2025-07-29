import { motion } from "framer-motion";

export function BackgroundBeams({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 pointer-events-none z-0 overflow-hidden ${className}`}>
      <motion.div
        initial={{ opacity: 0.3, x: -100 }}
        animate={{ opacity: 0.7, x: 100 }}
        transition={{ repeat: Infinity, duration: 6, repeatType: "reverse", ease: "easeInOut" }}
        className="w-[120vw] h-1/2 bg-gradient-to-r from-blue-400/30 via-purple-400/30 to-pink-400/30 blur-2xl rotate-[-8deg] absolute top-0 left-[-10vw]"
      />
      <motion.div
        initial={{ opacity: 0.2, x: 100 }}
        animate={{ opacity: 0.5, x: -100 }}
        transition={{ repeat: Infinity, duration: 8, repeatType: "reverse", ease: "easeInOut" }}
        className="w-[120vw] h-1/2 bg-gradient-to-r from-pink-400/20 via-blue-400/20 to-purple-400/20 blur-2xl rotate-[8deg] absolute bottom-0 left-[-10vw]"
      />
    </div>
  );
} 