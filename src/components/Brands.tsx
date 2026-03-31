export default function Brands() {
  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest mb-10">Brendovi koje zastupamo</p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale">
          {/* Placeholder logos */}
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="h-12 w-32 bg-gray-200 rounded animate-pulse"></div>
          ))}
        </div>
      </div>
    </section>
  );
}
