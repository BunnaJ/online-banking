"use client";
import React from "react";
import { ArrowDownCircle, ArrowUpCircle, Wallet } from "lucide-react";
import ATMCard from "../wayHouse/AtmCard";
import CopyAccount from "../wayHouse/CopyAccount"

export default function Mybank() {
  return (
    <div>
      {/* 1 */}
      <div className="">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-bold font-outfit">My Bank</h1>
          <span className="text-2xl font-bold  text-[var(--main)]">
            Accounts
          </span>
        </div>
        <h3 className="text-l text-[var(--or)]  font-bold pt-2 ">
          Effortlessly Manage your Bank Activities
        </h3>
      </div>

      {/* 2 */}
      <div className=" flex items-center gap-10 pt-10">
        {/* Account Balance */}
        <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow transition hover:shadow-md w-[300px]">
          <div className="p-3 rounded-full bg-[var(--soft)]">
            <Wallet className="text-[var(--main)] w-6 h-6" />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Current Balance</p>
            <p className="font-bold text-lg text-gray-800">$250.31</p>
          </div>
        </div>

        {/* Total Income */}
        <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow transition hover:shadow-md w-[300px]">
          <div className="p-3 rounded-full bg-green-100">
            <ArrowDownCircle className="text-green-600 w-6 h-6" />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Total Income</p>
            <p className="font-bold text-lg text-gray-800">$1,200,000</p>
          </div>
        </div>

        {/* Total Expenses */}
        <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow transition hover:shadow-md w-[300px]">
          <div className="p-3 rounded-full bg-red-100">
            <ArrowUpCircle className="text-red-500 w-6 h-6" />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Total Spent</p>
            <p className="font-bold text-lg text-gray-800">$800,000</p>
          </div>
        </div>
      </div>

      {/* copy account info */}
     <div className="pt-10">
     <h1 className="text-xl font-bold pt-3 pb-5">your Account Details </h1>
        <CopyAccount/>
     </div>

      {/* card */}
     <div className="pt-14 w-[500px]">
        <h1 className="text-xl font-bold">your Card</h1>
     <ATMCard/>
     </div>

    </div>
  );
}
