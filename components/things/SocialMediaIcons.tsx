import React from 'react'
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";






export default function SocialMediaIcons() {
  return (
    <div className="flex space-x-4 pt-4">
    {/* Facebook */}
    <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
      <FaFacebook size={20} className="text-[#1877F2] hover:text-blue-700 transition duration-300" />
    </Link>

    {/* Twitter (X) */}
    <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
      <FaTwitter size={20} className="text-[#1DA1F2] hover:text-blue-500 transition duration-300" />
    </Link>

    {/* Instagram */}
    <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
      <FaInstagram size={20} className="text-[#E1306C] hover:text-pink-600 transition duration-300" />
    </Link>

    {/* LinkedIn */}
    <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
      <FaLinkedin size={20} className="text-[#0077B5] hover:text-blue-600 transition duration-300" />
    </Link>
  </div>

  )
}
