"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Upload, MapPin, DollarSign, Home, FileText } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function CreatePropertyClient({ lang }: { lang: string }) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        price: "",
        type: "APARTMENT",
        city: "Al Madinah",
        address: "",
        bedrooms: "",
        bathrooms: "",
        area: "",
        imageUrl: "",
    });

    const translations: Record<string, {
        title: string;
        subtitle: string;
        submit: string;
        processing: string;
        success: string;
        error: string;
        labels: {
            title: string;
            desc: string;
            price: string;
            type: string;
            city: string;
            address: string;
            bed: string;
            bath: string;
            area: string;
            image: string;
            imageHint: string;
        };
        types: { APARTMENT: string; VILLA: string; LAND: string; COMMERCIAL: string };
        placeholders: { title: string; desc: string; address: string };
    }> = {
        en: {
            title: "List Your Property",
            subtitle: "Reach thousands of potential buyers in Saudi Arabia.",
            submit: "Publish Listing",
            processing: "Processing...",
            success: "Property created successfully!",
            error: "Failed to create property",
            labels: {
                title: "Property Title",
                desc: "Description",
                price: "Price (SAR)",
                type: "Property Type",
                city: "City",
                address: "District / Address",
                bed: "Bedrooms",
                bath: "Bathrooms",
                area: "Area (m²)",
                image: "Image URL",
                imageHint: "Paste a URL for the property image."
            },
            types: { APARTMENT: "Apartment", VILLA: "Villa", LAND: "Land", COMMERCIAL: "Commercial" },
            placeholders: { title: "e.g. Luxury Villa in Al Hamra", desc: "Describe the property features...", address: "District name" }
        },
        ar: {
            title: "أضف عقارك",
            subtitle: "الوصول إلى آلاف المشترين المحتملين في المملكة العربية السعودية.",
            submit: "نشر العقار",
            processing: "جاري المعالجة...",
            success: "تم إنشاء العقار بنجاح!",
            error: "فشل في إنشاء العقار",
            labels: {
                title: "عنوان العقار",
                desc: "الوصف",
                price: "السعر (ريال)",
                type: "نوع العقار",
                city: "المدينة",
                address: "الحي / العنوان",
                bed: "غرف النوم",
                bath: "دورات المياه",
                area: "المساحة (م²)",
                image: "رابط الصورة",
                imageHint: "الصق رابط صورة العقار."
            },
            types: { APARTMENT: "شقة", VILLA: "فيلا", LAND: "أرض", COMMERCIAL: "تجاري" },
            placeholders: { title: "مثال: فيلا فاخرة في الحمراء", desc: "صف ميزات العقار...", address: "اسم الحي" }
        },
        tr: {
            title: "Mülkünüzü İlan Edin",
            subtitle: "Suudi Arabistan'daki binlerce potansiyel alıcıya ulaşın.",
            submit: "İlanı Yayınla",
            processing: "İşleniyor...",
            success: "Mülk başarıyla oluşturuldu!",
            error: "Mülk oluşturulamadı",
            labels: {
                title: "Mülk Başlığı",
                desc: "Açıklama",
                price: "Fiyat (SAR)",
                type: "Mülk Tipi",
                city: "Şehir",
                address: "Semt / Adres",
                bed: "Yatak Odası",
                bath: "Banyo",
                area: "Alan (m²)",
                image: "Görsel URL",
                imageHint: "Mülk görseli için bir URL yapıştırın."
            },
            types: { APARTMENT: "Daire", VILLA: "Villa", LAND: "Arsa", COMMERCIAL: "Ticari" },
            placeholders: { title: "örn. Al Hamra'da Lüks Villa", desc: "Mülk özelliklerini açıklayın...", address: "Semt adı" }
        }
    };

    const t = translations[lang] || translations.en;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const payload = {
            title: formData.title,
            description: formData.description,
            price: parseFloat(formData.price),
            currency: "SAR",
            type: formData.type,
            location: JSON.stringify({
                city: formData.city,
                address: formData.address,
                lat: 24.46,
                lng: 39.61
            }),
            features: JSON.stringify({
                bedrooms: parseInt(formData.bedrooms) || 0,
                bathrooms: parseInt(formData.bathrooms) || 0,
                area: parseInt(formData.area) || 0,
                parking: 1
            }),
            images: [formData.imageUrl || "https://placehold.co/600x400"],
            status: "PUBLISHED",
            owner: { connect: { id: "mock-owner-id" } }
        };

        try {
            const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:4000';
            const res = await fetch(`${apiUrl}/properties`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (res.ok) {
                alert(t.success);
                router.push(`/${lang}/properties`);
                router.refresh();
            } else {
                alert(t.error);
            }
        } catch (error) {
            console.error(error);
            alert(t.error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar lang={lang} />

            <div className="py-24">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-10 text-center">
                        <h1 className="text-3xl font-bold text-gray-900">{t.title}</h1>
                        <p className="mt-2 text-gray-600">{t.subtitle}</p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                        <form onSubmit={handleSubmit} className="p-8 space-y-6">
                            {/* Basic Info */}
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">{t.labels.title}</label>
                                    <div className="relative">
                                        <Home className="absolute top-3 left-3 w-5 h-5 text-gray-400" />
                                        <input
                                            type="text"
                                            name="title"
                                            required
                                            value={formData.title}
                                            onChange={handleChange}
                                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
                                            placeholder={t.placeholders.title}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">{t.labels.desc}</label>
                                    <div className="relative">
                                        <FileText className="absolute top-3 left-3 w-5 h-5 text-gray-400" />
                                        <textarea
                                            name="description"
                                            required
                                            rows={4}
                                            value={formData.description}
                                            onChange={handleChange}
                                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
                                            placeholder={t.placeholders.desc}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Details Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">{t.labels.type}</label>
                                    <select
                                        name="type"
                                        value={formData.type}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                                    >
                                        <option value="APARTMENT">{t.types.APARTMENT}</option>
                                        <option value="VILLA">{t.types.VILLA}</option>
                                        <option value="LAND">{t.types.LAND}</option>
                                        <option value="COMMERCIAL">{t.types.COMMERCIAL}</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">{t.labels.price}</label>
                                    <div className="relative">
                                        <DollarSign className="absolute top-3 left-3 w-5 h-5 text-gray-400" />
                                        <input
                                            type="number"
                                            name="price"
                                            required
                                            min="0"
                                            value={formData.price}
                                            onChange={handleChange}
                                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">{t.labels.city}</label>
                                    <div className="relative">
                                        <MapPin className="absolute top-3 left-3 w-5 h-5 text-gray-400" />
                                        <input
                                            type="text"
                                            name="city"
                                            required
                                            value={formData.city}
                                            onChange={handleChange}
                                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">{t.labels.address}</label>
                                    <input
                                        type="text"
                                        name="address"
                                        required
                                        value={formData.address}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                                        placeholder={t.placeholders.address}
                                    />
                                </div>
                            </div>

                            {/* Specs */}
                            <div className="grid grid-cols-3 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">{t.labels.bed}</label>
                                    <input
                                        type="number"
                                        name="bedrooms"
                                        min="0"
                                        value={formData.bedrooms}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">{t.labels.bath}</label>
                                    <input
                                        type="number"
                                        name="bathrooms"
                                        min="0"
                                        value={formData.bathrooms}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">{t.labels.area}</label>
                                    <input
                                        type="number"
                                        name="area"
                                        required
                                        min="0"
                                        value={formData.area}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                                    />
                                </div>
                            </div>

                            {/* Image */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">{t.labels.image}</label>
                                <div className="relative">
                                    <Upload className="absolute top-3 left-3 w-5 h-5 text-gray-400" />
                                    <input
                                        type="url"
                                        name="imageUrl"
                                        value={formData.imageUrl}
                                        onChange={handleChange}
                                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                                        placeholder="https://example.com/image.jpg"
                                    />
                                </div>
                                <p className="text-xs text-gray-500 mt-1">{t.labels.imageHint}</p>
                            </div>

                            <div className="pt-4">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-emerald-600 text-white font-bold py-3 rounded-xl hover:bg-emerald-700 transition shadow-lg transform active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {loading ? t.processing : t.submit}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <Footer lang={lang} />
        </div>
    );
}
