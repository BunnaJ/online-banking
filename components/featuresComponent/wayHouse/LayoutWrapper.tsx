"use client";

import { usePathname } from "next/navigation";
import NavComponent from "@/components/NavBar/NavComponent";
import Footer from "@/components/Footer";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // List of routes that should hide Nav and Footer
  const hiddenRoutes = ["/homes", "/mybank", "/transactions", "/user", "/loanFunds", "/funds"];

  // Check if current path starts with any of the hidden routes
  const hideLayout = hiddenRoutes.some(route => pathname.startsWith(route));

  return (
    <>
      {!hideLayout && <NavComponent />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
}
