import Link from "next/link";
import React from "react";

interface ButtonLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({ href, className, children }) => {
  return (
    <Link
      href={href}
      className={`px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition inline-block ${className}`}
    >
      {children}
    </Link>
  );
};

export default ButtonLink;
