import { motion } from 'motion/react';

const logos = [
  '/1664265346_1.png',
  '/Ceresit.webp',
  '/Chromos-Logotype-Primary-RGB.svg',
  '/Photoroom_20260325_114545.png',
  '/Photoroom_20260325_115619.png',
  '/Photoroom_20260325_115704.png',
  '/Photoroom_20260325_115801.png',
  '/Photoroom_20260325_115827.png',
  '/Photoroom_20260325_115857.png',
  '/Photoroom_20260325_115932.png',
  '/Photoroom_20260325_120047.png',
  '/Photoroom_20260325_120117.png',
  '/unnamed.png'
];

export default function OtherBrands() {
  return (
    <section className="py-16 bg-white rounded-[3rem] shadow-sm border border-gray-100 mt-12 mx-4 sm:mx-6 lg:mx-8 mb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold tracking-widest text-[#f05a28] uppercase mb-2">Naši Partneri</h2>
          <h3 className="text-3xl md:text-4xl font-black text-[#111]">Brendovi koje zastupamo</h3>
          <p className="mt-4 text-gray-600">
            Ponosni smo distributeri najpoznatijih regionalnih i svjetskih brendova.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 items-center justify-items-center">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="w-full flex items-center justify-center p-6 bg-[#F8F8F8] rounded-2xl border border-gray-100 hover:border-[#f05a28]/30 hover:shadow-md transition-all duration-300 h-32"
            >
              <img 
                src={logo} 
                alt={`Brand logo ${index + 1}`} 
                className="max-h-full max-w-full object-contain mix-blend-multiply"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
