"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Users, Calendar, MapPin, MessageSquare, Globe, TrendingUp, Heart, Building, Briefcase, BookOpen, Star, ChevronRight, Clock } from "lucide-react";
import { useState } from "react";

interface CommunityPageProps {
    lang: string;
}

const communities = [
    {
        id: "comm-001",
        name: { en: "Riyadh Newcomers", ar: "القادمون الجدد للرياض", tr: "Riyad Yeni Gelenler" },
        members: 2450,
        category: "city",
        icon: Building,
        color: "bg-blue-500",
        description: { en: "Support group for new arrivals to Riyadh", ar: "مجموعة دعم للوافدين الجدد للرياض", tr: "Riyad'a yeni gelenler için destek grubu" }
    },
    {
        id: "comm-002",
        name: { en: "Turkish Community KSA", ar: "الجالية التركية في السعودية", tr: "KSA Türk Topluluğu" },
        members: 890,
        category: "origin",
        icon: Globe,
        color: "bg-red-500",
        description: { en: "Turkish expats in Saudi Arabia", ar: "الأتراك المقيمون في السعودية", tr: "Suudi Arabistan'daki Türk gurbetçiler" }
    },
    {
        id: "comm-003",
        name: { en: "Tech Professionals Network", ar: "شبكة محترفي التقنية", tr: "Teknoloji Profesyonelleri Ağı" },
        members: 1230,
        category: "profession",
        icon: Briefcase,
        color: "bg-purple-500",
        description: { en: "IT and tech workers across KSA", ar: "العاملون في التقنية في السعودية", tr: "Suudi Arabistan genelinde BT ve teknoloji çalışanları" }
    },
    {
        id: "comm-004",
        name: { en: "Muslim Families Network", ar: "شبكة العائلات المسلمة", tr: "Müslüman Aileler Ağı" },
        members: 3100,
        category: "family",
        icon: Heart,
        color: "bg-rose-500",
        description: { en: "Family-oriented community for Islamic values", ar: "مجتمع عائلي للقيم الإسلامية", tr: "İslami değerler için aile odaklı topluluk" }
    },
    {
        id: "comm-005",
        name: { en: "Jeddah Expat Circle", ar: "دائرة المغتربين في جدة", tr: "Cidde Gurbetçi Çevresi" },
        members: 1890,
        category: "city",
        icon: Building,
        color: "bg-teal-500",
        description: { en: "Expat community in the coastal city", ar: "مجتمع المغتربين في المدينة الساحلية", tr: "Sahil şehrindeki gurbetçi topluluğu" }
    },
    {
        id: "comm-006",
        name: { en: "Healthcare Workers Hub", ar: "مركز العاملين في الصحة", tr: "Sağlık Çalışanları Merkezi" },
        members: 670,
        category: "profession",
        icon: Heart,
        color: "bg-emerald-500",
        description: { en: "Doctors, nurses, and medical staff", ar: "أطباء وممرضون وطاقم طبي", tr: "Doktorlar, hemşireler ve sağlık personeli" }
    },
];

const events = [
    {
        id: "event-001",
        title: { en: "Newcomers Welcome Dinner", ar: "عشاء ترحيب بالقادمين الجدد", tr: "Yeni Gelenlere Hoş Geldin Yemeği" },
        date: "2026-02-15",
        time: "19:00",
        city: "Riyadh",
        attendees: 45,
        image: "https://images.unsplash.com/photo-1529543544277-815c66c7e79f?w=400"
    },
    {
        id: "event-002",
        title: { en: "Tech Meetup Jeddah", ar: "لقاء التقنية في جدة", tr: "Cidde Teknoloji Buluşması" },
        date: "2026-02-20",
        time: "18:30",
        city: "Jeddah",
        attendees: 32,
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400"
    },
    {
        id: "event-003",
        title: { en: "Family Picnic Day", ar: "يوم نزهة العائلة", tr: "Aile Piknik Günü" },
        date: "2026-02-22",
        time: "10:00",
        city: "Dammam",
        attendees: 120,
        image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400"
    },
    {
        id: "event-004",
        title: { en: "Business Networking Night", ar: "ليلة التواصل التجاري", tr: "İş Networking Gecesi" },
        date: "2026-02-28",
        time: "20:00",
        city: "Riyadh",
        attendees: 85,
        image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=400"
    },
];

