import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600&q=80',
    title: 'Thang máy Shanghai Mitsubishi',
    subtitle: 'Công nghệ tiên tiến, an toàn hàng đầu',
  },
  {
    image: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1600&q=80',
    title: 'Giải pháp thang máy toàn diện',
    subtitle: 'Từ thiết kế đến lắp đặt và bảo trì',
  },
  {
    image: 'https://images.pexels.com/photos/1486785/pexels-photo-1486785.jpeg?auto=compress&cs=tinysrgb&w=1600&q=80',
    title: 'Đặt niềm tin vào Việt Chào',
    subtitle: 'Hơn 20 năm kinh nghiệm phục vụ khách hàng',
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-900">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />

          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="container-wide w-full">
              <div className="max-w-2xl">
                <div className={`transition-all duration-700 ${i === current ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  <p className="text-sm font-semibold text-blue-400 tracking-wide mb-3">
                    GIẢI PHÁP THANG MÁY
                  </p>
                  <h1 className="text-5xl md:text-6xl font-black text-white mb-4 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-xl text-gray-200 mb-8">
                    {slide.subtitle}
                  </p>
                  <div className="flex gap-3">
                    <button className="btn-primary">
                      Tìm hiểu thêm
                    </button>
                    <button className="btn-outline bg-white/10 border-white text-white hover:bg-white/20">
                      Xem dự án
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation buttons */}
      <button
        onClick={prev}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-smooth backdrop-blur-sm border border-white/20"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-smooth backdrop-blur-sm border border-white/20"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-smooth ${
              i === current ? 'bg-white w-8 h-2 rounded-full' : 'bg-white/40 w-2 h-2 rounded-full hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
