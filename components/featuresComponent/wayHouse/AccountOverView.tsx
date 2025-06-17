'use client'

import { ArrowDownCircle, ArrowUpCircle, Wallet } from "lucide-react";

export default function AccountOverview() {
  return (
    <div className="bg-gradient-to-r from-[var(--soft)] to-white p-6 rounded-2xl shadow-sm ">
      <h2 className="text-xl font-semibold text-[var(--main)] mb-6">Account Overview</h2>

      <div className="space-y-4">
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
    </div>
  );
}
