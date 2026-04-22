import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80',
    text: 'THANG MÁY SHANGHAI MITSUBISHI',
    subtitle: 'CỠ TẢP ĐOÀN >>>',
  },
  {
    image: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80',
    text: 'Giải pháp thang máy hiện đại',
    subtitle: 'Công nghệ tiên tiến',
  },
  {
    image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80',
    text: 'Dẫn đầu về an toàn',
    subtitle: 'Sự tin tưởng của khách hàng',
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-all duration-1000 ${i === current ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 scale-105'}`}
        >
          <img
            src={slide.image}
            alt={slide.text}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-overlay" />

          <div className="absolute bottom-0 right-0 w-1/2 h-full flex items-center justify-center">
            <div className="relative w-full h-full perspective">
              <div
                className="absolute inset-0 bg-gradient-to-l from-[#1a237e] to-transparent flex flex-col justify-center items-end pr-16"
                style={{
                  animation: i === current ? 'slideInRight 1s ease-out' : 'none',
                  perspective: '1000px',
                }}
              >
                <div className="text-right space-y-3 animate-fadeInUp">
                  <h1 className="text-5xl md:text-6xl font-black text-white leading-tight drop-shadow-2xl transform transition-transform duration-700 hover:scale-105">
                    {slide.text}
                  </h1>
                  <div className="flex items-center justify-end gap-3">
                    <div className="w-12 h-1 bg-yellow-400" />
                    <p className="text-xl text-yellow-400 font-bold tracking-wider">{slide.subtitle}</p>
                  </div>
                  <p className="text-sm text-gray-200 max-w-xs">
                    <span className="text-yellow-400 font-bold">🌐 www.vietchao.vn</span>
                    <span className="text-red-400 mx-2">|</span>
                    <span className="text-yellow-400 font-bold">📞 Hotline: 0898 552 888</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute left-0 top-0 w-1/2 h-full flex items-center">
            <div className="relative w-full h-full flex items-center justify-center animate-float">
              <div className="w-40 h-40 md:w-64 md:h-64 border-8 border-[#1a237e]/30 rounded-full absolute animate-rotate3d" />
              <div className="w-32 h-32 md:w-48 md:h-48 border-4 border-yellow-400/40 rounded-full animate-float" />
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prev}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-red-600 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 hover:-translate-x-1 card-hover shadow-lg"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={next}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-red-600 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 hover:translate-x-1 card-hover shadow-lg"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3 px-4 py-2 glass-effect rounded-full">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-300 ${i === current ? 'w-8 h-2 bg-red-600 rounded-full' : 'w-2 h-2 bg-white/60 rounded-full hover:bg-white'}`}
          />
        ))}
      </div>

      <div className="absolute right-0 top-1/3 -translate-y-1/2 z-20">
        <div
          className="bg-gradient-primary text-white text-xs font-semibold py-4 px-2 cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:scale-110"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', letterSpacing: '2px' }}
        >
          HỖ TRỢ TRỰC TUYẾN
        </div>
      </div>
    </div>
  );
}
