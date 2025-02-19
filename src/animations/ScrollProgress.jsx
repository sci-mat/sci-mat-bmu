import { motion, useScroll, useSpring } from "framer-motion";
import { cn } from "../lib/utils";

const DEFAULT_SPRING_OPTIONS = {
  stiffness: 200,
  damping: 50,
  restDelta: 0.001,
};

export function ScrollProgress({ className, springOptions }) {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    ...(springOptions ?? DEFAULT_SPRING_OPTIONS),
  });

  return (
    <motion.div
      className={cn(
        "fixed inset-x-0 top-14 h-1 origin-left z-10 w-full animate-pulse",
        className
      )}
      style={{
        scaleX,
      }}
    />
  );
}
