"use client";

import { PDPFilterProvider } from "@/modules/third-party-logistics/warehouse-management/consolidation/pre-dispatch-plan/context/PDPFilterContext";
import { ReactNode } from "react";

export default function PreDispatchPlanLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <PDPFilterProvider>{children}</PDPFilterProvider>;
}
