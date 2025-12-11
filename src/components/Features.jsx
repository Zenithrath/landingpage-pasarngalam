// src/components/Features.jsx
import React from "react";
import { Store, Smartphone, CreditCard, Truck, ShieldCheck, UserCheck } from "lucide-react";

const featuresData = [
  {
    icon: <Store className="h-8 w-8 text-primary" />,
    title: "Dukung UMKM Lokal",
    desc: "Temukan dan dukung bisnis kuliner lokal di sekitar Anda. Setiap transaksi membantu ekonomi masyarakat.",
  },
  {
    icon: <Smartphone className="h-8 w-8 text-primary" />,
    title: "Pesan dari HP",
    desc: "Akses ribuan menu kuliner legendaris langsung dari smartphone Anda kapan saja dan dimana saja.",
  },
  {
    icon: <CreditCard className="h-8 w-8 text-primary" />,
    title: "Pembayaran Mudah",
    desc: "Berbagai metode pembayaran tersedia mulai dari e-wallet, transfer bank, hingga COD.",
  },
  {
    icon: <Truck className="h-8 w-8 text-primary" />,
    title: "Pengiriman Cepat",
    desc: "Partner pengiriman terpercaya memastikan pesanan Anda sampai dengan cepat dan aman.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: "Transaksi Aman",
    desc: "Sistem keamanan berlapis untuk memastikan setiap transaksi Anda terlindungi.",
  },
  {
    icon: <UserCheck className="h-8 w-8 text-primary" />,
    title: "Siapa Saja Bisa Jadi Driver",
    desc: "Bergabung sebagai mitra driver dan dapatkan penghasilan tambahan dengan fleksibel.",
  },
];

const Features = () => {
  return (
    <section id="fitur" className="py-24 bg-dark text-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h4 className="text-primary font-bold tracking-wider uppercase text-sm mb-2">Fitur Unggulan</h4>
          <h2 className="text-3xl md:text-5xl font-bold">
            Kenapa Harus <span className="text-primary">PasarNgalam</span>?
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Platform marketplace kuliner terlengkap dengan fitur-fitur yang memudahkan Anda</p>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((item, index) => (
            <div key={index} className="bg-card p-8 rounded-2xl border border-slate-800 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group">
              <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-slate-700 transition-colors">{item.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
