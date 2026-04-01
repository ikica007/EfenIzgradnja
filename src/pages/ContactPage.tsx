import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#111] text-gray-300 py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* O nama */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-[#f05a28] rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-xl">E</span>
              </div>
              <span className="text-2xl font-black text-white tracking-tight">
                EFEN <span className="text-[#f05a28]">IZGRADNJA</span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Vaš pouzdan partner za sve vrste građevinskih i završnih radova. Kvalitet, stručnost i poštovanje rokova su naš zaštitni znak.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#f05a28] hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#f05a28] hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#f05a28] hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Brzi linkovi */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Brzi Linkovi</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-[#f05a28] transition-colors">Početna</Link></li>
              <li><Link to="/o-nama" className="hover:text-[#f05a28] transition-colors">O Nama</Link></li>
              <li><Link to="/usluge" className="hover:text-[#f05a28] transition-colors">Usluge</Link></li>
              <li><Link to="/projekti" className="hover:text-[#f05a28] transition-colors">Projekti</Link></li>
              <li><Link to="/kontakt" className="hover:text-[#f05a28] transition-colors">Kontakt</Link></li>
            </ul>
          </div>

          {/* Usluge */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Naše Usluge</h4>
            <ul className="space-y-3">
              <li className="hover:text-[#f05a28] transition-colors cursor-pointer">Fasaderski radovi</li>
              <li className="hover:text-[#f05a28] transition-colors cursor-pointer">Dekorativni radovi</li>
              <li className="hover:text-[#f05a28] transition-colors cursor-pointer">Hidroizolacija</li>
              <li className="hover:text-[#f05a28] transition-colors cursor-pointer">Suva gradnja</li>
              <li className="hover:text-[#f05a28] transition-colors cursor-pointer">Prodaja materijala</li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Kontakt Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#f05a28] shrink-0 mt-1" />
                <span>Bulevar Pera Ćetkovića 115, Podgorica, Crna Gora</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#f05a28] shrink-0" />
                <span>+382 69 123 456</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#f05a28] shrink-0" />
                <span>efenizgradnja@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#f05a28] shrink-0 mt-1" />
                <div>
                  <p>Pon - Sub: 07:00 - 16:00</p>
                  <p className="text-gray-500 text-sm">Nedjelja: Zatvoreno</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Efen Izgradnja d.o.o. Sva prava zadržana.</p>
        </div>
      </div>
    </footer>
  );
}
