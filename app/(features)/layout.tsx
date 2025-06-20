// app/dashboard/layout.tsx
"use client";
import SideNav from "@/components/sidenav/SideNav";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex ">
      <aside className="w-[300px] pt-10">
        <SideNav />
      </aside>
      <main className="flex-1 p-10 border-l-2 pt-20">
        {children}
      </main>
      
    </div>
  );
}
