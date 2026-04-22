import { ArrowRight } from 'lucide-react';

const products = [
  {
    name: 'Thang máy tải khách',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
    description: 'Giải pháp vận chuyển hành khách cao cấp',
  },
  {
    name: 'Thang máy quan sát',
    image: 'https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
    description: 'Tạo điểm nhấn kiến trúc cho công trình',
  },
  {
    name: 'Thang máy nâng hàng',
    image: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
    description: 'Vận chuyển hàng hóa an toàn và hiệu quả',
  },
  {
    name: 'Thang máy bệnh viện',
    image: 'https://images.pexels.com/photos/668300/pexels-photo-668300.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
    description: 'Tiêu chuẩn y tế quốc tế',
  },
];

export default function Products() {
  return (
    <section className="section-spacing bg-white">
      <div className="container-wide">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-1 bg-blue-600 rounded-full" />
            <p className="text-sm font-semibold text-blue-600 tracking-wide">SẢN PHẨM</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Dòng sản phẩm đa dạng
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Từ thang máy tải khách, quan sát, nâng hàng đến thang máy bệnh viện, tất cả được tối ưu hóa cho từng ứng dụng
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <div key={i} className="card-hover group cursor-pointer rounded-2xl overflow-hidden border border-gray-100 shadow-sm-fine">
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-smooth group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-smooth" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{product.description}</p>
                <button className="flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-smooth text-sm">
                  Tìm hiểu thêm
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
