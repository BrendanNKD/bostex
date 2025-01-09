"use client";

import { motion } from "framer-motion";


const variants = {
	hidden: { opacity: 0, },
	visible: { opacity: 1, y: 0, transition: { duration: 1.5, type: "easeIn" } },
  exit: {opacity: 0, transition: { duration: 1.5, type: "easeIn" }}
};


export default function Template({ children }: { children: React.ReactNode }) {
  return (
		<motion.div
			variants={variants}
			initial="hidden"
			animate="visible"
      		exit="exit"
		>
			{children}
		</motion.div>
  );
}
