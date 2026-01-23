"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { MapPin, Bed, Bath, Maximize, Phone, Mail, ArrowLeft, Share2, Heart } from "lucide-react";
import Link from "next/link";

interface Property {
    id: string;
    title: string;
    description: string;
    price: number;
    type: string;
    location: { city: string; address: string; lat: number; lng: number };
    images: string[];
    features: { bedrooms?: number; bathrooms?: number; area: number; parking?: number };
}

export default function PropertyDetailClient({ lang, id }: { lang: string; id: string }) {
    const [property, setProperty] = useState<Property | null>(null);
    const [loading, setLoading] = useState(true);
    const isRTL = lang === 'ar';

    useEffect(() => {
        async function fetchProperty() {
            try {
                const res = await fetch(`http://127.0.0.1:4000/properties/${id}`);
                if (!res.ok) throw new Error('Failed to fetch');
                const data = await res.json();
                setProperty(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }
        fetchProperty();
    }, [id]);

    if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    if (!property) return <div className="min-h-screen flex items-center justify-center">Property not found</div>;

    return (
        <div className="min-h-screen bg-stone-50 pb-20">
            {/* Hero Header */}
            <div className="relative h-[60vh] w-full bg-stone-900">
                <Image
                    src={property.images[0]}
                    alt={property.title}
                    fill
                    className="object-cover opacity-90"
                    priority
                />
                <div className="absolute top-24 left-0 w-full px-4 sm:px-6 lg:px-8">
                    <Link href={`/${lang}/properties`} className="inline-flex items-center text-white bg-black/30 backdrop-blur-md px-4 py-2 rounded-full hover:bg-black/50 transition">
                        <ArrowLeft className={`w-5 h-5 ${isRTL ? 'rotate-180 ml-2' : 'mr-2'}`} />
                        {lang === 'ar' ? 'Geri Dön' : 'Back to Search'}
                    </Link>
                </div>
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-8 sm:p-12">
                    <div className="container mx-auto">
                        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                            <div>
                                <span className="bg-emerald-600 text-white px-3 py-1 rounded-md text-sm font-semibold uppercase tracking-wider mb-3 inline-block">
                                    {property.type}
                                </span>
                                <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">{property.title}</h1>
                                <div className="flex items-center text-stone-300">
                                    <MapPin className="w-5 h-5 mr-2" />
                                    {property.location.address}
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="text-4xl font-bold text-white mb-1">
                                    {property.price.toLocaleString()} <span className="text-lg font-normal text-stone-300">SAR</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Features Bar */}
                        <div className="bg-white rounded-xl shadow-lg p-6 flex justify-around items-center text-center">
                            <div>
                                <div className="flex items-center justify-center text-emerald-600 mb-1">
                                    <Bed className="w-6 h-6" />
                                </div>
                                <div className="font-bold text-gray-900">{property.features.bedrooms} Beds</div>
                            </div>
                            <div className="w-px h-10 bg-gray-100"></div>
                            <div>
                                <div className="flex items-center justify-center text-emerald-600 mb-1">
                                    <Bath className="w-6 h-6" />
                                </div>
                                <div className="font-bold text-gray-900">{property.features.bathrooms} Baths</div>
                            </div>
                            <div className="w-px h-10 bg-gray-100"></div>
                            <div>
                                <div className="flex items-center justify-center text-emerald-600 mb-1">
                                    <Maximize className="w-6 h-6" />
                                </div>
                                <div className="font-bold text-gray-900">{property.features.area} m²</div>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">{lang === 'ar' ? 'Açıklama' : 'Description'}</h2>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                {property.description}
                            </p>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Action Card */}
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 sticky top-24">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">{lang === 'ar' ? 'İletişime Geç' : 'Interested in this property?'}</h3>

                            <button className="w-full bg-emerald-600 text-white font-bold py-4 rounded-xl mb-3 flex items-center justify-center gap-2 hover:bg-emerald-700 transition shadow-md hover:shadow-lg transform active:scale-95">
                                <Phone className="w-5 h-5" />
                                {lang === 'ar' ? 'Ara' : 'Call Agent'}
                            </button>
                            <button className="w-full bg-white text-gray-900 border-2 border-gray-200 font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:border-emerald-600 hover:text-emerald-600 transition">
                                <Mail className="w-5 h-5" />
                                {lang === 'ar' ? 'Mesaj Gönder' : 'Send Message'}
                            </button>

                            <div className="flex gap-2 mt-4">
                                <button className="flex-1 flex items-center justify-center gap-2 py-2 text-gray-500 hover:text-gray-900 transition">
                                    <Share2 className="w-4 h-4" /> Share
                                </button>
                                <button className="flex-1 flex items-center justify-center gap-2 py-2 text-gray-500 hover:text-red-500 transition">
                                    <Heart className="w-4 h-4" /> Save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
