import { useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, ChevronDown, PaintBucket, Droplets, Bath, Zap, DoorOpen, Wrench, Package } from 'lucide-react';
import { Category } from '../data/brands';
import { GlowCard } from './ui/spotlight-card';

const categoryIcons: Record<string, ReactNode> = {
  "Građevinski materijali": <Package className="w-5 h-5" />,
  "Fasadni materijali": <PaintBucket className="w-5 h-5" />,
  "Unutrašnje boje": <PaintBucket className="w-5 h-5" />,
  "Dekorativni materijali": <Droplets className="w-5 h-5" />,
  "Epoxy i industrija": <Zap className="w-5 h-5" />,
  "Hidroizolacija": <Bath className="w-5 h-5" />,
  "Hidroizolacije": <Bath className="w-5 h-5" />,
  "Suva gradnja": <DoorOpen className="w-5 h-5" />,
  "Alati i oprema": <Wrench className="w-5 h-5" />,
  "Fasaderski radovi": <PaintBucket className="w-5 h-5" />,
  "Dekorativni radovi": <Droplets className="w-5 h-5" />,
  "Hidroizolaciski radovi": <Bath className="w-5 h-5" />,
  "Hidroizolacija i podovi": <Bath className="w-5 h-5" />,
};

interface Props {
  title: string;
  subtitle: string;
  description: string;
  categories: Category[];
  bgColor?: string;
}

export default function CategorizedBrandsSection({ title, subtitle, description, categories, bgColor = "bg-white" }: Props) {
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]?.name || "");

  return (
    <section className={`py-20 ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-[#f05a28] uppercase mb-2">{subtitle}</h2>
          <h3 className="text-4xl md:text-5xl font-black text-[#111] mb-4">{title}</h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* Desktop Tabs */}
        <div className="hidden md:flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                activeCategory === cat.name
                  ? 'bg-[#f05a28] text-white shadow-md shadow-orange-500/20'
                  : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300 shadow-sm'
              }`}
            >
              <span className={`${activeCategory === cat.name ? 'text-white' : 'text-[#f05a28]'}`}>
                {categoryIcons[cat.name]}
              </span>
              {cat.name}
            </button>
          ))}
        </div>

        {/* Mobile Dropdown */}
        <div className="md:hidden mb-12 relative">
          <select
            value={activeCategory}
            onChange={(e) => setActiveCategory(e.target.value)}
            className="w-full appearance-none bg-gray-100 border-2 border-gray-200 text-[#111] font-bold py-4 px-6 rounded-2xl focus:outline-none focus:border-[#f05a28] transition-colors"
          >
            {categories.map((cat) => (
              <option key={cat.name} value={cat.name}>
                {cat.name}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
        </div>

        {/* Brands Grid */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            {categories.map((cat) => (
              cat.name === activeCategory && (
                <motion.div
                  key={cat.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {cat.brands.map((brand, idx) => (
                    <GlowCard key={idx} glowColor="orange" customSize={true} className="h-full">
                      <a
                        href={brand.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group p-8 flex flex-col h-full relative z-10"
                      >
                        <div className="h-24 flex items-center justify-center mb-6 p-4 bg-gray-50/50 rounded-2xl">
                          <img 
                            src={brand.logo} 
                            alt={`${brand.name} logo`} 
                            className={`max-h-full max-w-full object-contain mix-blend-multiply ${brand.name === 'Ceresit' ? 'scale-[1.5]' : ''}`}
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div className="flex-1 flex flex-col">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="text-xl font-bold text-gray-900 group-hover:text-[#f05a28] transition-colors">{brand.name}</h4>
                            <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-[#f05a28] transition-colors" />
                          </div>
                          <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                            {brand.description}
                          </p>
                          <span className="text-sm font-bold text-[#f05a28] opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 inline-block">
                            Saznaj više &rarr;
                          </span>
                        </div>
                      </a>
                    </GlowCard>
                  ))}
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
