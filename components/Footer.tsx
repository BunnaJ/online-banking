
import Link from "next/link"
import Image from "next/image"
import { Phone, Mail } from 'lucide-react';
import SocialMediaIcons from "./things/SocialMediaIcons";




export default function Footer() {
  return (
    <footer className="bg-primary-custom-gray  py-10 mt-10 bg-[#aab8e0]">
    <div className="container mx-auto px-6 lg:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">

    {/* footer logo */}

    <div className="">
        <div className="">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="huloFinance"
            width={86}
            height={83}
            priority
          />
        </Link>
        </div>
        <SocialMediaIcons/>
    </div>
    

        {/* Quick Links Section */}
        <div>
          <h2 className="text-lg font-bold mb-4">Quick Links</h2>
          <ul className="space-y-5">
            <li>
              <Link href="/about" className="">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/faq" className="">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/investment" className="">
                Investment
              </Link>
            </li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h2 className="text-lg font-bold mb-4">Help</h2>
          <ul className="space-y-5">
            <li>
              <Link href="/solution" className="">
               Solution
              </Link>
            </li>
            
            <li>
              <Link href="/Account" className="">
                Account
              </Link>
            </li>
            <li>
              <Link href="/card" className="">
              Card
              </Link>
            </li>
            
            <li>
              <Link href="/insurance" className="">
                Insurance
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-lg font-bold mb-4">Contact</h2>
          <div className="flex gap-3 ">
            <Mail size={20} className="text-primary-custom-green"/>
          <span className="">info@hulofinace.com</span>
          </div>
          <div className="flex gap-3 mt-5">
          <Phone size={20} className="text-primary-custom-green"/>
          <span className="">+1 (415) 555-3928</span>
          
          </div>
          
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10  text-xs">
        &copy; {`2006 - ${new Date().getFullYear()}`} HuloFinance. All rights reserved.
      </div>
    </div>
  </footer>
  )
}
