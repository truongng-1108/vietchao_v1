import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const navItems = [
  { label: 'Trang chủ', href: '#' },
  { label: 'Giới thiệu', href: '#' },
  { label: 'Sản phẩm', href: '#' },
  { label: 'Dự án', href: '#' },
  { label: 'Dịch vụ', href: '#' },
  { label: 'Tin tức', href: '#' },
  { label: 'Liên hệ', href: '#' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      {/* Top bar */}
      <div className="bg-slate-900 text-white text-xs py-2">
        <div className="container-wide flex items-center justify-between">
          <span className="font-medium tracking-wide">CÔNG TY CP VIỆT CHÀO</span>
          <div className="flex items-center gap-6">
            <a href="tel:0898552888" className="flex items-center gap-2 hover:text-blue-400 transition-smooth">
              <Phone size={14} />
              <span>0898 552 888</span>
            </a>
            <a href="mailto:info@vietchao.vn" className="flex items-center gap-2 hover:text-blue-400 transition-smooth">
              <Mail size={14} />
              <span>info@vietchao.vn</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="container-wide py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
            <span className="text-white font-black text-sm">VC</span>
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="font-black text-lg text-gray-900 leading-none">VIỆT CHÀO</span>
            <span className="text-xs text-gray-500 font-medium">Elevator Solutions</span>
          </div>
        </div>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="nav-link"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button className="btn-outline text-sm py-2">Đăng nhập</button>
          <button className="btn-primary text-sm py-2">Liên hệ ngay</button>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 text-gray-700 hover:text-gray-900"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white animate-slideDown">
          <div className="container-wide py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 space-y-2 border-t border-gray-100">
              <button className="w-full btn-outline text-sm py-2">Đăng nhập</button>
              <button className="w-full btn-primary text-sm py-2">Liên hệ ngay</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
