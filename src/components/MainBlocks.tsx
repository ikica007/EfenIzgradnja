import { motion } from 'motion/react';
import { ShoppingCart, Hammer } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useContent } from '../hooks/useContent';

export default function MainBlocks() {
  const content = useContent('mainBlocks', {
    prodajaTitle: 'Prodaja\nMaterijala',
    prodajaDesc: 'Sve što vam je potrebno za gradnju, renoviranje i opremanje. Od temelja do krova.',
    prodajaImg: 'https://images.unsplash.com/photo-1504307651254-35680f356f12?auto=format&fit=crop&q=80',
    uslugeTitle: 'Izvođački\nRadovi',
    uslugeDesc: 'Profesionalno izvođenje građevinskih i zanatskih radova uz garanciju kvaliteta.',
    uslugeImg: 'https://images.unsplash.com/photo-1541888087425-ce81dcfa49f6?auto=format&fit=crop&q=80'
  });

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Prodaja Block */}
          <Link to="/prodaja" className="block">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-[2rem] bg-[#F1F1F1] p-10 flex flex-col h-[400px] border border-gray-200"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#f05a28]/10 rounded-full blur-3xl -mr-20 -mt-20 transition-transform group-hover:scale-150 duration-700"></div>
              
              <div className="relative z-10 flex-1">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-8 text-[#f05a28]">
                  <ShoppingCart className="w-8 h-8" />
                </div>
                <h2 className="text-4xl font-black text-[#111] mb-4 whitespace-pre-line">{content.prodajaTitle}</h2>
                <p className="text-gray-600 max-w-sm">
                  {content.prodajaDesc}
                </p>
              </div>
              
              <div className="relative z-10 flex items-center text-[#f05a28] font-bold mt-auto">
                <span>Istraži asortiman</span>
                <div className="ml-4 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:bg-[#f05a28] group-hover:text-white transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
              </div>
              
              {/* Decorative image placeholder */}
              <div className="absolute bottom-0 right-0 w-1/2 h-2/3 opacity-20 mix-blend-multiply transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${content.prodajaImg})`, backgroundSize: 'cover', backgroundPosition: 'center', maskImage: 'linear-gradient(to top, black, transparent)' }}></div>
            </motion.div>
          </Link>

          {/* Izvodjenje Block */}
          <Link to="/usluge" className="block">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-[2rem] bg-[#111] p-10 flex flex-col h-[400px]"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#f05a28]/20 rounded-full blur-3xl -mr-20 -mt-20 transition-transform group-hover:scale-150 duration-700"></div>
              
              <div className="relative z-10 flex-1">
                <div className="w-16 h-16 bg-[#222] rounded-2xl flex items-center justify-center mb-8 text-[#f05a28]">
                  <Hammer className="w-8 h-8" />
                </div>
                <h2 className="text-4xl font-black text-white mb-4 whitespace-pre-line">{content.uslugeTitle}</h2>
                <p className="text-gray-400 max-w-sm">
                  {content.uslugeDesc}
                </p>
              </div>
              
              <div className="relative z-10 flex items-center text-white font-bold mt-auto">
                <span>Saznaj više</span>
                <div className="ml-4 w-10 h-10 rounded-full bg-[#222] flex items-center justify-center group-hover:bg-[#f05a28] transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
              </div>

              {/* Decorative image placeholder */}
              <div className="absolute bottom-0 right-0 w-1/2 h-2/3 opacity-30 mix-blend-luminosity transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${content.uslugeImg})`, backgroundSize: 'cover', backgroundPosition: 'center', maskImage: 'linear-gradient(to top, black, transparent)' }}></div>
            </motion.div>
          </Link>

        </div>
      </div>
    </section>
  );
}
