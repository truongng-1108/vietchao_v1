import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const productCategories = [
  {
    name: 'Thang máy tải khách Shanghai Mitsubishi',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
  },
  {
    name: 'Thang máy quan sát Shanghai Mitsubishi',
    image: 'https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
  },
  {
    name: 'Thang máy nâng hàng Shanghai Mitsubishi',
    image: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
  },
  {
    name: 'Thang máy bệnh viện Shanghai Mitsubishi',
    image: 'https://images.pexels.com/photos/668300/pexels-photo-668300.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
  },
];

export default function Products() {
  const [start, setStart] = useState(0);
  const visible = 4;

  const prev = () => setStart((s) => Math.max(0, s - 1));
  const next = () => setStart((s) => Math.min(productCategories.length - visible, s + 1));

  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-2">
          <button
            onClick={prev}
            disabled={start === 0}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white disabled:opacity-30 transition-colors"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-3 flex-1 mx-4">
            {productCategories.slice(start, start + visible).map((cat) => (
              <div key={cat.name} className="flex-1 group cursor-pointer">
                <div className="overflow-hidden rounded-t">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="bg-white text-center py-3 px-2 rounded-b hover:bg-[#1a237e] hover:text-white transition-colors">
                  <p className="text-sm font-medium text-gray-800 group-hover:text-white transition-colors">{cat.name}</p>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={next}
            disabled={start >= productCategories.length - visible}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white disabled:opacity-30 transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
