import React from "react";
import Tables from "./Tables";
import SpendingChart from "./SpendingChart";
import AccountOverview from "./AccountOverView";

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
        <div className="border w-[100px] p-2 text-sm border-[var(--main)] rounded cursor-pointer text-center hover:bg-indigo-50 ">
          View All
        </div>
      </div>
      {/* table */}
      <Tables />
    </div>
  );
}
