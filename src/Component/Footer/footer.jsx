import React from 'react';
import Logo from "../Pages/imges/Logo.png";
import { FaYoutube, FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black py-12 mt-40 border-t-8 border-red-600">
      <div className="flex flex-col md:flex-row justify-between text-white px-6 md:px-12">
        {/* Logo and Text Side by Side */}
        <div className="flex items-center mb-6">
          <img
            src={Logo}
            alt="FlexZone"
            className="w-10 h-10 sm:w-14 sm:h-14 md:w-24 md:h-24 mr-4 rounded-full border-4 border-gray-600"
          />
          <h1 className="text-white text-4xl">FlexZone</h1>
        </div>

        {/* Links Section */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-2">Links</h3>
          <ul>
            <li><a href="#" className="hover:text-red-600 text-lg">Home</a></li>
            <li><a href="#" className="hover:text-red-600 text-lg">About</a></li>
          </ul>
        </div>

        {/* Get in Touch Section */}
      
<div className="mb-6">
  <h3 className="text-2xl font-bold mb-2">Get in touch</h3>
  <div className="flex space-x-4">
    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" >
      <FaYoutube size={24} />
    </a>
    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" >
      <FaInstagram size={24} />
    </a>
    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" >
      <FaFacebook size={24} />
    </a>
    <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" >
      <FaTiktok size={24} />
    </a>
  </div>
</div>
        {/* Contact Us Section */}
        <div>
          <h3 className="text-2xl font-bold mb-2">Contact us</h3>
          <button className="border-4 border-red-600 text-2xl px-6 py-2 text-white">Email</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
