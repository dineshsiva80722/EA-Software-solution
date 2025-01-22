import React from 'react';
import { Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex  justify-between items-start mb-12">
          <div className="text-3xl font-bold mb-8 md:mb-0">Company name</div>
          <div className="">
           <ul>
            <li className='text-xl font-semibold'>Phone:+91 99999 88888</li>
            <li className='text-xl font-semibold'>Email:Company23@gamil.com</li>
            <li className='text-xl font-semibold'>Contact Us: info@company.com</li>
            <li className='text-xl font-semibold'>Address: 123 Main Street, City, Country</li>
           </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t">
          <div className="text-gray-600 mb-4 md:mb-0">© company name 2023</div>
          <div className="flex gap-4">
            <Twitter className="text-gray-600 hover:text-purple-600 cursor-pointer" />
            <Instagram className="text-gray-600 hover:text-purple-600 cursor-pointer" />
            <Linkedin className="text-gray-600 hover:text-purple-600 cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;