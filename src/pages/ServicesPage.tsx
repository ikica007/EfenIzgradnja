import ConstructionServices from '../components/ConstructionServices';
import CategorizedBrandsSection from '../components/CategorizedBrandsSection';
import { izvodjenjeKategorije } from '../data/brands';

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-12 min-h-screen bg-white">
      <ConstructionServices />
      <CategorizedBrandsSection 
        title="Materijali koje koristimo"
        subtitle="Naši Partneri"
        description="Za izvođenje radova koristimo isključivo provjerene materijale najpoznatijih svjetskih i regionalnih brendova."
        categories={izvodjenjeKategorije}
        bgColor="bg-[#F1F1F1] rounded-[3rem] mx-4 sm:mx-6 lg:mx-8 shadow-sm border border-gray-100 mt-12"
      />
    </div>
  );
}
