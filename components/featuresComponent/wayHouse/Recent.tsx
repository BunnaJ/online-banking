import React from "react";
import Tables from "./Tables";
import SpendingChart from "./SpendingChart";
import AccountOverview from "./AccountOverView";
import Link from "next/link";

export default function Recent() {
  return (
    <div className="">
      <div className=" ">
        {/* spending chart */}
        <AccountOverview/>
        <SpendingChart />
      </div>
      <div className="flex items-center justify-between pt-11">
        <h1 className="font-bold text-xl">Recent transactions</h1>
       <Link href={'/transactions'}>
       <div className="border w-[100px] p-2 text-sm border-[var(--main)] rounded cursor-pointer text-center hover:bg-indigo-50 ">
          View All
        </div>
       </Link>
      </div>
      {/* table */}
      <Tables />
    </div>
  );
}
