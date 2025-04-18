import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
};

const Button = ({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
}: ButtonProps) => {
  const baseStyles = "px-8 py-3 text-center font-medium transition-colors";

  const variantStyles = {
    primary: "btn btn-primary text-white",
    secondary:
      "btn border-2 border-secondary text-secondary hover:bg-[#d6781c] hover:text-white",
  };

  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={buttonStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonStyles} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
