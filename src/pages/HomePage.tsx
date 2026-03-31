import Highlights from '../components/Highlights';
import CategorizedBrandsSection from '../components/CategorizedBrandsSection';
import Testimonials from '../components/Testimonials';
import ImageSlider from '../components/ImageSlider';
import { prodajaKategorije, izvodjenjeKategorije } from '../data/brands';
import ShaderBackground from '../components/ui/shader-background';
import HeroSection from '../components/ui/hero-section';

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      {/* Global background for the entire home page */}
      <div className="fixed inset-0 z-0">
        <ShaderBackground />
        <div className="absolute inset-0 bg-white/10"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <HeroSection />
        
        <div className="bg-white/80 backdrop-blur-xl">
          <Highlights />
          
          <ImageSlider />
          
          <CategorizedBrandsSection 
            title="Prodaja Materijala"
            subtitle="Prodavnica"
            description="Sve što vam je potrebno za gradnju, renoviranje i opremanje. Od temelja do krova."
            categories={prodajaKategorije}
            bgColor="bg-transparent"
          />
          <CategorizedBrandsSection 
            title="Izvođački Radovi"
            subtitle="Usluge"
            description="Profesionalno izvođenje građevinskih i zanatskih radova uz garanciju kvaliteta."
            categories={izvodjenjeKategorije}
            bgColor="bg-transparent"
          />
        </div>
        
        <Testimonials />
      </div>
    </div>
  );
}
