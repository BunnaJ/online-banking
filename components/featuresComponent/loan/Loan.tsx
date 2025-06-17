"use client";

import React, { useState } from "react";
import { Loader2 } from "lucide-react";

export default function RequestLoan() {
  const [amount, setAmount] = useState("");
  const [purpose, setPurpose] = useState("");
  const [duration, setDuration] = useState("");
  const [repaymentDate, setRepaymentDate] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleSubmit = () => {
    if (!amount || !purpose || !duration || !repaymentDate) {
      setMessage({ type: "error", text: "All fields are required!" });
      return;
    }

    setIsLoading(true);
    setMessage(null);

    setTimeout(() => {
      setIsLoading(false);
      setMessage({ type: "success", text: "Loan request submitted successfully!" });

      setAmount("");
      setPurpose("");
      setDuration("");
      setRepaymentDate("");
    }, 2000);
  };

  return (
    <div className="">
      <div className="w-full max-w-4xl bg-white  space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-[var(--main)]">Loan Request</h2>
          <p className="text-gray-700 text-xl pt-2">Kindly fill in the details below to request a loan.</p>
        </div>

        {message && (
          <div
            className={`p-3 rounded-md text-xl ${
              message.type === "success"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-600"
            }`}
          >
            {message.text}
          </div>
        )}

        <div className="space-y-6">
          <div>
            <label className="text-gray-700 text-xl">Loan Amount (₦)</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-[var(--main)] focus:outline-none"
            />
          </div>

          <div>
            <label className="text-gray-700 text-xl">Purpose of Loan</label>
            <input
              type="text"
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
              placeholder="E.g. Business expansion, medical bills..."
              className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-[var(--main)] focus:outline-none"
            />
          </div>

          <div>
            <label className="text-gray-700 text-xl">Duration (in months)</label>
            <input
              type="number"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              placeholder="e.g. 12"
              className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-[var(--main)] focus:outline-none"
            />
          </div>

          <div>
            <label className="text-gray-700 text-xl">Repayment Start Date</label>
            <input
              type="date"
              value={repaymentDate}
              onChange={(e) => setRepaymentDate(e.target.value)}
              className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-[var(--main)] focus:outline-none"
            />
          </div>
        </div>

        <button
          onClick={handleSubmit}
          disabled={isLoading}
          className="w-full bg-[var(--main)] text-white py-3 rounded-md font-semibold hover:bg-opacity-90 transition disabled:opacity-50 flex items-center justify-center"
        >
          {isLoading ? <Loader2 className="animate-spin w-5 h-5" /> : "Submit Loan Request"}
        </button>
      </div>
    </div>
  );
}


