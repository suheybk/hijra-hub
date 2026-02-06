"use client";

import { useState } from "react";
import { Search, MapPin, Home, DollarSign } from "lucide-react";
import { useRouter } from "next/navigation";

export function SearchBar({ lang }: { lang: string }) {
    const router = useRouter();
    const [location, setLocation] = useState("");
    const [type, setType] = useState("ALL");
    const [maxPrice, setMaxPrice] = useState("");

    const translations: Record<string, {
        title: string;
        locationPlaceholder: string;
        typePlaceholder: string;
        pricePlaceholder: string;
        button: string;
        types: { ALL: string; VILLA: string; APARTMENT: string; LAND: string; COMMERCIAL: string };
    }> = {
        en: {
            title: "Find Your Perfect Property",
            locationPlaceholder: "City or Address",
            typePlaceholder: "Property Type",
            pricePlaceholder: "Max Price",
            button: "Search",
            types: { ALL: "All Types", VILLA: "Villa", APARTMENT: "Apartment", LAND: "Land", COMMERCIAL: "Commercial" }
        },
        ar: {
            title: "اعثر على عقارك المثالي",
            locationPlaceholder: "المدينة أو العنوان",
            typePlaceholder: "نوع العقار",
            pricePlaceholder: "الحد الأقصى للسعر",
            button: "بحث",
            types: { ALL: "جميع الأنواع", VILLA: "فيلا", APARTMENT: "شقة", LAND: "أرض", COMMERCIAL: "تجاري" }
        },
        tr: {
            title: "Mükemmel Mülkünüzü Bulun",
            locationPlaceholder: "Şehir veya Adres",
            typePlaceholder: "Mülk Tipi",
            pricePlaceholder: "Maksimum Fiyat",
            button: "Ara",
            types: { ALL: "Tüm Tipler", VILLA: "Villa", APARTMENT: "Daire", LAND: "Arsa", COMMERCIAL: "Ticari" }
        }
    };

    const t = translations[lang] || translations.en;

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        const params = new URLSearchParams();
        if (location) params.set("location", location);
        if (type !== "ALL") params.set("type", type);
        if (maxPrice) params.set("maxPrice", maxPrice);
        router.push(`/${lang}/properties?${params.toString()}`);
    };

    return (
        <section className="py-16 bg-stone-100">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-bold text-stone-900 text-center mb-8">{t.title}</h2>

                <form onSubmit={handleSearch} className="bg-white rounded-2xl shadow-lg p-4 md:p-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {/* Location */}
                        <div className="relative">
                            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-stone-400" />
                            <input
                                type="text"
                                placeholder={t.locationPlaceholder}
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-stone-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                            />
                        </div>

                        {/* Type */}
                        <div className="relative">
                            <Home className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-stone-400" />
                            <select
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-stone-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none appearance-none bg-white"
                            >
                                {Object.entries(t.types).map(([key, label]) => (
                                    <option key={key} value={key}>{label}</option>
                                ))}
                            </select>
                        </div>

                        {/* Max Price */}
                        <div className="relative">
                            <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-stone-400" />
                            <input
                                type="number"
                                placeholder={t.pricePlaceholder}
                                value={maxPrice}
                                onChange={(e) => setMaxPrice(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-stone-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                            />
                        </div>

                        {/* Search Button */}
                        <button
                            type="submit"
                            className="bg-emerald-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2"
                        >
                            <Search className="h-5 w-5" />
                            {t.button}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
