import Image from "next/image";

type LogoProps = {
  className?: string;
  size?: number;
  priority?: boolean;
};

export function Logo({ className = "", size = 48, priority = false }: LogoProps) {
  return (
    <Image
      src="/brand/logo-mark.png"
      alt="MB Carrosserie Star"
      width={size}
      height={size}
      priority={priority}
      className={`object-contain ${className}`}
    />
  );
}