export default function CommunityPage({ lang }: CommunityPageProps) {
    const [selectedCategory, setSelectedCategory] = useState("all");

    const translations: Record<string, {
        title: string;
        subtitle: string;
        communities: string;
        events: string;
        members: string;
        join: string;
        attend: string;
        attending: string;
        allGroups: string;
        byCity: string;
        byOrigin: string;
        byProfession: string;
        byFamily: string;
        upcomingEvents: string;
        viewAll: string;
        createCommunity: string;
    }> = {
        en: {
            title: "Community Hub",
            subtitle: "Connect with fellow expats and build lasting relationships",
            communities: "Communities",
            events: "Events",
            members: "members",
            join: "Join",
            attend: "Attend",
            attending: "attending",
            allGroups: "All Groups",
            byCity: "By City",
            byOrigin: "By Origin",
            byProfession: "By Profession",
            byFamily: "Family",
            upcomingEvents: "Upcoming Events",
            viewAll: "View All",
            createCommunity: "Create Community"
        },
        ar: {
            title: "مركز المجتمع",
            subtitle: "تواصل مع زملائك المغتربين وابنِ علاقات دائمة",
            communities: "المجتمعات",
            events: "الفعاليات",
            members: "عضو",
            join: "انضم",
            attend: "احضر",
            attending: "حاضر",
            allGroups: "جميع المجموعات",
            byCity: "حسب المدينة",
            byOrigin: "حسب الأصل",
            byProfession: "حسب المهنة",
            byFamily: "عائلي",
            upcomingEvents: "الفعاليات القادمة",
            viewAll: "عرض الكل",
            createCommunity: "أنشئ مجتمع"
        },
        tr: {
            title: "Topluluk Merkezi",
            subtitle: "Diğer gurbetçilerle bağlantı kurun ve kalıcı ilişkiler oluşturun",
            communities: "Topluluklar",
            events: "Etkinlikler",
            members: "üye",
            join: "Katıl",
            attend: "Katıl",
            attending: "katılıyor",
            allGroups: "Tüm Gruplar",
            byCity: "Şehre Göre",
            byOrigin: "Kökene Göre",
            byProfession: "Mesleğe Göre",
            byFamily: "Aile",
            upcomingEvents: "Yaklaşan Etkinlikler",
            viewAll: "Tümünü Gör",
            createCommunity: "Topluluk Oluştur"
        }
    };

    const t = translations[lang] || translations.en;

    const categoryFilters = [
        { id: "all", label: t.allGroups },
        { id: "city", label: t.byCity },
        { id: "origin", label: t.byOrigin },
        { id: "profession", label: t.byProfession },
        { id: "family", label: t.byFamily },
    ];

    const filteredCommunities = selectedCategory === "all"
        ? communities
        : communities.filter(c => c.category === selectedCategory);

    const formatDate = (dateStr: string) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString(lang === 'ar' ? 'ar-SA' : lang === 'tr' ? 'tr-TR' : 'en-US', {
            weekday: 'short',
            day: 'numeric',
            month: 'short'
        });
    };

    return (
        <div className="min-h-screen bg-stone-50">
            <Navbar lang={lang} />

            {/* Hero */}
            <section className="bg-gradient-to-br from-cyan-600 via-teal-600 to-emerald-600 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Users className="h-12 w-12 text-white/80 mx-auto mb-4" />
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">{t.title}</h1>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto">{t.subtitle}</p>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="-mt-6 relative z-10">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="bg-white rounded-2xl shadow-xl p-6 grid grid-cols-3 gap-6">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-teal-600">{communities.length}</div>
                            <div className="text-stone-500 text-sm">{t.communities}</div>
                        </div>
                        <div className="text-center border-x border-stone-200">
                            <div className="text-3xl font-bold text-teal-600">{events.length}</div>
                            <div className="text-stone-500 text-sm">{t.events}</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-teal-600">10K+</div>
                            <div className="text-stone-500 text-sm">{t.members}</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Communities Section */}
            <section className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-stone-900">{t.communities}</h2>
                        <button className="text-teal-600 font-medium hover:text-teal-700 flex items-center gap-1">
                            {t.createCommunity} <ChevronRight className="h-4 w-4" />
                        </button>
                    </div>

                    {/* Category Filter */}
                    <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                        {categoryFilters.map(filter => (
                            <button
                                key={filter.id}
                                onClick={() => setSelectedCategory(filter.id)}
                                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${selectedCategory === filter.id
                                    ? 'bg-teal-600 text-white'
                                    : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
                                    }`}
                            >
                                {filter.label}
                            </button>
                        ))}
                    </div>

                    {/* Communities Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredCommunities.map((community) => {
                            const Icon = community.icon;
                            return (
                                <div key={community.id} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all border border-stone-100">
                                    <div className="flex items-start gap-4">
                                        <div className={`p-3 rounded-xl ${community.color}`}>
                                            <Icon className="h-6 w-6 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-bold text-stone-900">
                                                {community.name[lang as keyof typeof community.name] || community.name.en}
                                            </h3>
                                            <p className="text-sm text-stone-500 mt-1">
                                                {community.description[lang as keyof typeof community.description] || community.description.en}
                                            </p>
                                            <div className="flex items-center justify-between mt-4">
                                                <span className="text-sm text-stone-400">
                                                    <Users className="h-4 w-4 inline me-1" />
                                                    {community.members.toLocaleString()} {t.members}
                                                </span>
                                                <button className="text-sm font-medium text-teal-600 hover:text-teal-700 bg-teal-50 px-4 py-1.5 rounded-full">
                                                    {t.join}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Events Section */}
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-stone-900">{t.upcomingEvents}</h2>
                        <button className="text-teal-600 font-medium hover:text-teal-700 flex items-center gap-1">
                            {t.viewAll} <ChevronRight className="h-4 w-4" />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {events.map((event) => (
                            <div key={event.id} className="bg-stone-50 rounded-2xl overflow-hidden hover:shadow-lg transition-all border border-stone-100">
                                <img
                                    src={event.image}
                                    alt={event.title[lang as keyof typeof event.title] || event.title.en}
                                    className="w-full h-32 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="font-bold text-stone-900 line-clamp-2">
                                        {event.title[lang as keyof typeof event.title] || event.title.en}
                                    </h3>
                                    <div className="flex items-center gap-2 mt-3 text-sm text-stone-500">
                                        <Calendar className="h-4 w-4" />
                                        {formatDate(event.date)}
                                    </div>
                                    <div className="flex items-center gap-2 mt-1 text-sm text-stone-500">
                                        <Clock className="h-4 w-4" />
                                        {event.time}
                                    </div>
                                    <div className="flex items-center gap-2 mt-1 text-sm text-stone-500">
                                        <MapPin className="h-4 w-4" />
                                        {event.city}
                                    </div>
                                    <div className="mt-4 flex items-center justify-between">
                                        <span className="text-xs text-stone-400">
                                            {event.attendees} {t.attending}
                                        </span>
                                        <button className="text-sm font-medium text-white bg-teal-600 px-4 py-1.5 rounded-full hover:bg-teal-700">
                                            {t.attend}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer lang={lang} />
        </div>
    );
}
