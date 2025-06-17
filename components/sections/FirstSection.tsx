"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import SecondSection from "./SecondSection";

// Animation config
const bounce = {
  y: [0, -15, 0], // Move up, then down, then back
};

const bounceTransition = {
  duration: 2.5,
  repeat: Infinity,
  ease: "easeInOut",
};

export default function FirstSection() {
  return (
    <div className="bg-[url('/bg3.jpg')]  bg-cover bg-repeat">
      <div className="container mx-auto px-4 py-2 md:py-24 ">
      <div className="flex gap-36 ">
        <div className="relative w-[700px]">
          <Image
            src={"/finance1.jpg"}
            height={100}
            width={700}
            alt="photo"
            className="rounded-[1rem] border-[6px] shadow border-white"
          />

          {/* Bouncing badge */}
          <motion.div
            animate={bounce}
            transition={bounceTransition}
            className="absolute top-10 right-0 flex items-center gap-4 bg-white border border-[var(--main)] p-2 px-4 rounded"
          >
            <div className="font-bold text-4xl text-[var(--main)]">19</div>
            <div>
              <p className="font-bold text-[var(--secondColor)]">Years of</p>
              <p className="font-bold text-[var(--secondColor)]">Experience</p>
            </div>
          </motion.div>
        </div>

        <div className="">
          <div className="text-transparent  font-bold text-2xl bg-clip-text bg-gradient-to-r from-[#142d6f] to-[#a3bdff]">
            Banking Made Easy
          </div>

          <div className="font-bold text-4xl  text-[var(--main)] ">
            Secure and hassle-free online transactions
          </div>
          <p className="text-[var(--or)] text-lg">
            Discover key safety tips for online payments and learn how we
            protect you. Access practical guidelines to trade confidently and
            securely.
          </p>

          <div className="mt-6">
            <div className="space-y-7">
            <div className="flex items-center gap-3">
             <div className="bg-[var(--main)] rounded border-3 border-[var(--secondColor)]">
             <Check size={24} className="text-[var(--secondColor)] p-1"/>
             </div>
              <p className=" text-2xl font-bold text-[var(--main)] ">Fast & Secure Foreign Exchange (FX) Conversion</p>
            </div>
            <div className="flex items-center gap-3">
            <div className="bg-[var(--main)] rounded border-3 border-[var(--secondColor)]">
             <Check size={24} className="text-[var(--secondColor)] p-1"/>
             </div>
              <p className=" text-2xl font-bold text-[var(--main)] ">Efficient Bulk Payment Solutions</p>
            </div>
            <div className="flex items-center gap-3">
            <div className="bg-[var(--main)] rounded border-3 border-[var(--secondColor)]">
             <Check size={24} className="text-[var(--secondColor)] p-1"/>
             </div>
              <p className=" text-2xl font-bold text-[var(--main)] ">Reliable Logistics & Shipment Handling</p>
            </div>
            <div className="flex items-center gap-3">
            <div className="bg-[var(--main)] rounded border-3 border-[var(--secondColor)]">
             <Check size={24} className="text-[var(--secondColor)] p-1"/>
             </div>
              <p className=" text-2xl font-bold text-[var(--main)] ">Guaranteed Privacy & Data Security</p>
            </div>
            <div className="flex items-center gap-3">
            <div className="bg-[var(--main)] rounded border-3 border-[var(--secondColor)]">
             <Check size={24} className="text-[var(--secondColor)] p-1"/>
             </div>
              <p className=" text-2xl font-bold text-[var(--main)] ">Guaranteed Privacy & Data Security</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <SecondSection/>
    </div>
    
  );
}
