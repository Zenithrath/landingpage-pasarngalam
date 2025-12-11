import React from "react";
import { Instagram, Twitter, Facebook, MapPin, Phone, Mail } from "lucide-react";
import logoImg from "../assets/logo.jpg"; // Pastikan import gambar

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand & Logo */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <img src={logoImg} alt="PasarNgalam Logo" className="h-10 rounded-full w-auto object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">Platform marketplace kuliner terpercaya untuk mendukung UMKM lokal Indonesia.</p>
            <div className="flex gap-4 pt-2">
              <a href="https://www.instagram.com/pasar.ngal4m?igsh=MTE0MjY1aXNrMGV6dQ==" className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-dark transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-dark transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Navigasi</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>
                <a href="#home" className="hover:text-primary transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#fitur" className="hover:text-primary transition-colors">
                  Fitur Unggulan
                </a>
              </li>
              <li>
                <a href="#demo" className="hover:text-primary transition-colors">
                  Demo
                </a>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Bantuan</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Cara Pesan
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Syarat & Ketentuan
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Kebijakan Privasi
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Hubungi Kami
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Kontak</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex gap-3">
                <MapPin className="text-primary h-5 w-5 shrink-0" />
                <span>Jl. Salahutu No. 67, Pisang Candi, Malang, Jawa Timur</span>
              </li>
              <li className="flex gap-3">
                <Phone className="text-primary h-5 w-5 shrink-0" />
                <span>(+62) 877-8392-3671</span>
              </li>
              <li className="flex gap-3">
                <Mail className="text-primary h-5 w-5 shrink-0" />
                <span>pasar.ngalam25@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2024 PasarNgalam. Semua hak dilindungi.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Syarat & Ketentuan
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Privasi
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
