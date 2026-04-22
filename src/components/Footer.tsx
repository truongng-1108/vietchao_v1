import { MapPin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0d1657] text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <span className="text-white font-black text-2xl tracking-widest">VIET CHAO</span>
              <p className="text-[#8fa0d8] text-[10px] tracking-widest">THE BEST CHOICE FOR BUILDINGS</p>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed">
              Công ty CP Việt Chào chuyên cung cấp và lắp đặt thang máy, thang cuốn, bãi đỗ xe tự động với chất lượng hàng đầu.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider border-b border-white/10 pb-2">Liên Hệ</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li className="flex items-start gap-2">
                <MapPin size={13} className="mt-0.5 text-red-400 flex-shrink-0" />
                <span>Số 29, Ngõ 165 Cầu Giấy, Phường Dịch Vọng Hậu, Quận Cầu Giấy, Hà Nội</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={13} className="text-red-400 flex-shrink-0" />
                <span>0898 552 888</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={13} className="text-red-400 flex-shrink-0" />
                <span>info@vietchao.vn</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider border-b border-white/10 pb-2">Sản Phẩm</h4>
            <ul className="space-y-1.5 text-xs text-gray-400">
              {['Thang máy tải khách', 'Thang máy quan sát', 'Thang máy nâng hàng', 'Thang máy bệnh viện', 'Thang cuốn', 'Bãi đỗ xe tự động'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors hover:pl-1 transition-all">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider border-b border-white/10 pb-2">Dịch Vụ</h4>
            <ul className="space-y-1.5 text-xs text-gray-400">
              {['Tư vấn lắp đặt', 'Bảo hành bảo trì', 'Sửa chữa thang máy', 'Hiện đại hóa thang máy', 'Kiểm định thang máy'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-4">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-gray-500 text-xs">
            © 2024 Công ty CP Việt Chào. Tất cả quyền được bảo lưu.
          </p>
          <p className="text-gray-500 text-xs">
            Thiết kế bởi <span className="text-blue-400">Việt Chào</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
