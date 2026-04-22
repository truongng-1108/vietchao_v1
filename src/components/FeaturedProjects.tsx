const projects = [
  {
    name: 'MASTERISE HOMES BASON, Q1, HCM',
    image: 'https://images.pexels.com/photos/1486785/pexels-photo-1486785.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
    type: 'Bãn tự động',
    model: 'PSH - XIZI',
    quantity: '800',
    stops: '',
    capacity: '',
  },
  {
    name: 'TIẾN BỘ PLAZA, HN',
    image: 'https://images.pexels.com/photos/2310713/pexels-photo-2310713.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
    type: 'Bãn tự động',
    model: 'PSH - XIZI',
    quantity: '600',
    stops: '',
    capacity: '',
  },
  {
    name: 'NHÀ Ở XÃ HỘI PHƯỜNG NẾNH, BẮC GIANG',
    image: 'https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
    type: 'Thang Shanghai Mitsubishi',
    model: 'SMEC LEHY-III-S (F); SMEC LEHY-III-S',
    quantity: '44',
    stops: '20-21 (điểm)',
    capacity: '1050',
  },
  {
    name: 'ĐẠI HỌC CÔNG ĐOÀN (CƠ SỞ 1)',
    image: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
    type: 'Thang Shanghai Mitsubishi',
    model: 'SMEC LEHY-III-S',
    quantity: '16',
    stops: '9 (điểm)',
    capacity: '1050-1350',
  },
];

export default function FeaturedProjects() {
  return (
    <section className="bg-[#1a237e] py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-48 flex-shrink-0 flex flex-col justify-center">
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-4 leading-tight">
              DỰ ÁN NỔI BẬT
            </h2>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-px bg-white/40" />
              <div className="w-1.5 h-1.5 bg-red-500 rotate-45" />
            </div>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              Các dự án tiêu biểu đã được triển khai trên cả nước
            </p>
            <a href="#" className="text-white text-sm font-semibold border-b border-white/40 pb-0.5 hover:text-gray-200 transition-colors inline-block">
              Xem tất cả dự án
            </a>
          </div>

          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4">
            {projects.map((project) => (
              <div key={project.name} className="bg-white/5 hover:bg-white/10 transition-colors rounded overflow-hidden cursor-pointer group">
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-3">
                  <h4 className="text-white text-xs font-bold uppercase mb-2 leading-tight">{project.name}</h4>
                  <div className="space-y-0.5 text-[11px] text-gray-300">
                    <p><span className="font-semibold text-gray-200">Chủng loại:</span> {project.type}</p>
                    <p><span className="font-semibold text-gray-200">Model:</span> {project.model}</p>
                    <p><span className="font-semibold text-gray-200">Số lượng:</span> {project.quantity}</p>
                    <p><span className="font-semibold text-gray-200">Số điểm dừng:</span> {project.stops} (điểm)</p>
                    <p><span className="font-semibold text-gray-200">Tải trọng:</span> {project.capacity} {project.capacity && '(kg)'}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
