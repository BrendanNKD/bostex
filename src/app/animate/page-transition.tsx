"use client"
// PageTransition.tsx
import { motion } from "framer-motion";
const variants = {
	hidden: { opacity: 0, },
	visible: { opacity: 1, y: 0, transition: { duration: 0.5, type: "easeIn" } },
  exit: {opacity: 0, transition: { duration: 0.5, type: "easeIn" }}
};
const PageTransition = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      variants={variants}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      exit="exit"

    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
