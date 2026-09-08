type BrandMarkProps = {
  className?: string;
};

export function SprayGunIcon({ className = "h-10 w-10" }: BrandMarkProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 20h16v10H18z" />
      <path d="M34 24h8" />
      <path d="M42 21v6" />
      <path d="M22 20V12h8v8" />
      <path d="M18 26H10v8h8" />
      <path d="M14 34v6" />
      <circle cx="26" cy="25" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function BodyIcon({ className = "h-10 w-10" }: BrandMarkProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M8 30c2-8 8-12 14-13 6-8 18-8 22 0 4 1 8 5 8 10H8z" />
      <circle cx="16" cy="32" r="4" />
      <circle cx="36" cy="32" r="4" />
    </svg>
  );
}

export function MetalIcon({ className = "h-10 w-10" }: BrandMarkProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M10 36V14l14-6 14 6v22" />
      <path d="M10 14l14 6 14-6" />
      <path d="M24 20v16" />
    </svg>
  );
}

export function WrenchIcon({ className = "h-10 w-10" }: BrandMarkProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M31 8a9 9 0 0 0-8 14L10 35l6 6 13-13a9 9 0 0 0 10-11l-6 6-4-4 6-6a9 9 0 0 0-10-5z" />
    </svg>
  );
}

export const serviceIcons = {
  carrosserie: BodyIcon,
  peinture: SprayGunIcon,
  tolerie: MetalIcon,
  mecanique: WrenchIcon,
} as const;
