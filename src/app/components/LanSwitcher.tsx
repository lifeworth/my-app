"use client";
import React from "react";

import { Link as IntelLink, usePathname } from "@/i18n/navigation";

import { useLocale } from "next-intl";

export default function LanSwitcher() {
  const pathname = usePathname();
  const locale = useLocale();
  const otherLocale: any = locale === "en" ? ["zh", "中"] : ["en", "En"];

  return (
    <IntelLink href={pathname as any} locale={otherLocale[0]}>
      {otherLocale[1]}
    </IntelLink>
  );
}
