"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Store, Package, Wrench, Car, Laptop, Home, Shirt, Phone, Filter, Search, MapPin, Tag, MessageCircle, Plus } from "lucide-react";
import { useState } from "react";

interface MarketplacePageProps {
    lang: string;
}

const categories = [
    { id: "all", icon: Store },
    { id: "furniture", icon: Home },
    { id: "electronics", icon: Laptop },
    { id: "clothing", icon: Shirt },
    { id: "vehicles", icon: Car },
    { id: "services", icon: Wrench },
];

const listings = [
    {
        id: "item-001",
        title: { en: "IKEA Living Room Set", ar: "طقم غرفة معيشة ايكيا", tr: "IKEA Oturma Odası Seti" },
        price: 2500,
        category: "furniture",
        condition: "used",
        city: "Riyadh",
        seller: { name: "Mohammed", rating: 4.8 },
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400",
        description: { en: "Complete set including sofa, coffee table, and TV unit. 2 years old, excellent condition.", ar: "طقم كامل يشمل كنبة وطاولة قهوة ووحدة تلفزيون", tr: "Kanepe, sehpa ve TV ünitesi dahil komple set" }
    },
    {
        id: "item-002",
        title: { en: "iPhone 14 Pro Max 256GB", ar: "آيفون 14 برو ماكس 256 جيجا", tr: "iPhone 14 Pro Max 256GB" },
        price: 3200,
        category: "electronics",
        condition: "new",
        city: "Jeddah",
        seller: { name: "Ali", rating: 5.0 },
        image: "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=400",
        description: { en: "Brand new, sealed box. Space Black color. FaceTime enabled.", ar: "جديد بالكرتون، لون أسود، فيس تايم مفعل", tr: "Sıfır, kapalı kutu. Uzay Siyahı renk" }
    },
    {
        id: "item-003",
        title: { en: "Toyota Camry 2020", ar: "تويوتا كامري 2020", tr: "Toyota Camry 2020" },
        price: 85000,
        category: "vehicles",
        condition: "used",
        city: "Dammam",
        seller: { name: "Khalid", rating: 4.5 },
        image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400",
        description: { en: "65,000 km, full option, leather seats. Accident-free, agency maintained.", ar: "65 ألف كم، فل كامل، جلد، بدون حوادث", tr: "65.000 km, full donanım, deri koltuk, hasarsız" }
    },
    {
        id: "item-004",
        title: { en: "Arabic-English Translation Services", ar: "خدمات ترجمة عربي-إنجليزي", tr: "Arapça-İngilizce Tercüme Hizmetleri" },
        price: 150,
        category: "services",
        condition: "service",
        city: "Riyadh",
        seller: { name: "Fatima", rating: 4.9 },
        image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400",
        description: { en: "Certified translator. Documents, contracts, and official papers. Fast turnaround.", ar: "مترجمة معتمدة. وثائق وعقود وأوراق رسمية", tr: "Sertifikalı tercüman. Belgeler, sözleşmeler, resmi evraklar" }
    },
    {
        id: "item-005",
        title: { en: "Moving & Furniture Assembly", ar: "خدمات نقل وتركيب أثاث", tr: "Taşınma ve Mobilya Montajı" },
        price: 200,
        category: "services",
        condition: "service",
        city: "Jeddah",
        seller: { name: "Omar", rating: 4.7 },
        image: "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=400",
        description: { en: "Professional movers. Packing, transport, and IKEA assembly. All Jeddah areas.", ar: "ناقلون محترفون. تغليف ونقل وتركيب ايكيا", tr: "Profesyonel nakliyeciler. Paketleme, taşıma ve IKEA montajı" }
    },
    {
        id: "item-006",
        title: { en: "Samsung 65\" QLED TV", ar: "تلفزيون سامسونج 65 بوصة", tr: "Samsung 65\" QLED TV" },
        price: 4500,
        category: "electronics",
        condition: "used",
        city: "Riyadh",
        seller: { name: "Ahmad", rating: 4.6 },
        image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400",
        description: { en: "1 year old, excellent condition. With wall mount and original box.", ar: "عمره سنة، حالة ممتازة مع حامل حائط", tr: "1 yıllık, mükemmel durumda. Duvar askısı ve orijinal kutusu ile" }
    },
    {
        id: "item-007",
        title: { en: "King Size Bedroom Set", ar: "طقم غرفة نوم كينج", tr: "King Size Yatak Odası Takımı" },
        price: 3500,
        category: "furniture",
        condition: "used",
        city: "Madinah",
        seller: { name: "Yusuf", rating: 4.8 },
        image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400",
        description: { en: "Complete bedroom set: bed frame, mattress, 2 nightstands, dresser with mirror.", ar: "طقم غرفة نوم كامل مع مرتبة وتسريحة", tr: "Komple yatak odası takımı: karyola, yatak, 2 komodin, şifonyer" }
    },
    {
        id: "item-008",
        title: { en: "Traditional Saudi Thobe (New)", ar: "ثوب سعودي تقليدي جديد", tr: "Geleneksel Suudi Thobe (Yeni)" },
        price: 250,
        category: "clothing",
        condition: "new",
        city: "Jeddah",
        seller: { name: "Abdullah", rating: 4.9 },
        image: "https://images.unsplash.com/photo-1590902812041-58eeb4a89e9b?w=400",
        description: { en: "White Saudi thobe, premium cotton. Sizes M, L, XL available.", ar: "ثوب سعودي أبيض، قطن فاخر، مقاسات متعددة", tr: "Beyaz Suudi thobe, premium pamuk. M, L, XL bedenler mevcut" }
    },
];

