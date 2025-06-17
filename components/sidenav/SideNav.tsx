"use client";

import Logo from "@/components/Logo";
import { usePathname } from "next/navigation";
import { House, CircleDollarSign } from "lucide-react";
import { FaRegFileAlt } from "react-icons/fa";
import { BiTransfer } from "react-icons/bi";
import { GiReceiveMoney } from "react-icons/gi";
import { ImProfile } from "react-icons/im";
import Link from "next/link";

const sideLinks = [
  { name: "Home", href: "/homes", icon: House },
  { name: "My Bank", href: "/mybank", icon: CircleDollarSign },
  { name: "Transactions", href: "/transactions", icon: FaRegFileAlt },
  { name: "Transfer funds", href: "/funds", icon: BiTransfer },
  { name: "Loan", href: "/loanFunds", icon: GiReceiveMoney },
  { name: "Profile", href: "/user", icon: ImProfile },
];

export default function SideNav() {
  const pathName = usePathname();

  return (
    <div className="">
      <div className="pl-10 pb-5">
        <Logo />
      </div>
      <div>
        {sideLinks.map((item) => {
          const isActive = pathName === item.href;

          return (
            <Link
              href={item.href}
              key={item.name}
              className={`flex items-center gap-2 p-5 px-10 rounded w-[300px] border-b transition-colors duration-200
              ${
                isActive
                  ? "bg-[var(--main)] text-white"
                  : "text-black hover:bg-blue-50"
              }
            `}
            >
              <item.icon
                className={`w-5 h-5 mr-2 ${
                  isActive ? "text-white" : "text-[var(--main)]"
                }`}
              />
              <span
                className={`font-bold text-xl ${
                  isActive ? "text-white" : "text-black"
                }`}
              >
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
