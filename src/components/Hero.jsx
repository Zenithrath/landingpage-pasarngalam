// src/components/Hero.jsx
import React from "react";
import mockupImg from "../assets/mockup.png";

const Hero = () => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center bg-dark text-white overflow-hidden">
      {/* Background Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-dark/80 bg-gradient-to-b from-dark/90 via-dark/70 to-dark"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col md:flex-row items-center justify-between mt-16">
        {/* Left: Text */}
        <div className="md:w-1/2 md:ml-20 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="text-primary">Pasar</span>Ngalam
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-xl leading-relaxed mb-6">
            PasarNgalam adalah platform e-commerce berbasis web khusus Malang yang memberdayakan UMKM dan pelaku usaha lokal. Di sini, siapapun bisa menjadi mitra, apapun jenis usahanya—mulai dari kuliner, kerajinan, hingga jasa kreatif.
            Dengan PasarNgalam, mitra bisa dengan mudah menjual produk, mengelola pesanan, dan menjangkau pelanggan baru, sementara konsumen bisa menemukan produk lokal favorit langsung dari browser mereka. Bergabunglah dan dukung ekonomi
            lokal sambil menikmati kemudahan belanja online dari kota Malang!
          </p>
          <button className="bg-primary text-dark px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition">Mulai Sekarang</button>
        </div>

        {/* Right: App Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src={mockupImg}
            alt="App Screenshot"
            className="
              w-3/4 
              sm:w-2/3 
              md:w-full 
              max-w-3xl 
              
              transform 
              transition 
              duration-500 
              hover:scale-105
            "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
