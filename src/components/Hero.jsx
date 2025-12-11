// src/components/Hero.jsx
import React from "react";
import mockupImg from "../assets/mockup.png";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-dark text-white overflow-hidden pt-24 md:pt-32">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-dark/80 bg-gradient-to-b from-dark/90 via-dark/70 to-dark"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 md:px-12 flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">
        {/* Left: Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-tight leading-tight">
            <span className="text-primary">Pasar</span>Ngalam
          </h1>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl max-w-xl leading-relaxed mb-6">
            PasarNgalam adalah platform e-commerce berbasis web khusus Malang yang memberdayakan UMKM dan pelaku usaha lokal. Di sini, siapapun bisa menjadi mitra, apapun jenis usahanya—mulai dari kuliner, kerajinan, hingga jasa kreatif.
            Dengan PasarNgalam, mitra bisa dengan mudah menjual produk, mengelola pesanan, dan menjangkau pelanggan baru, sementara konsumen bisa menemukan produk lokal favorit langsung dari browser mereka. Bergabunglah dan dukung ekonomi
            lokal sambil menikmati kemudahan belanja online dari kota Malang!
          </p>
          <button className="bg-primary text-dark px-6 sm:px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition">Mulai Sekarang</button>
        </div>

        {/* Right: App Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src={mockupImg}
            alt="App Screenshot"
            className="
              w-4/5 sm:w-3/4 md:w-full
              max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl
              h-auto
              object-contain
              transform transition duration-500 hover:scale-105
              rounded-xl shadow-2xl
            "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
