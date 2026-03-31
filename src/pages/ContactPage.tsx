import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import ContactMap from '../components/ContactMap';
import { useContent } from '../hooks/useContent';

export default function ContactPage() {
  const content = useContent('contact', {
    address: 'Bul. Crnogorskih Junaka br. 100, 81250 Cetinje, Crna Gora',
    phone: '069 170 627',
    email: 'info@efenizgradnja.me'
  });

  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black text-[#111] mb-4">Kontaktirajte nas</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Tu smo za sva vaša pitanja. Kontaktirajte nas putem telefona, emaila ili nas posjetite na našoj lokaciji.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-8">Naše kontakt informacije</h2>
          
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="bg-orange-50 p-4 rounded-full mr-6">
                <MapPin className="w-8 h-8 text-[#f05a28]" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">Adresa</h3>
                <p className="text-gray-600 text-lg">{content.address}</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-orange-50 p-4 rounded-full mr-6">
                <Phone className="w-8 h-8 text-[#f05a28]" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">Telefon</h3>
                <p className="text-gray-600 text-lg">{content.phone}</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-orange-50 p-4 rounded-full mr-6">
                <Mail className="w-8 h-8 text-[#f05a28]" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">Email</h3>
                <a href={`mailto:${content.email}`} className="text-gray-600 text-lg hover:text-[#f05a28] transition-colors">{content.email}</a>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <a href={`mailto:${content.email}`} className="inline-flex items-center justify-center px-6 py-3 text-base font-bold rounded-full text-white bg-[#f05a28] hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/30">
              <Mail className="w-5 h-5 mr-2" />
              Pošaljite nam email
            </a>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-100">
            <h3 className="text-lg font-bold mb-4">Radno vrijeme</h3>
            <div className="flex justify-between text-gray-600 mb-2">
              <span>Ponedjeljak - Petak:</span>
              <span className="font-medium">07:00 - 16:00</span>
            </div>
            <div className="flex justify-between text-gray-600 mb-2">
              <span>Subota:</span>
              <span className="font-medium">07:00 - 14:00</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Nedjelja:</span>
              <span className="font-medium text-[#f05a28]">Zatvoreno</span>
            </div>
          </div>
        </div>

        <div className="h-[500px] lg:h-auto rounded-3xl overflow-hidden border border-gray-200 shadow-sm">
          <ContactMap address={content.address} />
        </div>
      </div>
    </div>
  );
}
