"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Bed, Bath, Maximize } from "lucide-react";

interface Property {
    id: string;
    title: { en: string; ar: string; tr: string } | string;
    price: number;
    type: string;
    location: { city: string; address: string };
    images: string[];
    features: { bedrooms: number; bathrooms: number; area: number };
}

export default function PropertyCard({ property, lang }: { property: Property; lang: string }) {
    // Get localized title
    const getTitle = () => {
        if (typeof property.title === 'string') return property.title;
        return property.title[lang as keyof typeof property.title] || property.title.en;
    };

    const typeLabels: Record<string, Record<string, string>> = {
        en: { VILLA: "Villa", APARTMENT: "Apartment", LAND: "Land", COMMERCIAL: "Commercial" },
        ar: { VILLA: "فيلا", APARTMENT: "شقة", LAND: "أرض", COMMERCIAL: "تجاري" },
        tr: { VILLA: "Villa", APARTMENT: "Daire", LAND: "Arsa", COMMERCIAL: "Ticari" }
    };

    const labels = typeLabels[lang] || typeLabels.en;
    const typeLabel = labels[property.type] || property.type;

    // Format price
    const formatPrice = (price: number) => {
        if (lang === 'ar') {
            return `${price.toLocaleString('ar-SA')} ر.س`;
        } else if (lang === 'tr') {
            return `${price.toLocaleString('tr-TR')} SAR`;
        }
        return `${price.toLocaleString()} SAR`;
    };

    return (
        <Link href={`/${lang}/properties/${property.id}`} className="group">
            <div className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                    <Image
                        src={property.images[0]}
                        alt={getTitle()}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                        <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                            {typeLabel}
                        </span>
                    </div>
                </div>

                {/* Content */}
                <div className="p-5">
                    <h3 className="font-bold text-lg text-stone-900 mb-2 line-clamp-1 group-hover:text-emerald-600 transition-colors">
                        {getTitle()}
                    </h3>

                    <div className="flex items-center text-stone-500 text-sm mb-4">
                        <MapPin className="h-4 w-4 me-1 flex-shrink-0" />
                        <span className="line-clamp-1">{property.location.address}</span>
                    </div>

                    {/* Features */}
                    <div className="flex items-center gap-4 text-stone-600 text-sm mb-4">
                        {property.features.bedrooms > 0 && (
                            <div className="flex items-center gap-1">
                                <Bed className="h-4 w-4" />
                                <span>{property.features.bedrooms}</span>
                            </div>
                        )}
                        {property.features.bathrooms > 0 && (
                            <div className="flex items-center gap-1">
                                <Bath className="h-4 w-4" />
                                <span>{property.features.bathrooms}</span>
                            </div>
                        )}
                        <div className="flex items-center gap-1">
                            <Maximize className="h-4 w-4" />
                            <span>{property.features.area} m²</span>
                        </div>
                    </div>

                    {/* Price */}
                    <div className="pt-4 border-t border-stone-100">
                        <span className="text-xl font-bold text-emerald-600">
                            {formatPrice(property.price)}
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
