"use client";

import { useEffect, useState } from "react";
import PropertyCard from "@/components/PropertyCard";
import { Filter, Map as MapIcon, List, SortAsc, X } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

interface Property {
    id: string;
    title: { en: string; ar: string; tr: string } | string;
    price: number;
    type: string;
    location: { city: string; address: string };
    images: string[];
    features: { bedrooms: number; bathrooms: number; area: number };
}

export default function PropertiesClient({ lang }: { lang: string }) {
    const [properties, setProperties] = useState<Property[]>([]);
    const [loading, setLoading] = useState(true);
    const [view, setView] = useState<'list' | 'map'>('list');
    const [showFilters, setShowFilters] = useState(false);

    const [filters, setFilters] = useState({
        minPrice: "",
        maxPrice: "",
        type: "ALL",
        sort: "newest",
    });

    const translations: Record<string, {
        title: string;
        subtitle: string;
        filters: string;
        filterTitle: string;
        clearAll: string;
        propertyType: string;
        allTypes: string;
        villa: string;
        apartment: string;
        land: string;
        commercial: string;
        minPrice: string;
        maxPrice: string;
        newest: string;
        priceLow: string;
        priceHigh: string;
        loading: string;
        noResults: string;
        noResultsHint: string;
        clearFilters: string;
        mapUnavailable: string;
        mapHint: string;
        switchToList: string;
    }> = {
        en: {
            title: "Find Your Home",
            subtitle: "Discover the best properties in Saudi Arabia",
            filters: "Filters",
            filterTitle: "Filter Properties",
            clearAll: "Clear All",
            propertyType: "Property Type",
            allTypes: "All Types",
            villa: "Villa",
            apartment: "Apartment",
            land: "Land",
            commercial: "Commercial",
            minPrice: "Min Price (SAR)",
            maxPrice: "Max Price (SAR)",
            newest: "Newest First",
            priceLow: "Price: Low to High",
            priceHigh: "Price: High to Low",
            loading: "Updating results...",
            noResults: "No properties found",
            noResultsHint: "Try adjusting your search or filters.",
            clearFilters: "Clear all filters",
            mapUnavailable: "Map View Unavailable",
            mapHint: "Interactive maps require an API key which is not currently configured.",
            switchToList: "Switch to List View"
        },
        ar: {
            title: "ابحث عن منزلك",
            subtitle: "اكتشف أفضل العقارات في المملكة العربية السعودية",
            filters: "الفلاتر",
            filterTitle: "تصفية العقارات",
            clearAll: "مسح الكل",
            propertyType: "نوع العقار",
            allTypes: "جميع الأنواع",
            villa: "فيلا",
            apartment: "شقة",
            land: "أرض",
            commercial: "تجاري",
            minPrice: "الحد الأدنى للسعر (ريال)",
            maxPrice: "الحد الأقصى للسعر (ريال)",
            newest: "الأحدث أولاً",
            priceLow: "السعر: من الأقل للأعلى",
            priceHigh: "السعر: من الأعلى للأقل",
            loading: "جاري التحديث...",
            noResults: "لم يتم العثور على عقارات",
            noResultsHint: "حاول تعديل البحث أو الفلاتر.",
            clearFilters: "مسح جميع الفلاتر",
            mapUnavailable: "عرض الخريطة غير متاح",
            mapHint: "تتطلب الخرائط التفاعلية مفتاح API غير مكون حالياً.",
            switchToList: "التبديل إلى عرض القائمة"
        },
        tr: {
            title: "Evinizi Bulun",
            subtitle: "Suudi Arabistan'daki en iyi mülkleri keşfedin",
            filters: "Filtreler",
            filterTitle: "Mülkleri Filtrele",
            clearAll: "Tümünü Temizle",
            propertyType: "Mülk Tipi",
            allTypes: "Tüm Tipler",
            villa: "Villa",
            apartment: "Daire",
            land: "Arsa",
            commercial: "Ticari",
            minPrice: "Min Fiyat (SAR)",
            maxPrice: "Maks Fiyat (SAR)",
            newest: "En Yeni",
            priceLow: "Fiyat: Düşükten Yükseğe",
            priceHigh: "Fiyat: Yüksekten Düşüğe",
            loading: "Sonuçlar güncelleniyor...",
            noResults: "Mülk bulunamadı",
            noResultsHint: "Aramanızı veya filtrelerinizi ayarlamayı deneyin.",
            clearFilters: "Tüm filtreleri temizle",
            mapUnavailable: "Harita Görünümü Kullanılamıyor",
            mapHint: "Etkileşimli haritalar şu anda yapılandırılmamış bir API anahtarı gerektiriyor.",
            switchToList: "Liste Görünümüne Geç"
        }
    };

    const t = translations[lang] || translations.en;

    async function fetchProperties() {
        setLoading(true);
        try {
            const params = new URLSearchParams();
            if (filters.minPrice) params.append('minPrice', filters.minPrice);
            if (filters.maxPrice) params.append('maxPrice', filters.maxPrice);
            if (filters.type && filters.type !== 'ALL') params.append('type', filters.type);
            if (filters.sort) params.append('sort', filters.sort);

            const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:4000';
            const res = await fetch(`${apiUrl}/properties?${params.toString()}`);
            if (!res.ok) throw new Error('Failed to fetch');
            const data = await res.json();
            setProperties(data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProperties();
    }, [filters]); // eslint-disable-line react-hooks/exhaustive-deps

    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFilters(prev => ({ ...prev, [name]: value }));
    };

    const clearFilters = () => {
        setFilters({ minPrice: "", maxPrice: "", type: "ALL", sort: "newest" });
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar lang={lang} />

            <div className="pt-24 pb-12">
                <div className="container mx-auto px-4">
                    {/* Header & Controls */}
                    <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900 mb-2">{t.title}</h1>
                            <p className="text-gray-500">{t.subtitle}</p>
                        </div>

                        <div className="flex flex-wrap gap-3 items-center">
                            {/* Sort Dropdown */}
                            <div className="relative">
                                <select
                                    name="sort"
                                    value={filters.sort}
                                    onChange={handleFilterChange}
                                    className="appearance-none bg-white border border-gray-200 text-gray-700 py-2 pl-4 pr-10 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                >
                                    <option value="newest">{t.newest}</option>
                                    <option value="price_asc">{t.priceLow}</option>
                                    <option value="price_desc">{t.priceHigh}</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <SortAsc className="h-4 w-4" />
                                </div>
                            </div>

                            {/* Filter Toggle */}
                            <button
                                onClick={() => setShowFilters(!showFilters)}
                                className={`flex items-center gap-2 border px-4 py-2 rounded-lg transition-colors ${showFilters ? 'bg-emerald-50 border-emerald-500 text-emerald-700' : 'bg-white hover:bg-gray-50'}`}
                            >
                                <Filter className="w-4 h-4" />
                                <span>{t.filters}</span>
                            </button>

                            {/* View Toggle */}
                            <div className="bg-white border rounded-lg p-1 flex">
                                <button
                                    onClick={() => setView('list')}
                                    className={`p-2 rounded-md ${view === 'list' ? 'bg-gray-100 text-gray-900' : 'text-gray-400'}`}>
                                    <List className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={() => setView('map')}
                                    className={`p-2 rounded-md ${view === 'map' ? 'bg-gray-100 text-gray-900' : 'text-gray-400'}`}>
                                    <MapIcon className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Filter Bar */}
                    {showFilters && (
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="font-semibold text-gray-900">{t.filterTitle}</h3>
                                <button onClick={clearFilters} className="text-sm text-red-500 hover:text-red-700 flex items-center gap-1">
                                    <X className="w-4 h-4" /> {t.clearAll}
                                </button>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">{t.propertyType}</label>
                                    <select
                                        name="type"
                                        value={filters.type}
                                        onChange={handleFilterChange}
                                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                                    >
                                        <option value="ALL">{t.allTypes}</option>
                                        <option value="VILLA">{t.villa}</option>
                                        <option value="APARTMENT">{t.apartment}</option>
                                        <option value="LAND">{t.land}</option>
                                        <option value="COMMERCIAL">{t.commercial}</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">{t.minPrice}</label>
                                    <input
                                        type="number"
                                        name="minPrice"
                                        value={filters.minPrice}
                                        onChange={handleFilterChange}
                                        placeholder="0"
                                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">{t.maxPrice}</label>
                                    <input
                                        type="number"
                                        name="maxPrice"
                                        value={filters.maxPrice}
                                        onChange={handleFilterChange}
                                        placeholder="Any"
                                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Content Area */}
                    {view === 'map' ? (
                        <div className="bg-gray-200 rounded-xl h-[600px] flex items-center justify-center relative overflow-hidden shadow-inner">
                            <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl text-center max-w-md relative z-10">
                                <MapIcon className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{t.mapUnavailable}</h3>
                                <p className="text-gray-600 mb-6">{t.mapHint}</p>
                                <button
                                    onClick={() => setView('list')}
                                    className="bg-emerald-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-emerald-700 transition"
                                >
                                    {t.switchToList}
                                </button>
                            </div>
                        </div>
                    ) : (
                        <>
                            {loading ? (
                                <div className="text-center py-20">
                                    <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600"></div>
                                    <div className="mt-2 text-gray-500">{t.loading}</div>
                                </div>
                            ) : (
                                <>
                                    {properties.length === 0 ? (
                                        <div className="text-center py-24 bg-white rounded-xl border border-dashed border-gray-300">
                                            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-gray-100 mb-4">
                                                <Filter className="h-6 w-6 text-gray-400" />
                                            </div>
                                            <h3 className="mt-2 text-sm font-medium text-gray-900">{t.noResults}</h3>
                                            <p className="mt-1 text-sm text-gray-500">{t.noResultsHint}</p>
                                            <div className="mt-6">
                                                <button
                                                    onClick={clearFilters}
                                                    className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700"
                                                >
                                                    {t.clearFilters}
                                                </button>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                            {properties.map((prop) => (
                                                <PropertyCard key={prop.id} property={prop} lang={lang} />
                                            ))}
                                        </div>
                                    )}
                                </>
                            )}
                        </>
                    )}
                </div>
            </div>

            <Footer lang={lang} />
        </div>
    );
}
