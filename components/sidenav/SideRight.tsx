import React from "react";
import { Plus } from "lucide-react";
import Link from "next/link";
import ATMCard from "../featuresComponent/wayHouse/AtmCard";
import CategoryProgress from "../featuresComponent/wayHouse/CategoryProgress";

export default function SideRight() {
  return (
    <div className="w-[580px] border-r border-l  px-10">
      <div className="relative h-[200px] bg-gradient-to-r from-[#142d6f] to-[#a3bdff]">
        <div className="flex  items-center justify-center -bottom-10 left-16 border-4 absolute text-5xl font-bold rounded-full bg-[#142d6f] text-white w-[100px] h-[100px]">
          <h2 className="text-[var(--secondColor)]">K</h2>
        </div>
      </div>

      <div className="pt-16">
        <p className="font-bold text-2xl ">Kelvin peterclever</p>
        <p className="text-[var(--or)] ">@Kelpeterclever453@gmail.com</p>
      </div>
      {/*add bank */}
      <div className="">
        <div className="flex items-center justify-between pt-10">
          <p className="font-bold text-xl">My Banks</p>
          <Link
            href={"/mybank"}
            className="flex items-center text-[var(--lightGray)] font-bold "
          >
            <Plus />
            <div className="">Add Bank</div>
          </Link>
        </div>
      </div>
      {/* ccv  */}
      <ATMCard />

      {/* category */}
      <CategoryProgress />
    </div>
  );
}
