const partnerImages = [
  'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=400&q=80',
  'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400&q=80',
  'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400&q=80',
];

export default function Partners() {
  return (
    <section
      className="relative py-20"
      style={{
        backgroundImage: 'url(https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-[#0a1540]/75" />
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-3 tracking-wide">
          ĐỐI TÁC
        </h2>
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-2">
            <div className="w-16 h-px bg-white/40" />
            <div className="w-2 h-2 bg-red-500 rotate-45" />
            <div className="w-16 h-px bg-white/40" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-[#1a237e] p-8 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-1 h-8 bg-red-500 rounded" />
              <h3 className="text-white text-xl font-bold tracking-wide">
                SHANGHAI MITSUBISHI <span className="text-red-500 mx-2">—</span> VIỆT CHÀO
              </h3>
            </div>
            <p className="text-gray-200 text-sm leading-relaxed mb-4">
              Trải qua nhiều thử thách, mối quan hệ hợp tác chiến lược gần 20 năm giữa Shanghai Mitsubishi và Việt Chào ngày càng khăng khít. Điều gì đã khiến Việt Chào nỗ lực trở thành đại lý ủy quyền duy nhất của Shanghai Mitsubishi tại Việt Nam?
            </p>
            <a href="#" className="text-blue-300 text-sm hover:text-white transition-colors">Xem thêm &gt;&gt;</a>
          </div>

          <div className="bg-white flex items-center justify-center p-8">
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-2">
                <div className="flex flex-col">
                  <div className="w-8 h-6 bg-red-600 clip-triangle mb-1" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
                  <div className="w-8 h-6 bg-red-700 clip-triangle" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
                </div>
                <div>
                  <p className="text-gray-800 text-2xl font-bold tracking-tight leading-tight">上海三菱电梯</p>
                  <p className="text-gray-600 text-xs tracking-widest">SHANGHAI MITSUBISHI ELEVATOR</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {partnerImages.map((img, i) => (
            <div key={i} className="overflow-hidden rounded cursor-pointer group">
              <img
                src={img}
                alt={`Partner ${i + 1}`}
                className="w-full h-28 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
          <div className="bg-white flex items-center justify-center rounded p-4">
            <div className="text-center">
              <div className="text-blue-700 font-bold text-sm tracking-wide">BAI</div>
              <div className="text-[10px] text-gray-500 tracking-wider">BRIGGS AMASCO INTERNATIONAL</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
