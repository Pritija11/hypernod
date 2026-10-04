import Link from "next/link";
import { clsx } from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
  external?: boolean;
};

export default function Button({
  children,
  href,
  variant = "primary",
  className,
  external = false,
}: ButtonProps) {
  const classes = clsx("btn", `btn-${variant}`, className);
  const isDirectLink = href?.startsWith("mailto:") || href?.startsWith("tel:");

  if (href) {
    if (isDirectLink) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      );
    }

    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <button className={classes}>{children}</button>;
}
