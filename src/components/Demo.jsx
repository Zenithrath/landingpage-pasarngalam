import React from "react";
import { Play } from "lucide-react";

const Demo = () => {
  return (
    <section id="demo" className="py-20 bg-dark text-white bg-gradient-to-b from-dark to-slate-900">
      <div className="container mx-auto px-4">
        {/* Header Demo */}
        <div className="text-center mb-12">
          <h4 className="text-primary font-bold tracking-wider uppercase text-sm mb-2">Demo Video</h4>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Lihat Cara <span className="text-primary">Kerjanya</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Tonton video demo untuk melihat betapa mudahnya menggunakan PasarNgalam</p>
        </div>

        {/* Video Placeholder */}
        <div className="relative max-w-4xl mx-auto aspect-video bg-slate-800 rounded-3xl border border-slate-700 shadow-2xl overflow-hidden group cursor-pointer mb-24">
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.5)] group-hover:scale-110 transition-transform duration-300">
              <Play className="h-8 w-8 text-dark fill-current ml-1" />
            </div>
            <span className="mt-4 text-white font-medium opacity-80">Klik untuk memutar video demo</span>
          </div>
        </div>

        {/* STEPS Section (Dipindah ke sini) */}
        <div className="border-t border-slate-800 pt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center p-4">
              <span className="text-6xl font-black text-slate-800/80 mb-4 select-none">01</span>
              <h3 className="text-xl font-bold mb-2 text-primary">Buka Aplikasi</h3>
              <p className="text-gray-400 text-sm">Buka Website PasarNgalam di smartphone Anda.</p>
            </div>
            {/* Step 2 */}
            <div className="flex flex-col items-center text-center p-4">
              <span className="text-6xl font-black text-slate-800/80 mb-4 select-none">02</span>
              <h3 className="text-xl font-bold mb-2 text-primary">Pilih Menu</h3>
              <p className="text-gray-400 text-sm">Jelajahi ribuan kuliner legendaris dan pilih menu favoritmu.</p>
            </div>
            {/* Step 3 */}
            <div className="flex flex-col items-center text-center p-4">
              <span className="text-6xl font-black text-slate-800/80 mb-4 select-none">03</span>
              <h3 className="text-xl font-bold mb-2 text-primary">Pesan & Bayar</h3>
              <p className="text-gray-400 text-sm">Checkout pesanan dan lakukan pembayaran dengan metode yang tersedia.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
