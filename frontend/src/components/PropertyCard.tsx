
import Image from "next/image";
import { MapPin, Bed, Bath, Maximize } from "lucide-react";

interface Property {
    id: string;
    title: string;
    price: number;
    location: { city: string; address: string };
    features: { bedrooms?: number; bathrooms?: number; area: number };
    images: string[];
    type: string;
}

export default function PropertyCard({ property, lang }: { property: Property; lang: string }) {
    const isRTL = lang === 'ar';

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition overflow-hidden group">
            <div className="relative h-64 w-full overflow-hidden">
                <Image
                    src={property.images[0]}
                    alt={property.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-emerald-800 uppercase tracking-wide">
                    {property.type}
                </div>
            </div>

            <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-gray-900 line-clamp-1">{property.title}</h3>
                </div>

                <div className="flex items-center text-gray-500 text-sm mb-4">
                    <MapPin className="w-4 h-4 me-1" />
                    {property.location.city}
                </div>

                <div className="flex items-center gap-4 text-gray-600 text-sm mb-4">
                    {property.features.bedrooms && (
                        <div className="flex items-center gap-1">
                            <Bed className="w-4 h-4" />
                            <span>{property.features.bedrooms} Beds</span>
                        </div>
                    )}
                    {property.features.bathrooms && (
                        <div className="flex items-center gap-1">
                            <Bath className="w-4 h-4" />
                            <span>{property.features.bathrooms} Baths</span>
                        </div>
                    )}
                    <div className="flex items-center gap-1">
                        <Maximize className="w-4 h-4" />
                        <span>{property.features.area} m²</span>
                    </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <div className="text-xl font-bold text-emerald-600">
                        {(property.price).toLocaleString()} <span className="text-sm font-normal text-gray-500">SAR</span>
                    </div>
                    <button className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-600 transition">
                        {isRTL ? 'Detaylar' : 'View Details'}
                    </button>
                </div>
            </div>
        </div>
    );
}
