export default function Partners() {
  return (
    <section className="section-spacing bg-white">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-600 tracking-wide mb-3">
            ĐỐI TÁC CHIẾN LƯỢC
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Shanghai Mitsubishi - Việt Chào
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hơn 20 năm hợp tác chiến lược, mang công nghệ thang máy hàng đầu thế giới tới Việt Nam
          </p>
        </div>

        {/* Partnership content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="bg-blue-600 rounded-2xl p-8 text-white shadow-lg-fine">
              <h3 className="text-2xl font-black mb-4">Shanghai Mitsubishi</h3>
              <p className="text-blue-100 leading-relaxed mb-6">
                Shanghai Mitsubishi Elevator, một trong những công ty thang máy hàng đầu thế giới, đã chọn Việt Chào là đại lý ủy quyền duy nhất tại Việt Nam.
              </p>
              <p className="text-blue-100 leading-relaxed">
                Sự tin tưởng này là kết quả của sự tận tâm, chuyên nghiệp, và cam kết mang giá trị tốt nhất tới khách hàng.
              </p>
              <button className="mt-6 btn-outline border-white text-white hover:bg-white/10">
                Tìm hiểu thêm
              </button>
            </div>
          </div>

          {/* Logo */}
          <div className="flex items-center justify-center">
            <div className="bg-white rounded-2xl p-12 shadow-lg-fine border border-gray-200">
              <div className="flex flex-col items-center gap-3 mb-6">
                <div className="flex gap-2">
                  <div className="w-6 h-8 bg-red-600 rounded-sm" />
                  <div className="w-6 h-8 bg-red-600 rounded-sm -ml-3" />
                </div>
              </div>
              <p className="text-2xl font-black text-gray-900 text-center mb-2">
                上海三菱电梯
              </p>
              <p className="text-xs text-center text-gray-600 font-medium tracking-wide">
                SHANGHAI MITSUBISHI ELEVATOR
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
