import { motion } from 'motion/react';
import { PackageSearch, BadgePercent, ShieldCheck } from 'lucide-react';

const highlights = [
  {
    icon: <PackageSearch className="w-8 h-8 text-[#f05a28]" />,
    title: "Širok asortiman",
    description: "Preko 10.000 artikala za sve faze gradnje i opremanja."
  },
  {
    icon: <BadgePercent className="w-8 h-8 text-[#f05a28]" />,
    title: "Odlične cijene",
    description: "Konkurentne cijene i posebni uslovi za izvođače i firme."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-[#f05a28]" />,
    title: "Pouzdana firma",
    description: "Dugogodišnje iskustvo i povjerenje klijenata širom Crne Gore."
  }
];

export default function Highlights() {
  return (
    <section className="py-12 bg-transparent relative z-20 rounded-t-[3rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)] -mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start p-6 rounded-2xl bg-[#F1F1F1]/50 hover:bg-[#F1F1F1] transition-colors"
            >
              <div className="flex-shrink-0 bg-white p-3 rounded-xl shadow-sm">
                {item.icon}
              </div>
              <div className="ml-5">
                <h3 className="text-lg font-bold text-[#111] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
