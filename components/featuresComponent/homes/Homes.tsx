import React from "react";
import CircleChart from "@/components/CircleChart";
import Recent from "../wayHouse/Recent";
import SideRight from "@/components/sidenav/SideRight";
import { Bell } from "lucide-react";

export default function Homes() {
  return (
    <div className="">
      <div className="flex gap-5  justify-between">
        <div className="w-[800px]">
          <div className="border-b-2 pl-14 pb-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <h1 className="text-3xl font-bold font-outfit">Welcome</h1>
                <span className="text-3xl font-bold  text-[var(--main)]">
                  Kelvin
                </span>
              </div>
              <div className="">
                {/* notification */}
                <div className="relative ">
                  <Bell className="w-6 h-6 text-gray-700 size-20" />
                  <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-5 ">
              <div className="pt-10">
                <CircleChart />
              </div>
              <div className="pt-10 space-y-4">
                <div className="font-bold text-xl">1 Bank Accounts</div>
                <div className="">
                  <p className="text-[var(--or)] text-l pb-1.5">
                    Total Current Balance
                  </p>
                  <p className="font-bold text-2xl">$250.31</p>
                </div>
              </div>
            </div>
          </div>
          {/* recent */}
          <div className="">
            <Recent />
          </div>
        </div>
        {/* right side */}
        <SideRight />
      </div>
    </div>
  );
}
