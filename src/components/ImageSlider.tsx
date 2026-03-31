import React from 'react';

// Ovdje možete dodati ili izmijeniti putanje do vaših slika
// Kada ubacite slike u public/slider folder, samo promijenite ova imena
// Na primjer: '/slider/slika1.jpg', '/slider/slika2.jpg' itd.
const sliderImages = [
  '/slider/IMG_6352.jpg',
  '/slider/IMG_6354.jpg',
  '/slider/IMG_6355.jpg',
  '/slider/IMG_6356.jpg',
  '/slider/IMG_6357.jpg',
  '/slider/IMG_6358.jpg',
  '/slider/IMG_6360.jpg',
  '/slider/IMG_6361.jpg',
  '/slider/IMG_6362.jpg',
];

export default function ImageSlider() {
  return (
    <div className="w-full overflow-hidden bg-white/50 backdrop-blur-sm py-16 border-y border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <h3 className="text-3xl font-black text-gray-900 tracking-tight">Galerija</h3>
        <p className="text-gray-500 mt-3 text-lg">Kvalitet koji traje, materijali kojima vjerujete.</p>
      </div>
      
      <div className="relative w-full flex overflow-hidden group">
        {/* Prvi set slika */}
        <div className="flex animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
          {sliderImages.map((src, index) => (
            <div key={`slider-1-${index}`} className="mx-4 w-[280px] h-[200px] md:w-[400px] md:h-[280px] shrink-0 rounded-2xl overflow-hidden shadow-lg border border-gray-100 relative">
              <img 
                src={src} 
                alt={`Slajd ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-colors duration-500"></div>
            </div>
          ))}
        </div>
        
        {/* Drugi set slika (za beskonačan loop) */}
        <div className="flex animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]" aria-hidden="true">
          {sliderImages.map((src, index) => (
            <div key={`slider-2-${index}`} className="mx-4 w-[280px] h-[200px] md:w-[400px] md:h-[280px] shrink-0 rounded-2xl overflow-hidden shadow-lg border border-gray-100 relative">
              <img 
                src={src} 
                alt={`Slajd ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-colors duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
