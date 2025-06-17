'use client';

import React from 'react';
import {
  Briefcase,
  Plane,
  LineChart,
  ShoppingBag,
} from 'lucide-react';

type CategoryName = 'Business' | 'Travel' | 'Investment' | 'Shopping';

const iconMap: Record<CategoryName, React.ReactElement> = {
  Business: <Briefcase className="text-[var(--main)] w-5 h-5" />,
  Travel: <Plane className="text-[var(--main)] w-5 h-5" />,
  Investment: <LineChart className="text-[var(--main)] w-5 h-5" />,
  Shopping: <ShoppingBag className="text-[var(--main)] w-5 h-5" />,
};

const data: { name: CategoryName; percentage: number }[] = [
  { name: 'Business', percentage: 65 },
  { name: 'Travel', percentage: 40 },
  { name: 'Investment', percentage: 80 },
  { name: 'Shopping', percentage: 50 },
];

export default function CategoryProgress() {
  return (
<div className="">
    <h1 className='font-bold pt-12 pb-10 text-xl '>Top Categories</h1>
<div className="space-y-6">
      {data.map((cat, index) => (
        <div key={index} className="space-y-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="bg-[var(--soft)] p-2 rounded-full">
                {iconMap[cat.name]}
              </span>
              <span className="font-semibold text-gray-800">{cat.name}</span>
            </div>
            <span className="text-sm text-gray-500">{cat.percentage}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="h-2 rounded-full bg-[var(--main)] transition-all duration-500  "
              style={{ width: `${cat.percentage}%` }}
            />
          </div>
        </div>
      ))}
    </div>
</div>
  );
}
