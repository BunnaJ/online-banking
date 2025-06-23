// app/dashboard/layout.tsx
"use client";
import SideNav from "@/components/sidenav/SideNav";
import { HiOutlineBars3 } from "react-icons/hi2";
import { useState } from "react";
import MobileSide from "@/components/sidenav/MobileSide";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const isActive = usePathname()  
  return (
    <div className="flex ">
      <aside className="md:w-[300px] pt-10">
        <SideNav />
      </aside>
      <main className="flex-1 p-10 border-l-2 pt-20">
        {/* Mobile Sidebar Overlay */}
        {showMobileNav && (
          <div
            className="fixed inset-0 z-40  bg-opacity-50 md:hidden"
            onClick={() => setShowMobileNav(false)}
          />
        )}
        <div className="">
          {/* Mobile Sidebar */}
          <div
            className={`fixed z-50 top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 md:hidden ${
              showMobileNav ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex justify-end p-4">
              <X
                className="cursor-pointer"
                onClick={() => setShowMobileNav(false)}
                size={40}
              />
            </div>
            <MobileSide onLinkClick={() => setShowMobileNav(false)} />

          </div>
          {/* Mobile Menu Toggle */}
          <div className="md:hidden pb-5 flex justify-end ">
            <HiOutlineBars3
              size={45}
              onClick={() => setShowMobileNav(true)}
              className="cursor-pointer"
            />
          </div>
        </div>
        {children}
      </main>
    </div>
  );
}
