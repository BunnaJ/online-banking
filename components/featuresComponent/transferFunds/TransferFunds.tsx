"use client";

import React, { useState } from "react";
import { Loader2 } from "lucide-react";

const countries = [
  "United States",
  "United Kingdom",
  "Canada",
  "Germany",
  "France",
  "Nigeria",
  "South Africa",
  "Kenya",
  "Ghana",
];

export default function TransferFunds() {
  const [transferType, setTransferType] = useState("Local");
  const [country, setCountry] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [accountName, setAccountName] = useState("");
  const [amount, setAmount] = useState("");
  const [narration, setNarration] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleTransfer = () => {
    if (!accountNumber || !accountName || !amount || (transferType === "International" && !country)) {
      setStatusMessage({ type: "error", message: "All fields are required!" });
      return;
    }

    setIsLoading(true);
    setStatusMessage(null);

    setTimeout(() => {
      setIsLoading(false);
      setStatusMessage({
        type: "success",
        message: `${transferType} transfer of ₦${Number(amount).toLocaleString()} to ${accountName} successful.`,
      });

      setAccountNumber("");
      setAccountName("");
      setAmount("");
      setNarration("");
      setCountry("");
    }, 2000);
  };

  return (
    <div className="">
      <div className="w-full max-w-5xl bg-white rounded-xl space-y-12">
        <div>
          <h2 className="md:text-4xl font-bold text-[var(--main)]">Transfer Funds</h2>
          <p className="text-xl text-gray-700 font-bold pt-2">
            Please provide any specific details related to the payment transfer.
          </p>
        </div>

        {statusMessage && (
          <div
            className={`p-3 rounded-md text-xl ${
              statusMessage.type === "success"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-600"
            }`}
          >
            {statusMessage.message}
          </div>
        )}

        <div>
          <label className="text-xl text-gray-700">Transfer Type</label>
          <div className="flex gap-4 mt-2">
            {["Local", "International"].map((type) => (
              <button
                key={type}
                onClick={() => setTransferType(type)}
                className={`px-4 py-2 rounded-full border ${
                  transferType === type
                    ? "bg-[var(--main)] text-white border-transparent"
                    : "border-gray-300 text-gray-700"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {transferType === "International" && (
          <div>
            <label className="text-xl text-gray-700">Select Country</label>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--main)]"
            >
              <option value="">-- Select a Country --</option>
              {countries.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        )}

        <div className="space-y-4">
          <div>
            <label className="text-xl text-gray-700">Recipient Account Number</label>
            <input
              type="text"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              placeholder="Enter account number"
              className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--main)]"
            />
          </div>

          <div>
            <label className="text-xl text-gray-700">Recipient Account Name</label>
            <input
              type="text"
              value={accountName}
              onChange={(e) => setAccountName(e.target.value)}
              placeholder="Enter account name"
              className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--main)]"
            />
          </div>

          <div>
            <label className="text-xl text-gray-700">Amount (₦)</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--main)]"
            />
          </div>

          <div>
            <label className="text-xl text-gray-700">Narration (Optional)</label>
            <textarea
              value={narration}
              onChange={(e) => setNarration(e.target.value)}
              placeholder="Add a note or reason for this transfer"
              className="w-full mt-1 px-4 py-2 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-[var(--main)]"
              rows={3}
            />
          </div>
        </div>

        <button
          onClick={handleTransfer}
          disabled={isLoading}
          className="w-full bg-[var(--main)] text-white py-3 rounded-md font-semibold hover:bg-opacity-90 transition disabled:opacity-50 flex items-center justify-center"
        >
          {isLoading ? <Loader2 className="animate-spin w-5 h-5" /> : "Send Money"}
        </button>
      </div>
    </div>
  );
}
