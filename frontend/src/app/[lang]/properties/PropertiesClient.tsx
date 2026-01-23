"use client";

import { useEffect, useState } from "react";
import PropertyCard from "@/components/PropertyCard";
import { Filter, Map as MapIcon, List } from "lucide-react";

export default function PropertiesClient({ lang }: { lang: string }) {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);
    const [view, setView] = useState<'list' | 'map'>('list');

    useEffect(() => {
        async function fetchProperties() {
            try {
                const res = await fetch('http://127.0.0.1:4000/properties');
                if (!res.ok) throw new Error('Failed to fetch');
                const data = await res.json();
                setProperties(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }
        fetchProperties();
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-12">
            <div className="container mx-auto px-4">
                {/* Header & Filters */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">
                            {lang === 'ar' ? 'Mülk Ara' : 'Find Your Home'}
                        </h1>
                        <p className="text-gray-500">
                            {lang === 'ar' ? 'Suudi Arabistan\'daki en iyi mülkleri keşfedin' : 'Discover the best properties in Saudi Arabia'}
                        </p>
                    </div>

                    <div className="flex gap-3">
                        <button className="flex items-center gap-2 bg-white border px-4 py-2 rounded-lg hover:bg-gray-50">
                            <Filter className="w-4 h-4" />
                            <span>Filters</span>
                        </button>
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

                {/* Content */}
                {loading ? (
                    <div className="text-center py-20">Loading...</div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {properties.map((prop: any) => (
                            <PropertyCard key={prop.id} property={prop} lang={lang} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
