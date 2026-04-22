import { useState } from 'react';
import { MapPin, Mail, Phone, Search, ChevronDown, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'TRANG CHỦ', active: true },
  { label: 'GIỚI THIỆU', dropdown: false },
  { label: 'SẢN PHẨM', dropdown: true },
  { label: 'DỰ ÁN', dropdown: true },
  { label: 'DỊCH VỤ', dropdown: true },
  { label: 'TIN TỨC', dropdown: true },
  { label: 'GÓC TƯ VẤN', dropdown: false },
  { label: 'LIÊN HỆ', dropdown: false },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50">
      <div className="gradient-primary text-white text-xs py-2 px-4 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="font-semibold tracking-wide text-[11px] uppercase">
            Công ty CP Việt Chào (Viet Chao Join Stock Company)
          </span>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 hover:text-yellow-300 cursor-pointer transition-colors duration-300">
              <MapPin size={12} /> ADDRESS
            </span>
            <span className="flex items-center gap-1 hover:text-yellow-300 cursor-pointer transition-colors duration-300">
              <Mail size={12} /> EMAIL
            </span>
            <span className="flex items-center gap-1 hover:text-yellow-300 cursor-pointer transition-colors duration-300">
              <Phone size={12} /> 0898 552 888
            </span>
            <div className="flex items-center gap-2 ml-2">
              <a href="#" className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-[10px] font-bold hover:bg-blue-500 transition-all duration-300 transform hover:scale-110">f</a>
              <a href="#" className="w-6 h-6 bg-red-500 rounded flex items-center justify-center hover:bg-red-400 transition-all duration-300 transform hover:scale-110">
                <Mail size={10} />
              </a>
              <a href="#" className="w-6 h-6 bg-green-600 rounded flex items-center justify-center hover:bg-green-500 transition-all duration-300 transform hover:scale-110">
                <Phone size={10} />
              </a>
            </div>
            <div className="relative flex items-center ml-2">
              <input
                type="text"
                placeholder="Tìm kiếm..."
                className={`bg-white text-gray-800 text-xs rounded px-2 py-0.5 outline-none transition-all duration-300 ${searchOpen ? 'w-32 opacity-100' : 'w-0 opacity-0'}`}
              />
              <button onClick={() => setSearchOpen(!searchOpen)} className="ml-1 hover:text-yellow-300 transition-colors">
                <Search size={13} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <nav className="bg-white/95 backdrop-blur-sm shadow-xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2 transform transition-transform duration-300 hover:scale-105">
            <div className="flex flex-col items-center">
              <div className="flex items-end gap-0.5">
                <div className="w-6 h-8 border-4 border-[#1a237e] relative transform transition-transform hover:rotate-12">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[#1a237e] text-[8px] font-black leading-none">VC</span>
                  </div>
                </div>
              </div>
              <span className="text-[#1a237e] font-black text-lg tracking-widest leading-tight">VIET CHAO</span>
              <span className="text-[#1a237e] text-[7px] tracking-wider">THE BEST CHOICE FOR BUILDINGS</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <button className="header-nav-link text-gray-700 hover:text-red-600 flex items-center gap-0.5">
                  {item.label}
                  {item.dropdown && <ChevronDown size={12} />}
                </button>
              </div>
            ))}
            <button className="ml-4 px-3 py-1.5 border-2 border-[#1a237e] rounded-lg text-xs font-semibold text-[#1a237e] flex items-center gap-1 hover:bg-[#1a237e] hover:text-white transition-all duration-300">
              <span>🇻🇳</span> <ChevronDown size={10} />
            </button>
          </div>

          <button className="lg:hidden text-[#1a237e]" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 px-4 pb-4 animate-slideInDown">
            {navItems.map((item) => (
              <button key={item.label} className={`flex items-center justify-between w-full px-2 py-3 text-sm font-semibold border-b border-gray-100 ${item.active ? 'text-red-600' : 'text-gray-700'}`}>
                {item.label}
                {item.dropdown && <ChevronDown size={14} />}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