export default function MarketplacePage({ lang }: MarketplacePageProps) {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCity, setSelectedCity] = useState("all");

    const translations: Record<string, {
        title: string;
        subtitle: string;
        search: string;
        allCategories: string;
        furniture: string;
        electronics: string;
        clothing: string;
        vehicles: string;
        services: string;
        allCities: string;
        condition: { new: string; used: string; service: string };
        contact: string;
        perHour: string;
        postItem: string;
        noResults: string;
    }> = {
        en: {
            title: "Madinah Market",
            subtitle: "Buy, sell, and trade within the community",
            search: "Search items...",
            allCategories: "All",
            furniture: "Furniture",
            electronics: "Electronics",
            clothing: "Clothing",
            vehicles: "Vehicles",
            services: "Services",
            allCities: "All Cities",
            condition: { new: "New", used: "Used", service: "Service" },
            contact: "Contact",
            perHour: "/hour",
            postItem: "Post Item",
            noResults: "No items found matching your criteria"
        },
        ar: {
            title: "سوق المدينة",
            subtitle: "بيع واشتري وتبادل داخل المجتمع",
            search: "ابحث عن منتجات...",
            allCategories: "الكل",
            furniture: "أثاث",
            electronics: "إلكترونيات",
            clothing: "ملابس",
            vehicles: "سيارات",
            services: "خدمات",
            allCities: "جميع المدن",
            condition: { new: "جديد", used: "مستعمل", service: "خدمة" },
            contact: "تواصل",
            perHour: "/ساعة",
            postItem: "أضف إعلان",
            noResults: "لم يتم العثور على نتائج"
        },
        tr: {
            title: "Medine Pazarı",
            subtitle: "Topluluk içinde al, sat ve takas yap",
            search: "Ürün ara...",
            allCategories: "Tümü",
            furniture: "Mobilya",
            electronics: "Elektronik",
            clothing: "Giyim",
            vehicles: "Araçlar",
            services: "Hizmetler",
            allCities: "Tüm Şehirler",
            condition: { new: "Sıfır", used: "Kullanılmış", service: "Hizmet" },
            contact: "İletişim",
            perHour: "/saat",
            postItem: "İlan Ver",
            noResults: "Kriterlere uyan ürün bulunamadı"
        }
    };

    const t = translations[lang] || translations.en;
    const cities = ["all", "Riyadh", "Jeddah", "Dammam", "Madinah"];

    const categoryLabels: Record<string, string> = {
        all: t.allCategories,
        furniture: t.furniture,
        electronics: t.electronics,
        clothing: t.clothing,
        vehicles: t.vehicles,
        services: t.services
    };

    const filteredListings = listings.filter(item => {
        const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
        const matchesCity = selectedCity === "all" || item.city === selectedCity;
        const title = item.title[lang as keyof typeof item.title] || item.title.en;
        const matchesSearch = title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesCity && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-stone-50">
            <Navbar lang={lang} />

            {/* Hero */}
            <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Store className="h-12 w-12 text-white/80 mx-auto mb-4" />
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">{t.title}</h1>
                    <p className="text-xl text-white/80">{t.subtitle}</p>
                </div>
            </section>

            {/* Search & Filters */}
            <section className="bg-white shadow-sm sticky top-16 z-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex flex-col md:flex-row gap-4">
                        {/* Search */}
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-stone-400" />
                            <input
                                type="text"
                                placeholder={t.search}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full ps-10 pe-4 py-3 border border-stone-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>

                        {/* City Filter */}
                        <div className="flex items-center gap-2">
                            <MapPin className="h-5 w-5 text-stone-400" />
                            <select
                                value={selectedCity}
                                onChange={(e) => setSelectedCity(e.target.value)}
                                className="px-4 py-3 border border-stone-200 rounded-xl focus:ring-2 focus:ring-indigo-500"
                            >
                                <option value="all">{t.allCities}</option>
                                {cities.slice(1).map(city => (
                                    <option key={city} value={city}>{city}</option>
                                ))}
                            </select>
                        </div>

                        {/* Post Button */}
                        <button className="flex items-center justify-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition-colors">
                            <Plus className="h-5 w-5" />
                            {t.postItem}
                        </button>
                    </div>

                    {/* Category Tabs */}
                    <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                        {categories.map((cat) => {
                            const Icon = cat.icon;
                            return (
                                <button
                                    key={cat.id}
                                    onClick={() => setSelectedCategory(cat.id)}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${selectedCategory === cat.id
                                        ? 'bg-indigo-600 text-white'
                                        : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                                        }`}
                                >
                                    <Icon className="h-4 w-4" />
                                    {categoryLabels[cat.id]}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Listings Grid */}
            <section className="py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {filteredListings.length === 0 ? (
                        <div className="text-center py-16">
                            <Package className="h-16 w-16 text-stone-300 mx-auto mb-4" />
                            <p className="text-stone-500">{t.noResults}</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {filteredListings.map((item) => (
                                <div key={item.id} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-stone-100 group">
                                    <div className="relative">
                                        <img
                                            src={item.image}
                                            alt={item.title[lang as keyof typeof item.title] || item.title.en}
                                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium ${item.condition === 'new' ? 'bg-emerald-100 text-emerald-700' :
                                            item.condition === 'service' ? 'bg-blue-100 text-blue-700' :
                                                'bg-amber-100 text-amber-700'
                                            }`}>
                                            {t.condition[item.condition as keyof typeof t.condition]}
                                        </span>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-bold text-stone-900 mb-1 line-clamp-2">
                                            {item.title[lang as keyof typeof item.title] || item.title.en}
                                        </h3>
                                        <p className="text-sm text-stone-500 mb-3 line-clamp-2">
                                            {item.description[lang as keyof typeof item.description] || item.description.en}
                                        </p>

                                        <div className="flex items-center justify-between mb-3">
                                            <div className="flex items-center gap-1 text-sm text-stone-500">
                                                <MapPin className="h-4 w-4" />
                                                {item.city}
                                            </div>
                                            <div className="text-lg font-bold text-indigo-600">
                                                {item.price.toLocaleString()} SAR
                                                {item.category === 'services' && <span className="text-sm font-normal">{t.perHour}</span>}
                                            </div>
                                        </div>

                                        <button className="w-full flex items-center justify-center gap-2 bg-indigo-50 text-indigo-600 py-2 rounded-lg font-medium hover:bg-indigo-100 transition-colors">
                                            <MessageCircle className="h-4 w-4" />
                                            {t.contact}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            <Footer lang={lang} />
        </div>
    );
}
