import Header from '@/components/Header';
import HeroSlider from '@/components/HeroSlider';
import ScrollStorySection from '@/components/ScrollStorySection';
import WhyChoose from '@/components/WhyChoose';
import Partners from '@/components/Partners';
import Clients from '@/components/Clients';
import Products from '@/components/Products';
import FeaturedProjects from '@/components/FeaturedProjects';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-[108px]">
        <HeroSlider />
        <ScrollStorySection />
        <WhyChoose />
        <Partners />
        <Clients />
        <Products />
        <FeaturedProjects />
        <Footer />
      </div>
      <FloatingButtons />
    </div>
  );
}

export default App;
