import type { ReactNode } from "react";
import { site } from "@/lib/site";

type AddressLinkProps = {
  className?: string;
  children?: ReactNode;
};

export function AddressLink({
  className = "hover:text-brand-bright",
  children,
}: AddressLinkProps) {
  return (
    <a
      href={site.address.mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children ?? site.address.full}
    </a>
  );
}
