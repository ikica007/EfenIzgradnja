import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactMap from './ContactMap';
import { useContent } from '../hooks/useContent';

export default function Footer() {
    const address = 'Bulevar Crnogorskih Junaka 100, Cetinje, Crna Gora';
    const phone = '069 170 627';
    const email = 'efencolor@gmail.com';

  return (
    <footer className="relative z-10 bg-[#111] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          <div>
            <div className="mb-6 bg-white inline-block p-4 rounded-xl">
              <div className="relative overflow-hidden w-[180px] aspect-[1280/295]">
                <img 
                  src="/Photoroom_20260326_102910.png" 
                  alt="EFEN IZGRADNJA" 
                  className="absolute top-0 left-0 w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Sve za gradnju na jednom mjestu. Prodaja materijala i izvođenje radova.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://www.instagram.com/efenizgradnja?igsh=MTJtYW8yeWNiNzBkOA==" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#f05a28] transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://www.facebook.com/share/1DvkS688mN/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#f05a28] transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href={`mailto:${email}`} className="text-gray-400 hover:text-[#f05a28] transition-colors" title="Pošaljite nam email">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Kontakt</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-[#f05a28] mr-3 shrink-0 mt-0.5" />
                <span className="text-gray-300">{address}</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-[#f05a28] mr-3 shrink-0" />
                <span className="text-gray-300">{phone}</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-[#f05a28] mr-3 shrink-0" />
                <a href={`mailto:${email}`} className="text-gray-300 hover:text-white transition-colors">{email}</a>
              </li>
            </ul>

            <h4 className="text-lg font-bold mt-8 mb-4">Radno vrijeme</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex justify-between">
                <span>Ponedeljak - Subota:</span>
                <span className="font-medium text-white">7.30h - 20h</span>
              </li>
              <li className="flex justify-between">
                <span>Nedelja:</span>
                <span className="font-medium text-[#f05a28]">Zatvoreno</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Lokacija</h4>
            <div className="h-48 rounded-xl overflow-hidden">
              <ContactMap address={address} />
            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} EFEN IZGRADNJA D.O.O. Sva prava zadržana.
          </p>
          <div className="flex space-x-4 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Uslovi korišćenja</a>
            <a href="#" className="hover:text-white transition-colors">Politika privatnosti</a>
          </div>
        </div>

        {/* Company Wall Certificate */}
        <div className="mt-16 pt-12 border-t border-gray-800/50 flex flex-col items-center justify-center">
          <div className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-[#f05a28]/10 border border-[#f05a28]/20 mb-8">
            <span className="text-[#f05a28] text-xs md:text-sm uppercase tracking-[0.2em] font-bold text-center">
              Ponosni nosilac sertifikata bonitetne izvrsnosti
            </span>
          </div>
          
          <div className="relative w-full max-w-[380px] md:max-w-[500px] lg:max-w-[600px] rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(240,90,40,0.15)] border border-[#f05a28]/30 bg-white group transition-all duration-500 hover:shadow-[0_0_50px_rgba(240,90,40,0.3)] hover:-translate-y-2">
            <img 
              src="/certificate/IMG_6359.jpg" 
              alt="Company Wall Sertifikat" 
              className="w-full h-auto object-contain"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl pointer-events-none"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
