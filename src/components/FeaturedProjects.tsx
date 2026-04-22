const projects = [
  {
    name: 'Masterise Homes Bason',
    location: 'Q1, TPHCM',
    image: 'https://images.pexels.com/photos/1486785/pexels-photo-1486785.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
    specs: { quantity: '800', stops: 'Tự động' },
  },
  {
    name: 'Tiến Bộ Plaza',
    location: 'Hà Nội',
    image: 'https://images.pexels.com/photos/2310713/pexels-photo-2310713.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
    specs: { quantity: '600', stops: 'Thông minh' },
  },
  {
    name: 'Nhà ở xã hội Phường Nếnh',
    location: 'Bắc Giang',
    image: 'https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
    specs: { quantity: '44', stops: '20-21' },
  },
  {
    name: 'Đại học Công Đoàn',
    location: 'Hà Nội',
    image: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
    specs: { quantity: '16', stops: '9' },
  },
];

export default function FeaturedProjects() {
  return (
    <section className="section-spacing bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="container-wide">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-1 bg-blue-400 rounded-full" />
            <p className="text-sm font-semibold text-blue-400 tracking-wide">DỰ ÁN NỔI BẬT</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Hạng mục công trình tiêu biểu
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl">
            Các dự án mang tính biểu tượng, nơi công nghệ Việt Chào đóng góp vào sự phát triển bền vững
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, i) => (
            <div key={i} className="card-base overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-smooth group cursor-pointer">
              {/* Image */}
              <div className="relative h-40 overflow-hidden bg-gray-800">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-white mb-1 text-sm">{project.name}</h3>
                <p className="text-xs text-gray-400 mb-4">{project.location}</p>

                <div className="space-y-2 pt-3 border-t border-white/10">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400">Số lượng:</span>
                    <span className="text-white font-semibold">{project.specs.quantity}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400">Loại:</span>
                    <span className="text-white font-semibold">{project.specs.stops}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="btn-primary">
            Xem tất cả dự án
          </button>
        </div>
      </div>
    </section>
  );
}
