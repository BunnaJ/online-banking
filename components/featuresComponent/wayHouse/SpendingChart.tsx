"use client";

import React from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";

const monthlySpending = [
  { month: "Jan", amount: 120000 },
  { month: "Feb", amount: 85000 },
  { month: "Mar", amount: 93000 },
  { month: "Apr", amount: 72000 },
  { month: "May", amount: 102000 },
  { month: "Jun", amount: 89000 },
  { month: "Jul", amount: 110000 },
  { month: "Aug", amount: 95000 },
  { month: "Sep", amount: 88000 },
  { month: "Oct", amount: 103000 },
  { month: "Nov", amount: 97000 },
  { month: "Dec", amount: 140000 },
];

export default function YearlySpendingChart() {
  return (
    <div className="w-full h-[300px] bg-white p-4 rounded-xl">
      <h2 className="text-xl font-semibold text-[var(--main)] mb-4">Monthly Spending (₦)</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={monthlySpending}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis tickFormatter={(value) => `$${(value / 1000).toFixed(0)}`} />
          <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
          <Bar dataKey="amount" fill="var(--main)" radius={[8, 8, 0, 0]} /> 
        </BarChart >
      </ResponsiveContainer>
    </div>
  );
}
