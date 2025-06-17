"use client";

import React, { useState } from "react";
import { Copy } from "lucide-react";

export default function AccountInfo() {
  const accountNumber = "1234567890";
  const accountName = "John Doe";
  const delay = 2000;

  const [copiedField, setCopiedField] = useState<"accountNumber" | "accountName" | null>(null);

  const handleCopy = (text: string, field: "accountNumber" | "accountName") => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);

    setTimeout(() => {
      setCopiedField(null);
    }, delay);
  };

  return (
    <div className="relative w-full max-w-2xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Account Number */}
        <div className="relative flex items-center justify-between bg-white p-4 rounded-xl shadow-sm border">
          <div>
            <p className="text-sm text-gray-500 mb-1">Account Number</p>
            <p className="text-lg font-semibold text-gray-800">
              {accountNumber}
            </p>
          </div>
          <div className="relative">
            <button
              onClick={() => handleCopy(accountNumber, "accountNumber")}
              className="p-2 rounded hover:bg-gray-100 transition"
            >
              <Copy className="w-5 h-5 text-gray-600" />
            </button>
            {copiedField === "accountNumber" && (
              <div className="absolute -top-7 right-0 text-xs text-emerald-600 font-semibold bg-white px-2 py-1 rounded shadow">
                Copied!
              </div>
            )}
          </div>
        </div>

        {/* Account Name */}
        <div className="relative flex items-center justify-between bg-white p-4 rounded-xl shadow-sm border">
          <div>
            <p className="text-sm text-gray-500 mb-1">Account Name</p>
            <p className="text-lg font-semibold text-gray-800">{accountName}</p>
          </div>
          <div className="relative">
            <button
              onClick={() => handleCopy(accountName, "accountName")}
              className="p-2 rounded hover:bg-gray-100 transition"
            >
              <Copy className="w-5 h-5 text-gray-600" />
            </button>
            {copiedField === "accountName" && (
              <div className="absolute -top-7 right-0 text-xs text-emerald-600 font-semibold bg-white px-2 py-1 rounded shadow">
                Copied!
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
