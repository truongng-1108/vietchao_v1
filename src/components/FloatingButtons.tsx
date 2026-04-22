import { Phone } from 'lucide-react';

export default function FloatingButtons() {
  return (
    <a
      href="tel:0898552888"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center text-white shadow-lg-fine transition-smooth"
    >
      <Phone size={24} />
    </a>
  );
}
