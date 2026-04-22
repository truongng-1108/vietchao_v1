const clients = [
  { name: 'CDXDV01', color: '#f5c518', textColor: '#333' },
  { name: 'CiCB CreditInfo', color: '#e8f4fd', textColor: '#1a56db' },
  { name: 'PHU THO GENERAL HOSPITAL', color: '#edf6ff', textColor: '#1e40af' },
  { name: 'EVN', color: '#eff6ff', textColor: '#1e3a8a' },
];

function HexagonLogo({ client }: { client: typeof clients[0] }) {
  return (
    <div className="flex flex-col items-center">
      <div
        className="relative flex items-center justify-center"
        style={{
          width: 130,
          height: 150,
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          backgroundColor: 'white',
        }}
      >
        <span
          className="text-xs font-bold text-center px-3 leading-tight"
          style={{ color: client.textColor, maxWidth: 100 }}
        >
          {client.name}
        </span>
      </div>
    </div>
  );
}

export default function Clients() {
  return (
    <section
      className="relative py-20"
      style={{
        backgroundImage: 'url(https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-[#1a237e]/85" />
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-3 tracking-wide">
          KHÁCH HÀNG
        </h2>
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-2">
            <div className="w-16 h-px bg-white/40" />
            <div className="w-2 h-2 bg-red-500 rotate-45" />
            <div className="w-16 h-px bg-white/40" />
          </div>
        </div>

        <p className="text-gray-200 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-12">
          Chúng tôi tự hào và vinh dự được các chủ đầu tư lớn và uy tín trong cả nước lựa chọn là nhà thầu cung cấp và lắp đặt các sản phẩm thang máy, thang cuốn, bãi đỗ xe tự động, BMUs...
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {clients.map((client) => (
            <HexagonLogo key={client.name} client={client} />
          ))}
        </div>
      </div>
    </section>
  );
}
