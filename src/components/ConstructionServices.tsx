import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function ConstructionServices() {
  return (
    <section id="radovi" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 relative"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80" 
                alt="Construction works" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-[#f05a28] text-white px-4 py-2 rounded-lg inline-block font-bold text-sm mb-3">
                  Stručni tim
                </div>
                <h4 className="text-white text-2xl font-bold">Kvalitetna izvedba u dogovorenom roku</h4>
              </div>
            </div>
            {/* Decorative pattern */}
            <div className="absolute -z-10 -bottom-8 -left-8 w-64 h-64 bg-[#F1F1F1] rounded-[2rem]"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <h2 className="text-sm font-bold tracking-widest text-[#f05a28] uppercase mb-2">Usluge</h2>
            <h3 className="text-4xl md:text-5xl font-black text-[#111] mb-6">Izvođački Radovi</h3>
            <p className="text-lg text-gray-600 mb-8">
              Pored prodaje materijala, EFEN IZGRADNJA nudi profesionalne usluge izvođenja građevinskih i zanatskih radova. Naš tim stručnjaka spreman je za projekte svih veličina, od manjih adaptacija do velikih objekata.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Fasaderski radovi",
                "Dekorativni radovi",
                "Hidroizolaciski radovi",
                "Suva gradnja"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-[#f05a28] shrink-0 mr-3" />
                  <span className="text-gray-800 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <a href="#kontakt" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-white bg-[#f05a28] hover:bg-[#d94d1f] transition-all shadow-lg shadow-orange-500/30">
              Pošaljite upit za radove
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
