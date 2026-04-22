import { MapPin, Phone, Mail, Linkedin, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main footer */}
      <div className="section-spacing border-b border-gray-800">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Company */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-black text-xs">VC</span>
                </div>
                <div>
                  <p className="font-black text-white text-sm">VIỆT CHÀO</p>
                  <p className="text-xs text-gray-500">Elevator Solutions</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-gray-400">
                Hơn 20 năm cung cấp giải pháp thang máy chất lượng cao, an toàn và đáng tin cậy cho khách hàng trên khắp đất nước.
              </p>
            </div>

            {/* Solutions */}
            <div>
              <h4 className="font-bold text-white mb-6 text-sm tracking-wide">SẢN PHẨM</h4>
              <ul className="space-y-3 text-sm">
                {['Thang máy tải khách', 'Thang máy quan sát', 'Thang máy nâng hàng', 'Thang máy bệnh viện'].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-white transition-smooth">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold text-white mb-6 text-sm tracking-wide">DỊCH VỤ</h4>
              <ul className="space-y-3 text-sm">
                {['Tư vấn thiết kế', 'Lắp đặt chuyên nghiệp', 'Bảo hành & bảo trì', 'Hiện đại hóa', 'Kiểm định'].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-white transition-smooth">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-white mb-6 text-sm tracking-wide">LIÊN HỆ</h4>
              <div className="space-y-4 text-sm">
                <div className="flex gap-3">
                  <MapPin size={16} className="text-blue-400 flex-shrink-0 mt-0.5" />
                  <p>Số 29, Ngõ 165 Cầu Giấy<br />Hà Nội, Việt Nam</p>
                </div>
                <div className="flex gap-3">
                  <Phone size={16} className="text-blue-400 flex-shrink-0" />
                  <a href="tel:0898552888" className="hover:text-white transition-smooth">0898 552 888</a>
                </div>
                <div className="flex gap-3">
                  <Mail size={16} className="text-blue-400 flex-shrink-0" />
                  <a href="mailto:info@vietchao.vn" className="hover:text-white transition-smooth">info@vietchao.vn</a>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="text-sm text-gray-500">
                © 2024 Công ty CP Việt Chào. Tất cả quyền được bảo lưu.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-smooth">
                  <Facebook size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-smooth">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-smooth">
                  <Youtube size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="py-6 border-t border-gray-800">
        <div className="container-wide flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>Thiết kế bởi Việt Chào</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-300 transition-smooth">Điều khoản dịch vụ</a>
            <a href="#" className="hover:text-gray-300 transition-smooth">Chính sách riêng tư</a>
            <a href="#" className="hover:text-gray-300 transition-smooth">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
