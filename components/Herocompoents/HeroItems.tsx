"use client";
import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import Stock from "../things/stock";

export default function HeroItems() {
  return (
    <div className="relative bg-gradient-to-br from-[var(--main)] via-[#1a3578] to-[#0f204a] overflow-hidden">
      {/* Dotted SVG pattern overlay */}
      <svg
        className="absolute inset-0 w-full h-full z-0 opacity-20"
        style={{ backgroundSize: "24px 24px", pointerEvents: "none" }}
      >
        <defs>
          <pattern
            id="dots"
            x="0"
            y="0"
            width="24"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="3" cy="3" r="2" fill="#ffffff88" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>

      {/* Optional network-style lines */}
      <svg
        className="absolute inset-0 w-full h-full z-0 opacity-10"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          d="M 0 20 Q 25 40 50 20 T 100 20"
          stroke="#ffffff33"
          fill="transparent"
          strokeWidth="0.6"
        />
        <path
          d="M 0 40 Q 25 60 50 40 T 100 40"
          stroke="#ffffff33"
          fill="transparent"
          strokeWidth="0.6"
        />
      </svg>

      {/* Hero Content */}
      <div className="relative z-10 text-white flex items-center gap-44 container mx-auto py-2 md:py-52">
        <div>
          <h1 className="md:text-5xl font-bold text-white">
            Modern{" "}
            <span className="text-[var(--secondColor)]">Banking Made</span>{" "}
            Simple,
            <br /> Secure & Designed for You
          </h1>
          <p className="mt-4 text-lg max-w-xl text-[var(--secondColor)]">
            Welcome to HuloFinance — your secure, smart, and seamless solution
            for managing money. Track expenses, make transfers, and take control
            of your financial future all in one place.
          </p>

          <div className="mt-6 flex items-center gap-5">
            <div className="glow-border font-bold bg-[#ffffff22] border w-[150px] p-2 text-center rounded text-white hover:text-[var(--main)]">
              <Link href={"/about"}>Learn More</Link>
            </div>

            <div className=" flex  items-center justify-center gap-1 bg-[#ffffff22] border w-[150px] p-2 rounded cursor-point ">
              <div className="">
                <FcGoogle />
              </div>
              <div className="font-bold">Google</div>
            </div>
          </div>
        </div>

        {/* Image with SVG-style glow and large size */}
        <div className="relative w-full  max-w-[650px]">
          <div className="absolute inset-0 z-[-1] rounded-[3rem] blur-xl opacity-50 scale-105 bg-gradient-to-tr from-[var(--secondColor)] to-white" />
          <Image
            src="/leftImage.webp"
            alt="Hero Illustration"
            width={800}
            height={100}
            className="rounded-[3rem] shadow-[0_20px_60px_rgba(0,0,0,0.4)] border-[6px] border-white"
          />
        </div>
      </div>
      <Stock/>

    </div>
  );
}
