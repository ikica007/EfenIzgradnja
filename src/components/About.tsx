import { useContent } from '../hooks/useContent';

export default function About() {
  const content = useContent('about', {
    title: 'Lokalna firma od povjerenja',
    description: 'EFEN IZGRADNJA D.O.O je renomirana kompanija iz Cetinja koja uspješno spaja dva ključna segmenta građevinarstva: maloprodaju širokog asortimana građevinskog materijala i profesionalno izvođenje radova.\n\nNaš cilj je da kupcima i investitorima pružimo kompletno rješenje na jednom mjestu. Bilo da ste "uradi sam" majstor, profesionalni izvođač ili kompanija kojoj su potrebne pouzdane građevinske usluge, mi smo tu da odgovorimo na sve vaše zahtjeve uz garantovan kvalitet i poštovanje rokova.'
  });

  return (
    <section id="o-nama" className="py-24 bg-[#F1F1F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-sm border border-gray-100">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-sm font-bold tracking-widest text-[#f05a28] uppercase mb-4">O Nama</h2>
            <h3 className="text-3xl md:text-4xl font-black text-[#111] mb-8">{content.title}</h3>
            
            {content.description.split('\n').map((paragraph, index) => (
              paragraph.trim() && (
                <p key={index} className="text-lg text-gray-600 leading-relaxed mb-6 last:mb-0">
                  {paragraph}
                </p>
              )
            ))}
            
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-gray-100 pt-12">
              <div>
                <p className="text-4xl font-black text-[#f05a28]">10k+</p>
                <p className="text-sm text-gray-500 font-medium mt-1">Artikala u ponudi</p>
              </div>
              <div>
                <p className="text-4xl font-black text-[#f05a28]">100%</p>
                <p className="text-sm text-gray-500 font-medium mt-1">Posvećenost</p>
              </div>
              <div>
                <p className="text-4xl font-black text-[#f05a28]">Cetinje</p>
                <p className="text-sm text-gray-500 font-medium mt-1">Sjedište firme</p>
              </div>
              <div>
                <p className="text-4xl font-black text-[#f05a28]">24/7</p>
                <p className="text-sm text-gray-500 font-medium mt-1">Podrška klijentima</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
