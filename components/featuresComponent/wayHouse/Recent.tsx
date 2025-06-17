import React from "react";
import Tables from "./Tables";
import SpendingChart from "./SpendingChart";
import AccountOverview from "./AccountOverView";

export default function Recent() {
  return (
    <div className="pt-14">
      <div className="pb-16 flex">
        {/* spending chart */}
        <SpendingChart />
        <AccountOverview/>
      </div>
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-2xl">Recent transactions</h1>
        <div className="border w-[100px] p-2 border-[var(--main)] rounded cursor-pointer text-center hover:bg-indigo-50 ">
          View All
        </div>
      </div>
      {/* table */}
      <Tables />
    </div>
  );
}
