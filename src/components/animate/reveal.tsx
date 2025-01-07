"use client"
import { useEffect, useRef } from "react";

import { motion, useAnimation, useInView } from "framer-motion";

import { cn } from "@/lib/utils";

interface Props {
	children: JSX.Element;
  	className?: string;
	width?: "fit-content" | "100%" | "50%";
}

const Reveal = ({ children, className, width = "fit-content" }: Props) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	const animate = useAnimation();

	useEffect(() => {
		if (isInView) {
			animate.start("visible");
		}
	}, [isInView]);

	return (
		<motion.div
			className={cn(className, "relative overflow-hidden")}
			style={{ width }}
			variants={{
				hidden: { opacity: 0, y: 25 },
				visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
			}}
		>
			{children}
		</motion.div>
	);
};

export default Reveal;
