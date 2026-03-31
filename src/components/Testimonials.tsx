import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const reviews = [
  {
    text: "Veliki izbor proizvoda na jednom mjestu. Sve što mi je trebalo za renoviranje stana sam našao kod njih.",
    author: "Marko P.",
    role: "Kupac"
  },
  {
    text: "Odlične cijene i veoma uslužno osoblje. Kao izvođač radova, redovno sarađujem sa njima i prezadovoljan sam.",
    author: "Nikola V.",
    role: "Preduzetnik"
  },
  {
    text: "Najbolja firma na Cetinju za građevinski materijal. Brza isporuka i vrhunski kvalitet.",
    author: "Jovan R.",
    role: "Kupac"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-transparent text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-[#f05a28] uppercase mb-2">Iskustva</h2>
          <h3 className="text-4xl md:text-5xl font-black">Šta kažu naši klijenti</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#222] p-8 rounded-3xl relative"
            >
              <div className="flex text-[#f05a28] mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-gray-300 text-lg mb-8 italic">"{review.text}"</p>
              <div>
                <p className="font-bold text-white">{review.author}</p>
                <p className="text-sm text-gray-500">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
