export default function ContactMap({ address }: { address?: string }) {
  // Using a more specific and reliable query for Google Maps to resolve the location in Cetinje
  const searchQuery = "Bulevar Crnogorskih Junaka 100, Cetinje, Montenegro";
  const encodedAddress = encodeURIComponent(searchQuery);
  const mapUrl = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="w-full h-full bg-gray-100 rounded-xl overflow-hidden relative">
      <iframe
        title="Lokacija EFEN IZGRADNJA D.O.O."
        src={mapUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0 w-full h-full"
      ></iframe>
    </div>
  );
}
