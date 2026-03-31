import CategorizedBrandsSection from '../components/CategorizedBrandsSection';
import { prodajaKategorije } from '../data/brands';

export default function ShopPage() {
  return (
    <div className="pt-24 pb-12 min-h-screen bg-[#F1F1F1]">
      <CategorizedBrandsSection 
        title="Prodaja Materijala"
        subtitle="Prodavnica"
        description="Sve što vam je potrebno za gradnju, renoviranje i opremanje. Odaberite kategoriju da vidite naše partnere."
        categories={prodajaKategorije}
        bgColor="bg-white rounded-[3rem] mx-4 sm:mx-6 lg:mx-8 shadow-sm border border-gray-100"
      />
    </div>
  );
}
