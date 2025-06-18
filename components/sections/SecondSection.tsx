"use client";
import React from "react";
import { BsSendCheckFill } from "react-icons/bs";
import { GrMoney } from "react-icons/gr";
import { GiReceiveMoney } from "react-icons/gi";
import { motion } from "framer-motion";
import Image from "next/image";

const iconAnimation = {
  animate: {
    y: [0, -10, 0],
  },
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

import { FaMoneyBillWave, FaShieldAlt, FaUsers, FaChartLine } from "react-icons/fa";

// Animation for each feature card
const cardAnimation = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const cardVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0 },
};

export default function SecondSection() {
  return (
    <div className="container mx-auto px-4 py-2 md:py">
      <div className="">
        <h1 className="font-bold text-3xl">Bank Smarter With Us</h1>
        <p className="text-[var(--or)] text-lg ">
          Experience seamless digital convenience every step of the way
        </p>
      </div>

      <div className="flex justify-center gap-10 ">
        {/* Card 1 */}
        <motion.div
          className="w-[500px] mt-12 border-8 p-5 rounded-2xl bg-[#ffffff22] relative"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0 }}
        >
          <h1 className="font-bold text-2xl pb-5 text-[var(--main)]">
            Register with HuloFinance
          </h1>
          <p>
            Create your free account in minutes. Join thousands enjoying secure,
            smart, and seamless online banking. Get started with just your email
            and phone number 
          </p>
          <motion.div
            className="absolute -top-7 -right-5 bg-[var(--main)] rounded-2xl p-5 border-4 "
            {...iconAnimation}
          >
            <GiReceiveMoney size={30} className="text-white" />
          </motion.div>
          <div className="rounded border-2 mt-5">
            <Image src={"/r1.jpeg"} alt="photo" height={100} width={550}/>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="w-[500px] mt-12 border-8 p-5 rounded-2xl bg-[#ffffff22]  relative"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="font-bold text-2xl pb-5 text-[var(--main)]">
            Track Your Expenses Easily
          </h1>
          <p>
            Stay in control of your finances. Use our intelligent dashboard to
            monitor your spending, set budgets, and get insights that help you grow
            your financial wellness.
          </p>
          <motion.div
            className="absolute -top-7 -right-5 bg-[var(--main)] rounded-2xl p-5 border-4 "
            {...iconAnimation}
          >
            <GrMoney size={30} className="text-white" />
          </motion.div>
          <div className="rounded border-2 mt-5">
            <Image src={"/r4.jpg"} alt="photo" height={100} width={550}/>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="w-[500px] mt-12 border-8 p-5 rounded-2xl bg-[#ffffff22] relative"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h1 className="font-bold text-2xl pb-5 text-[var(--main)]">
            Send & Receive Money
          </h1>
          <p>
            Transfer funds anytime, anywhere. With HuloFinance, you can make fast,
            reliable transfers locally and internationally with complete
            transparency and minimal fees.
          </p>
          <motion.div
            className="absolute -top-7 -right-5 bg-[var(--main)] rounded-2xl p-5 border-4 "
            {...iconAnimation}
          >
            <BsSendCheckFill size={30} className="text-white" />
          </motion.div>
          <div className="rounded border-2 mt-5">
            <Image src={"/r3.jpeg"} alt="photo" height={100} width={550}/>
          </div>
        </motion.div>
      </div>

        {/* key  features*/}

      <div className="">
      <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="container mx-auto px-4 py-12"
    >
      <h2 className="text-center text-4xl font-bold mb-6 text-[var(--main)]">Key Features</h2>
      <p className="text-center text-lg mb-12 text-[var(--or)]">
        Discover the features that make HuloFinance a powerful tool for managing your finances.
      </p>
      <div className="flex flex-wrap justify-center gap-10">
        {/* Feature 1 */}
        <motion.div
          className="w-[300px] p-6 bg-white border rounded-lg shadow-lg text-center"
          {...cardAnimation}
        >
          <FaMoneyBillWave className="text-[var(--main)] text-4xl mb-4" />
          <h3 className="text-xl font-semibold text-[var(--main)]">Easy Transfers</h3>
          <p className="text-sm text-gray-600">
            Send and receive money instantly with low fees and high security, locally or internationally.
          </p>
        </motion.div>

        {/* Feature 2 */}
        <motion.div
          className="w-[300px] p-6 bg-white border rounded-lg shadow-lg text-center"
          {...cardAnimation}
        >
          <FaShieldAlt className="text-[var(--main)] text-4xl mb-4" />
          <h3 className="text-xl font-semibold text-[var(--main)]">Top-Level Security</h3>
          <p className="text-sm text-gray-600">
            Your transactions and personal data are encrypted and protected with state-of-the-art security measures.
          </p>
        </motion.div>

        {/* Feature 3 */}
        <motion.div
          className="w-[300px] p-6 bg-white border rounded-lg shadow-lg text-center"
          {...cardAnimation}
        >
          <FaUsers className="text-[var(--main)] text-4xl mb-4" />
          <h3 className="text-xl font-semibold text-[var(--main)]">User-Friendly Interface</h3>
          <p className="text-sm text-gray-600">
            Navigate through your financial needs with ease using our clean, intuitive, and modern interface.
          </p>
        </motion.div>

        {/* Feature 4 */}
        <motion.div
          className="w-[300px] p-6 bg-white border rounded-lg shadow-lg text-center"
          {...cardAnimation}
        >
          <FaChartLine className="text-[var(--main)] text-4xl mb-4" />
          <h3 className="text-xl font-semibold text-[var(--main)]">Smart Insights</h3>
          <p className="text-sm text-gray-600">
            Get detailed financial insights with our intelligent dashboard to track your spending and optimize savings.
          </p>
        </motion.div>
      </div>
    </motion.div>
      </div>
      
    </div>
  );
}
