import { Phone } from 'lucide-react';

export default function FloatingButtons() {
  return (
    <>
      <div className="fixed bottom-8 left-4 z-50">
        <button className="w-12 h-12 rounded-full bg-red-600 hover:bg-red-500 flex items-center justify-center shadow-lg animate-pulse transition-colors">
          <Phone size={20} className="text-white" />
        </button>
      </div>

      <div className="fixed bottom-8 right-4 z-50 flex flex-col gap-2">
        <div className="w-12 h-12 rounded-full bg-blue-500 hover:bg-blue-400 flex items-center justify-center shadow-lg cursor-pointer transition-colors">
          <span className="text-white text-xs font-bold">Zalo</span>
        </div>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-12 h-12 rounded-full bg-[#1a237e] hover:bg-[#283593] flex items-center justify-center shadow-lg cursor-pointer transition-colors text-white text-lg font-bold"
        >
          ↑
        </button>
      </div>
    </>
  );
}
