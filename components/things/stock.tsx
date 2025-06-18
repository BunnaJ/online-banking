"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaApple,
  FaAmazon,
  FaMicrosoft,
  FaGoogle,
  FaPaypal,
  FaShopify,
  FaUber,
} from "react-icons/fa";
import { SiNvidia, SiAdobe, SiSamsung, SiIntel } from "react-icons/si";

const icons = [
  { id: "apple", icon: <FaApple size={30} color="#000" /> },
  { id: "amazon", icon: <FaAmazon size={30} color="#FF9900" /> },
  { id: "microsoft", icon: <FaMicrosoft size={30} color="#737373" /> },
  { id: "nvidia", icon: <SiNvidia size={30} color="#76B900" /> },
  { id: "google", icon: <FaGoogle size={30} color="#4285F4" /> },
  { id: "adobe", icon: <SiAdobe size={30} color="#FF0000" /> },
  { id: "samsung", icon: <SiSamsung size={30} color="#FFFFFF" /> },
  { id: "uber", icon: <FaUber size={30} color="#000" /> },
  { id: "intel", icon: <SiIntel size={30} color="#0071C5" /> },
  { id: "shopify", icon: <FaShopify size={30} color="#95BF47" /> },
  { id: "paypal", icon: <FaPaypal size={30} color="#003087" /> },
];

const duplicateIcons = [...icons, ...icons];

export default function StockTicker() {
  return (
    <div className="container mx-auto flex items-center justify-center border-gray-200">
      <div className="w-full overflow-hidden">
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
          {duplicateIcons.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="flex-shrink-0 w-20 h-20 flex items-center justify-center"
            >
              {item.icon}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
