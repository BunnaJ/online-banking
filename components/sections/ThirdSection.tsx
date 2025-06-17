"use client";
import React from "react";
import { PiBankFill } from "react-icons/pi";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { GiTakeMyMoney } from "react-icons/gi";
import { motion } from "framer-motion";
import Image from "next/image";

import { FaAward, FaTrophy, FaMedal, FaStar } from "react-icons/fa";

const awards = [
  {
    icon: <FaAward size={30} className="text-yellow-400" />,
    title: "Best Digital Bank 2024",
    description: "Recognized for excellence in digital banking innovation and customer experience.",
  },
  {
    icon: <FaTrophy size={30} className="text-orange-400" />,
    title: "Top Fintech Startup",
    description: "Awarded for outstanding growth, service reliability, and financial technology.",
  },
  {
    icon: <FaMedal size={30} className="text-green-400" />,
    title: "Customer Choice Award",
    description: "Voted most trusted online banking solution by over 300,000 customers.",
  },
  {
    icon: <FaStar size={30} className="text-blue-400" />,
    title: "UX Design Excellence",
    description: "Praised for intuitive interface and seamless banking experience.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const bounce = {
  y: [0, -15, 0], // Move up, then down, then back
};

const bounceTransition = {
  duration: 2.5,
  repeat: Infinity,
  ease: "easeInOut",
};

export default function ThirdSection() {
  return (
    <div className="container mx-auto px-4 py-2 md:py-32 ">
      <div className="flex items-center justify-between  bg-[url('/bg3.jpg')] bg-cover bg-repeat ">
        <div className="">
          <div className="">
            <div className="font-bold text-3xl">Our Work Process</div>
            <div className=" text-[var(--or)] text-lg ">
              We’re proud to grow with you — every step of the way.
            </div>
          </div>
          <div className="">
            <div className="flex items-center gap-7 mt-14 border-l-2  pl-5 ">
              <div className="">
                <PiBankFill size={70} className="text-[var(--main)]" />
              </div>
              {/*  */}
              <div className="">
                <div className="font-bold text-2xl">Banking Services</div>
                <div className="w-[500px] text-lg text-[var(--or)] ">
                  HuloFinance offers a powerful suite of financial solutions
                  tailored for modern banking. Ready to move on from your old
                  bank? Switching to HuloFinance is easier than you think.
                </div>
              </div>
            </div>

            <div className="flex items-center gap-7 mt-14 border-l-2  pl-5 ">
              <div className="">
                <GiTakeMyMoney
                  size={70}
                  className="text-[var(--main)]"
                />
              </div>
              {/*  */}
              <div className="">
                <div className="font-bold text-2xl">
                  Cash Management Account
                </div>
                <div className="w-[500px] text-lg text-[var(--or)] ">
                  Enjoy the flexibility of a daily spending account with the
                  earning potential of a term deposit. With HuloFinance’s Cash
                  Management Account, you get the best of both worlds —
                  convenience and interest.
                </div>
              </div>
            </div>
            <div className="flex items-center gap-7 mt-14 border-l-2  pl-5 ">
              <div className="">
                <BsFillPersonVcardFill size={70} className="text-[var(--main)]" />
              </div>
              {/*  */}
              <div className="">
                <div className="font-bold text-2xl">
                  Business Transaction Accounts
                </div>
                <div className="w-[500px] text-lg text-[var(--or)] ">
                  Our business accounts are smart, secure, and built to support
                  your operations. Whether you're a startup or an enterprise,
                  our team is here to guide you to the right choice.
                </div>
              </div>
            </div>
          
          </div>
        </div>
        <div className="relative w-[600px]">
          <Image
            src={"/huloPhone.png"}
            height={100}
            width={700}
            alt="photo"
            className="rounded-[1rem] border-[6px] shadow border-white"
          />

          {/* Bouncing badge */}
          <motion.div
            animate={bounce}
            transition={bounceTransition}
            className="absolute top-10  flex items-center gap-4 bg-white border border-[var(--main)] p-2 px-4 rounded"
          >
            <div className="font-bold text-4xl text-[var(--main)]">500k</div>
            <div>
              <p className="font-bold text-[var(--secondColor)]">Active</p>
              <p className="font-bold text-[var(--secondColor)]">User</p>
            </div>
          </motion.div>
        </div>
      </div>
        {/*  */}
      <div className="container mx-auto px-4 text-center mt-24">
        <h2 className="text-3xl font-bold mb-4 text-[var(--main)]">Awards & Recognitions</h2>
        <p className="text-gray-600 mb-10">
          At HuloFinance, we're proud of the trust we've earned and the milestones we've achieved.
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {awards.map((award, idx) => (
            <motion.div
              key={idx}
              className="bg-[#ffffffdd] border border-gray-200 p-6 rounded-xl shadow-lg"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="flex justify-center mb-4">{award.icon}</div>
              <h3 className="font-semibold text-xl text-[var(--main)]">{award.title}</h3>
              <p className="text-gray-500 text-sm mt-2">{award.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
