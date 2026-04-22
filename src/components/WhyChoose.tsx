import { Shield, Zap, Users, TrendingUp } from 'lucide-react';

const stats = [
  { value: '350+', label: 'Dự án hoàn thành' },
  { value: '20+', label: 'Năm kinh nghiệm' },
  { value: '60+', label: 'Tỉnh thành phục vụ' },
  { value: '10,000+', label: 'Sản phẩm lắp đặt' },
];

const features = [
  {
    icon: Shield,
    title: 'An toàn vượt trội',
    description: 'Tuân thủ tiêu chuẩn quốc tế, kiểm định định kỳ, bảo trì chuyên nghiệp',
  },
  {
    icon: Zap,
    title: 'Công nghệ hiện đại',
    description: 'Hệ thống điều khiển thông minh, tiết kiệm năng lượng tối ưu',
  },
  {
    icon: Users,
    title: 'Hỗ trợ 24/7',
    description: 'Đội ngũ kỹ thuật chuyên nghiệp, bảo hành toàn diện',
  },
  {
    icon: TrendingUp,
    title: 'Giá trị tối ưu',
    description: 'Tư vấn giải pháp phù hợp, chi phí cạnh tranh',
  },
];

export default function WhyChoose() {
  return (
    <section className="section-spacing bg-gradient-to-b from-white to-slate-50">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-600 tracking-wide mb-3">
            TẠI SAO CHỌN VIỆT CHÀO
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Hơn hai thập kỷ dẫn đầu ngành
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Với kinh nghiệm phong phú, công nghệ tiên tiến, và đội ngũ chuyên nghiệp, chúng tôi cam kết mang đến giải pháp thang máy tốt nhất
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white rounded-xl p-8 shadow-sm-fine border border-gray-100 text-center hover:shadow-md-fine transition-smooth">
              <div className="text-4xl font-black text-blue-600 mb-2">{stat.value}</div>
              <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div key={i} className="card-base p-8 border border-gray-100 shadow-sm-fine hover:shadow-md-fine transition-smooth">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-5">
                  <Icon size={24} className="text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
