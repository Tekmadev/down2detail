import Link from "next/link";
import { ReactNode } from "react";

type FooterLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

const FooterLink = ({ href, children, className = "" }: FooterLinkProps) => {
  const baseStyles =
    "text-secondary hover:text-[#d6781c] hover:translate-x-1 transition-all duration-300 inline-block font-medium";
  const linkStyles = `${baseStyles} ${className}`;

  return (
    <Link href={href} className={linkStyles}>
      {children}
    </Link>
  );
};

export default FooterLink;
