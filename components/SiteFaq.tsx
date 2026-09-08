"use client";

import { usePathname } from "next/navigation";
import { Faq } from "@/components/Faq";

export function SiteFaq() {
  const pathname = usePathname();
  if (pathname.startsWith("/mentions-legales")) return null;
  return <Faq />;
}
