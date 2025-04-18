import Link from "next/link";
import { ReactNode } from "react";

type NavLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  isMobile?: boolean;
};

const NavLink = ({
  href,
  children,
  className = "",
  onClick,
  isMobile = false,
}: NavLinkProps) => {
  const baseStyles =
    "text-secondary hover:text-primary font-medium transition-colors relative group pb-1";
  const mobileStyles = isMobile ? "py-2" : "";
  const linkStyles = `${baseStyles} ${mobileStyles} ${className}`;

  return (
    <Link href={href} className={linkStyles} onClick={onClick}>
      {children}
      <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-[#d6781c] group-hover:w-full group-hover:left-0 transition-all duration-300 ease-in-out" />
    </Link>
  );
};

export default NavLink;
