"use client";
import React, { useEffect, useState } from "react";

const ATMCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const autoFlip = () => {
      if (window.innerWidth < 768) {
        const interval = setInterval(() => {
          setIsFlipped((prev) => !prev);
        }, 4000);
        return () => clearInterval(interval);
      }
    };

    window.addEventListener("resize", autoFlip);
    return () => window.removeEventListener("resize", autoFlip);
  }, []);

  const cardStyle = {
    backgroundColor: "#a3bdff",
    backgroundImage: `url('https://www.transparenttextures.com/patterns/diagmonds-light.png')`, 
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundBlendMode: "overlay",
  };

  return (
    <div
      className="w-3500px] h-[270px]  mt-10"
      style={{ perspective: "1000px" }}
      onMouseEnter={() => window.innerWidth >= 768 && setIsFlipped(true)}
      onMouseLeave={() => window.innerWidth >= 768 && setIsFlipped(false)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 ${
          isFlipped ? "rotate-y-180" : ""
        }`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Side */}
        <div
          className="absolute w-full h-full text-white p-5 rounded-xl shadow-lg border border-[#a3bdff]"
          style={{
            ...cardStyle,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <div className="">
            <p className="font-bold text-l text-[var(--main)]">Kelvin Peter</p>
            <p className="font-bold text-l pt-2">$250.31</p>
          </div>
          {/* 2 */}
          <div className="flex items-center justify-between pt-8">
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="45"
                viewBox="0 0 48 36"
                fill="none"
              >
                <rect width="48" height="36" rx="4" fill="#D4AF37" />
                <path
                  d="M8 0v36M16 0v36M24 0v36M32 0v36M40 0v36"
                  stroke="#fff"
                  strokeWidth="1"
                />
                <path d="M0 12h48M0 24h48" stroke="#fff" strokeWidth="1" />
              </svg>
            </div>
            <div className="w-10 h-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-full h-full"
                fill="none"
              >
                <path
                  d="M7 10C8 11 8 13 7 14"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M10 8C12 10 12 14 10 16"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M13 6C16 9 16 15 13 18"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M16 4C20 8 20 16 16 20"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
          {/* 3 */}
          <div
            style={{
              fontFamily: `'Courier New', Courier, monospace`,
              letterSpacing: "0.1em",
            }}
            className="text-xl font-bold pt-6 text-[var(--main)]"
          >
            5095 6923 2******
          </div>
          {/* 4 */}
          <div className="flex items-center justify-between pt-2">
            <p className="font-bold">08/28</p>
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="30"
                viewBox="0 0 48 28"
              >
                <circle cx="18" cy="14" r="10" fill="#EB001B" />
                <circle cx="30" cy="14" r="10" fill="#F79E1B" />
                <path
                  d="M24 14a10 10 0 0 1-6-9.165 10 10 0 0 1 0 18.33A10 10 0 0 1 24 14z"
                  fill="#FF5F00"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div
          className="absolute w-full h-full text-white p-5 rounded-xl border border-[#a3bdff]"
          style={{
            ...cardStyle,
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <div className="bg-black h-6 w-full mb-6 rounded" />
          <div className="text-sm font-mono">CVV: ***</div>
          <div className="mt-6 text-xs text-[var(--main)]">
            This card is property of HuloFinance. If found, please return.
          </div>
        </div>
      </div>      
    </div>
  );
};

export default ATMCard;


