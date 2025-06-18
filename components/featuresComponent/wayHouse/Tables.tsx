'use client'

import React, { useState } from "react";

const transactions = [
  {
    id: 1,
    title: "Amazon Purchase",
    amount: -45000,
    status: "Failed",
    date: "June 13, 2025",
    category: "business",
  },
  {
    id: 2,
    title: "Salary Credit",
    amount: 250000,
    status: "Success",
    date: "June 10, 2025",
    category: "business",
  },
  {
    id: 3,
    title: "Netflix",
    amount: -3600,
    status: "Pending",
    date: "June 9, 2025",
    category: "shopping",
  },
  {
    id: 4,
    title: "Netflix",
    amount: -3600,
    status: "Pending",
    date: "June 9, 2025",
    category: "travel",
  },
  {
    id: 5,
    title: "Salary Credit",
    amount: 250000,
    status: "Success",
    date: "June 10, 2025",
    category: "business",
  },
  {
    id: 6,
    title: "Amazon Purchase",
    amount: -45000,
    status: "Failed",
    date: "June 13, 2025",
    category: "Shopping",
  },
  {
    id: 7,
    title: "Amazon Purchase",
    amount: -45000,
    status: "Failed",
    date: "June 13, 2025",
    category: "Shopping",
  },
  // add more transactions as needed
];

const ITEMS_PER_PAGE = 10;

export default function Recent() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(transactions.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentData = transactions.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="">
      {/* table */}
      <div className="bg-white rounded-xl p-6 overflow-auto pt-10">
        <table className="min-w-full table-auto text-left ">
          <thead>
            <tr className="text-sm text-gray-600 border-b">
              <th className="px-4 py-2 font-medium text-l bg-[var(--soft)]">Transaction</th>
              <th className="px-4 py-2 font-medium text-l bg-[var(--soft)]">Amount</th>
              <th className="px-4 py-2 font-medium text-l bg-[var(--soft)]">Status</th>
              <th className="px-4 py-2 font-medium text-l bg-[var(--soft)]">Date</th>
              <th className="px-4 py-2 font-medium text-l bg-[var(--soft)]">Category</th>
            </tr>
          </thead>
          <tbody className="text-sm border-b ">
            {currentData.map((txn) => (
              <tr key={txn.id} className="transition border-b ">
                <td className="px-4 py-5 bg-[#fdfdfd] text-[14px]">{txn.title}</td>
                <td className={`px-4 py-5 bg-[#fdfdfd] text-[14px] ${txn.amount > 0 ? "text-green-600" : "text-red-500"}`}>
                  {txn.amount > 0 ? "+" : "-"}${Math.abs(txn.amount).toLocaleString()}
                </td>
                <td className="px-4 py-5 bg-[#fdfdfd] text-[14px]">
                  <span className={`px-3 py-2 rounded-3xl text-xs  ${
                    txn.status === "Success"
                      ? "bg-green-100 text-green-700"
                      : txn.status === "Failed"
                      ? "bg-red-100 text-red-600"
                      : "bg-yellow-100 text-yellow-700"
                  }`}>
                    {txn.status}
                  </span>
                </td>
                <td className="px-4 py-5 bg-[#fdfdfd] text-[14px]">{txn.date}</td>
                <td className="px-4 py-5 bg-[#fdfdfd] text-[14px]">{txn.category}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-end items-center mt-4 space-x-2 pt-10 ">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 bg-[var(--soft)] text-[var(--main)] rounded disabled:opacity-50"
          >
            Prev
          </button>
          <span className="text-sm text-gray-700">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-3 py-1 bg-[var(--soft)] text-[var(--main)] rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
