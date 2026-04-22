export default function Clients() {
  const clients = [
    { name: 'CDX Hà Đông', initials: 'CD' },
    { name: 'Creditinfo', initials: 'CI' },
    { name: 'Bệnh viện Phụ Thoa', initials: 'BP' },
    { name: 'Điện lực EVN', initials: 'EV' },
  ];

  return (
    <section className="section-spacing bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-400 tracking-wide mb-3">
            KHÁCH HÀNG TIN TƯỞNG
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Hàng nghìn khách hàng hạnh phúc
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Từ các tập đoàn lớn đến các công trình dân cư, tất cả đều tin tưởng Việt Chào
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {clients.map((client, i) => (
            <div key={i} className="aspect-square rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 flex flex-col items-center justify-center hover:bg-white/10 transition-smooth group cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:shadow-lg transition-smooth">
                <span className="text-2xl font-black text-white">{client.initials}</span>
              </div>
              <p className="text-sm font-medium text-white text-center">{client.name}</p>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-12 text-center">
          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto mb-6">
            "Việt Chào không chỉ là nhà cung cấp thang máy, mà là đối tác chiến lược trong sự phát triển của chúng tôi"
          </p>
          <p className="text-sm font-semibold text-gray-400">Tập đoàn Bất động sản hàng đầu</p>
        </div>
      </div>
    </section>
  );
}
