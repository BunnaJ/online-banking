"use client";

import React from "react";
import Link from "next/link";
import NavLinks from "./NavLinks";
import Image from "next/image";
import Logo from "../Logo";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function NavComponent() {
  const banksLinks =
    NavLinks.find((item) => item.title === "Banks")?.children || [];
  const businessLinks =
    NavLinks.find((item) => item.title === "Business")?.children || [];

  const Help = NavLinks.find((item) => item.title === "Help")?.children || [];

  const Insurance = NavLinks.find((item) => item.title === "Insurance");

  const Login = NavLinks.find((item) => item.title === "Login");

  const investment = NavLinks.find((item) => item.title === "Investment");

  const signUp = NavLinks.find((item) => item.title === "Join Hulo-F");

  return (
    <section className=" container mx-auto px-4 py-6  border-b-2   ">
      <div className="flex items-center  justify-between" >
         {/* logo */}
      <div className="">
        <Logo/>
      </div>
      <div className="flex items-center gap-5 ">
        <NavigationMenu className="gap-5">
          <NavigationMenuList>
            {/* Banking Menu */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-bold text-[17px] text-[var(--main)]">
                Banking
              </NavigationMenuTrigger>
              <NavigationMenuContent className="">
                <ul className="grid gap-2 p-4 w-48 text-[var(--main)] space-y-3">
                  {banksLinks.map((link) => (
                    <li key={link.href} className="flex items-center gap-2">
                      <Link
                        href={link.href}
                        className="flex items-center gap-2 text-sm font-bold text-[17px] hover:text-[var(--secondColor)]"
                      >
                        {link.icon && <link.icon className="w-4 h-4" />}
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>

          <NavigationMenuList>
            {/* Business Menu */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-bold text-[17px] text-[var(--main)]">
                Business
              </NavigationMenuTrigger>
              <NavigationMenuContent className="">
                <ul className="grid gap-2 p-4 w-48 text-[var(--main)] space-y-3">
                  {businessLinks.map((link) => (
                    <li key={link.href} className="flex items-center gap-2">
                      <Link
                        href={link.href}
                        className="flex items-center gap-2 text-sm font-bold text-[17px] hover:text-[var(--secondColor)]"
                      >
                        {link.icon && <link.icon className="w-4 h-4" />}
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>

          <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-bold text-[17px] text-[var(--main)]">
                Help
              </NavigationMenuTrigger>
              <NavigationMenuContent className=" ">
                <ul className="grid gap-2 p-4 w-48 text-[var(--main)] space-y-3 ">
                  {Help.map((link) => (
                    <li key={link.href} className="flex items-center">
                      <Link
                        href={link.href}
                        className="flex items-center gap-2 text-sm font-bold text-[17px] hover:text-[var(--secondColor)]"
                      >
                        {link.icon && <link.icon className="w-4 h-4" />}
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        </NavigationMenu>

         {/* inv/ins */}
      <div className="flex items-center gap-10">
        <div>
          {investment?.href && (
            <Link
              href={investment.href}
              className="font-bold text-[17px]  text-[var(--main)]"
            >
              {investment.title}
            </Link>
          )}
        </div>

        <div>
          {Insurance?.href && (
            <Link
              href={Insurance.href}
              className="font-bold text-[17px]  text-[var(--main)]"
            >
              {Insurance.title}
            </Link>
          )}
        </div>
      </div>
      </div> 
      {/*  */}
          
      <div className="flex items-center ">
        <div className=" px-9 py-2 rounded hover:border-[var(--main)]">
          {Login?.href && (
            <Link
              href={Login.href}
              className="font-bold text-[17px]  text-[var(--main)]"
            >
              {Login.title}
            </Link>
          )}
        </div>
        <div className="  px-9 py-3 rounded-[10px] bg-[var(--main)] hover:border-[var(--secondColor)]">
          {signUp?.href && (
            <Link
              href={signUp.href}
              className="font-bold text-[17px] text-[var(--secondColor)] hover:text-white"
            >
              {signUp.title}
            </Link>
          )}
        </div>
      </div>
      </div>
     
    </section>
  );
}
