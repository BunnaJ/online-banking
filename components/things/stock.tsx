"use client";
import { motion } from "framer-motion";
import {
  FaApple,
  FaAmazon,
  // FaMeta,
  FaMicrosoft,
  // FaTesla,
  FaGoogle,
  // FaNetflix,
  FaPaypal,
  FaShopify,
  FaUber,
} from "react-icons/fa";
import { SiNvidia, SiAdobe, SiSamsung, SiIntel } from "react-icons/si";
import React from "react";

const icons = [
  <FaApple size={30} color="#000" />,
  <FaAmazon size={30} color="#FF9900" />,
  <FaMicrosoft size={30} color="#737373" />,
  <SiNvidia size={30} color="#76B900" />,
  <FaGoogle size={30} color="#4285F4" />,
  <SiAdobe size={30} color="#FF0000" />,
  <SiSamsung size={40} color="#ffff" />,
  <FaUber size={30} color="#000" />,
  <SiIntel size={30} color="#0071C5" />,
  <FaShopify size={30} color="#95BF47" />,
  <FaPaypal size={30} color="#003087" />,
];

const duplicateIcons = [...icons, ...icons];

export default function StockTicker() {
  return (
    <div className="flex items-center  justify-center  container mx-auto border-gray-200 ">
      <div className="overflow-hidden w-full">
        <motion.div
          className="flex gap-5"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25,
          }}
        >
          {duplicateIcons.map((Icon, idx) => (
            <div key={idx} className="flex-shrink-0 w-20 h-20 flex items-center justify-center">
              {Icon}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
