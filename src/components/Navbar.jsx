import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logoImg from "../assets/logo.jpg"; // Pastikan path ini benar

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-dark/90 backdrop-blur-md text-white fixed w-full z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Image */}
          <div className="flex-shrink-0 flex items-center">
            <img
              src={logoImg}
              alt="PasarNgalam Logo"
              className="h-12 rounded-full w-auto object-contain" // Sesuaikan tinggi logo di sini
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="hover:text-primary transition-colors px-3 py-2 rounded-md font-medium">
                Beranda
              </a>
              <a href="#fitur" className="hover:text-primary transition-colors px-3 py-2 rounded-md font-medium">
                Fitur
              </a>
              <a href="#demo" className="hover:text-primary transition-colors px-3 py-2 rounded-md font-medium">
                Demo
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="https://pasarngalam-production.up.railway.app/" className="bg-primary hover:bg-emerald-600 text-dark font-bold py-2 px-6 rounded-lg transition-all transform hover:scale-105">
              Mulai Sekarang
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-dark border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 rounded-md text-base font-medium hover:text-primary hover:bg-gray-800">
              Beranda
            </a>
            <a href="#fitur" className="block px-3 py-2 rounded-md text-base font-medium hover:text-primary hover:bg-gray-800">
              Fitur
            </a>
            <a href="#demo" className="block px-3 py-2 rounded-md text-base font-medium hover:text-primary hover:bg-gray-800">
              Demo
            </a>
            <a href="#promo" className="block px-3 py-2 rounded-md text-base font-medium hover:text-primary hover:bg-gray-800">
              Promo
            </a>
            <button className="w-full text-left mt-4 bg-primary text-dark font-bold px-3 py-2 rounded-md">Mulai Sekarang</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
