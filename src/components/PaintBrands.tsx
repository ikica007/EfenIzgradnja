import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

const brands = [
  {
    name: 'Bekament',
    logo: '/bekament.png',
    description: 'Vodeći regionalni proizvođač materijala za završne radove u građevinarstvu. Nudi širok asortiman boja, fasada, ljepila i maltera vrhunskog kvaliteta.',
    url: 'https://www.bekament.com/'
  },
  {
    name: 'EkoLak',
    logo: '/ekolak.png',
    description: 'Prepoznatljiv brend po visokokvalitetnim premazima za drvo i metal, kao i bojama za unutrašnje i spoljašnje zidove.',
    url: 'https://ekolak.rs/'
  },
  {
    name: 'Helios',
    logo: '/helios.png',
    description: 'Evropski proizvođač boja, lakova i premaza sa dugom tradicijom. Inovativna rješenja za zaštitu i dekoraciju svih vrsta površina.',
    url: 'https://www.helios-deco.com/'
  },
  {
    name: 'Maxima',
    logo: '/maxima.jpg',
    description: 'Kvalitetne boje i fasade koje prate svjetske trendove. Pouzdana rješenja za profesionalce i majstore koji traže dugotrajnost.',
    url: 'https://www.maximapaints.com/'
  },
  {
    name: 'Vitex',
    logo: '/Vitex.png',
    description: 'Grčki lider u proizvodnji boja sa vrhunskim ekološkim standardima. Nudi premium boje za enterijer i eksterijer sa dugotrajnom zaštitom.',
    url: 'https://www.vitex.gr/'
  }
];

export default function PaintBrands() {
  return (
    <section id="boje-i-fasade" className="py-16 bg-white rounded-[3rem] shadow-sm border border-gray-100 mt-12 mx-4 sm:mx-6 lg:mx-8 mb-12">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold tracking-widest text-[#f05a28] uppercase mb-2">Izdvajamo iz ponude</h2>
          <h3 className="text-3xl md:text-4xl font-black text-[#111]">Boje i fasade</h3>
          <p className="mt-4 text-gray-600">
            Ponosni smo distributeri najpoznatijih regionalnih i svjetskih brendova boja i fasada. Kliknite na logo brenda da pogledate njihov kompletan asortiman.
          </p>
        </div>

        <div className="flex flex-col space-y-8">
          {brands.map((brand, index) => (
            <motion.a
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group flex flex-col sm:flex-row items-center bg-[#F8F8F8] rounded-3xl p-6 sm:p-8 border border-gray-100 hover:border-[#f05a28]/30 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
            >
              <div className="w-full sm:w-1/3 flex items-center justify-center mb-6 sm:mb-0 sm:mr-8 bg-white p-6 rounded-2xl shadow-sm group-hover:shadow-md transition-shadow">
                <img 
                  src={brand.logo} 
                  alt={`${brand.name} logo`} 
                  className="max-h-24 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="w-full sm:w-2/3 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start mb-2">
                  <h4 className="text-2xl font-bold text-gray-900 group-hover:text-[#f05a28] transition-colors">{brand.name}</h4>
                  <ExternalLink className="w-5 h-5 ml-2 text-gray-400 group-hover:text-[#f05a28] transition-colors opacity-0 group-hover:opacity-100" />
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {brand.description}
                </p>
                <span className="inline-block mt-4 text-sm font-bold text-[#f05a28] opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                  Posjetite sajt brenda &rarr;
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
