import { Shield, Cpu, HeartHandshake, PiggyBank } from 'lucide-react';

const stats = [
  { number: '350+', label: 'Công Trình' },
  { number: '20+', label: 'Năm Kinh Nghiệm' },
  { number: '60+', label: 'Tỉnh Thành Lắp Đặt' },
  { number: '10000+', label: 'Sản Phẩm Đã Bán' },
];

const features = [
  {
    icon: Shield,
    title: 'AN TOÀN VƯỢT TRỘI',
    desc: 'Việt Chào luôn cập nhật và áp dụng các tiêu chí an toàn cao nhất cho mọi sản phẩm theo TC quy định...',
  },
  {
    icon: Cpu,
    title: 'CÔNG NGHỆ HIỆN ĐẠI',
    desc: 'Việt Chào luôn tiên phong trong việc ứng dụng các kỹ thuật và công nghệ tiên tiến trên thế giới...',
  },
  {
    icon: HeartHandshake,
    title: 'DỊCH VỤ TẬN TÂM',
    desc: 'Dịch vụ bảo hành-bảo trì nhanh chóng, nhiệt tình 24/7, ứng dụng công nghệ tự động báo lỗi qua tin nhắn...',
  },
  {
    icon: PiggyBank,
    title: 'TIẾT KIỆM NGÂN SÁCH',
    desc: 'Việt Chào sẽ tư vấn tận tâm để giúp quý khách tối ưu chi phí thiết bị cùng như nhân công, nhưng vẫn chú trọng tính an toàn, hiệu quả.',
  },
];

export default function WhyChoose() {
  return (
    <section
      className="relative py-20"
      style={{
        backgroundImage: 'url(https://images.pexels.com/photos/1486785/pexels-photo-1486785.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-[#0a1540]/80" />
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-3 tracking-wide">
          TẠI SAO BẠN NÊN CHỌN VIỆT CHÀO ?
        </h2>
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-2">
            <div className="w-16 h-px bg-white/40" />
            <div className="w-2 h-2 bg-red-500 rotate-45" />
            <div className="w-16 h-px bg-white/40" />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-white text-4xl md:text-5xl font-bold mb-1">{stat.number}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {features.map((f) => (
            <div key={f.title} className="flex flex-col items-center text-center">
              <div className="relative mb-4">
                <div className="w-24 h-24 rounded-full border-4 border-white/20 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-[#1a237e] flex items-center justify-center shadow-lg">
                    <f.icon size={34} className="text-white" />
                  </div>
                </div>
              </div>
              <h3 className="text-white font-bold text-sm mb-2 tracking-wide">{f.title}</h3>
              <p className="text-gray-300 text-xs leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
