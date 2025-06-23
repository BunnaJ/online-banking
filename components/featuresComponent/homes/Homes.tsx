"use client";
import React, { useState } from "react";
import CircleChart from "@/components/CircleChart";
import Recent from "../wayHouse/Recent";
import SideRight from "@/components/sidenav/SideRight";
import { Bell, X } from "lucide-react";
import { HiOutlineBars3 } from "react-icons/hi2";
import MobileSide from "@/components/sidenav/MobileSide";

export default function Homes() {

  return (
    <div className="relative overflow-x-hidden">

      <div className="md:flex gap-5 justify-between">
        <div className="md:w-[800px]">
          <div className="border-b-2 md:pl-14 pb-5">
            {/* Top Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <h1 className="text-3xl font-bold font-outfit">Welcome</h1>
                <span className="text-3xl font-bold text-[var(--main)]">Kelvin</span>
              </div>

              <div className="flex items-center gap-4">
                {/* Notification */}
                <div className="relative ">
                  <Bell className="w-6 h-6 text-gray-700" size={40} />
                  <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
                </div>

                {/* Mobile Menu Toggle */}
                {/* <div className="md:hidden">
                  <HiOutlineBars3 size={45} onClick={() => setShowMobileNav(true)} className="cursor-pointer" />
                </div> */}
              </div>
            </div>

            {/* Dashboard Info */}
            <div className="md:flex items-center gap-5 pt-10">
              <CircleChart />
              <div className="space-y-4">
                <div className="font-bold text-xl">1 Bank Accounts</div>
                <div>
                  <p className="text-[var(--or)] text-l pb-1.5">Total Current Balance</p>
                  <p className="font-bold text-2xl">$2,000.31</p>
                </div>
              </div>
            </div>
          </div>

          {/* Recent */}
          <Recent />
        </div>

        {/* Desktop Right Side */}
        <SideRight />
      </div>
    </div>
  );
}
