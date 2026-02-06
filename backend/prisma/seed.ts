import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log('🌱 Seeding database with real property data from Saudi Arabia...');

    // Clear existing data
    await prisma.property.deleteMany();
    await prisma.user.deleteMany();

    // Create sample users
    const users = await Promise.all([
        prisma.user.create({
            data: {
                phone: '+966501234567',
                email: 'khalid@arkamsway.com',
                fullName: 'Khalid Al-Rashid',
                role: 'BROKER',
            },
        }),
        prisma.user.create({
            data: {
                phone: '+966509876543',
                email: 'fatima@arkamsway.com',
                fullName: 'Fatima Hassan',
                role: 'SELLER',
            },
        }),
        prisma.user.create({
            data: {
                phone: '+966551112233',
                email: 'omar@arkamsway.com',
                fullName: 'Omar Yilmaz',
                role: 'BUYER',
            },
        }),
    ]);

    // Real property data based on bayut.sa listings
    const properties = [
        // Jeddah Apartments
        {
            title: JSON.stringify({
                en: "Modern 5-Room Apartment in Al-Safa District",
                ar: "شقة جديدة مكونة من 5 غرف للبيع في حي الصفا بموقع مميز",
                tr: "Al-Safa Bölgesinde Modern 5 Odalı Daire"
            }),
            description: "Spacious 5-bedroom apartment in the heart of Al-Safa district, close to mosque and park. Excellent location with easy access to main roads and shopping centers.",
            price: 540000,
            currency: "SAR",
            type: "APARTMENT",
            status: "PUBLISHED",
            location: JSON.stringify({
                city: "Jeddah",
                address: "Abbas Ibn Ammar Street, Al-Safa, North Jeddah",
                lat: 21.5485,
                lng: 39.1728
            }),
            features: JSON.stringify({
                bedrooms: 5,
                bathrooms: 3,
                area: 163,
                parking: 1
            }),
            images: [
                "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800",
                "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800"
            ],
            ownerId: users[1].id,
        },
        {
            title: JSON.stringify({
                en: "5-Room Apartment in Al-Waha District - Competitive Price",
                ar: "شقة جديدة مكونة من 5 غرف للبيع بمخطط سندس في حي الواحة",
                tr: "Al-Waha Bölgesinde 5 Odalı Daire - Uygun Fiyat"
            }),
            description: "Brand new apartment in Sundus development, Al-Waha district. Modern design with high-quality finishes. Near all amenities and services.",
            price: 500000,
            currency: "SAR",
            type: "APARTMENT",
            status: "PUBLISHED",
            location: JSON.stringify({
                city: "Jeddah",
                address: "Abi Thabit Al-Madani Street, Al-Waha, North Jeddah",
                lat: 21.6234,
                lng: 39.1156
            }),
            features: JSON.stringify({
                bedrooms: 5,
                bathrooms: 3,
                area: 157,
                parking: 1
            }),
            images: [
                "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
                "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800"
            ],
            ownerId: users[1].id,
        },
        {
            title: JSON.stringify({
                en: "Luxurious 5-Room Apartment in Al-Mousa View",
                ar: "شقة جديدة مكونة من 5 غرف للبيع في مخطط الموسى فيو شمال مدينة جدة",
                tr: "Al-Mousa View'de Lüks 5 Odalı Daire"
            }),
            description: "Premium apartment in Al-Mousa View development, North Jeddah. Contemporary architecture with panoramic city views. Smart home features included.",
            price: 785000,
            currency: "SAR",
            type: "APARTMENT",
            status: "PUBLISHED",
            location: JSON.stringify({
                city: "Jeddah",
                address: "Al-Naba Street, North Jeddah",
                lat: 21.6512,
                lng: 39.1089
            }),
            features: JSON.stringify({
                bedrooms: 5,
                bathrooms: 4,
                area: 156,
                parking: 2
            }),
            images: [
                "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
                "https://images.unsplash.com/photo-1560185008-b033106af5c3?w=800"
            ],
            ownerId: users[0].id,
        },
        // Riyadh Villas
        {
            title: JSON.stringify({
                en: "Elegant Villa in Al-Arid District, Riyadh",
                ar: "فيلا للبيع في شارع محمد بن خالد, حي العارض, مدينة الرياض",
                tr: "Al-Arid Bölgesi'nde Şık Villa, Riyad"
            }),
            description: "Stunning villa in the prestigious Al-Arid district. Features modern design, private garden, and high-end finishes. Perfect for families seeking luxury living.",
            price: 2000000,
            currency: "SAR",
            type: "VILLA",
            status: "PUBLISHED",
            location: JSON.stringify({
                city: "Riyadh",
                address: "Mohammed bin Khalid Street, Al-Arid, North Riyadh",
                lat: 24.8407,
                lng: 46.6889
            }),
            features: JSON.stringify({
                bedrooms: 5,
                bathrooms: 5,
                area: 229,
                parking: 2
            }),
            images: [
                "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800",
                "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800"
            ],
            ownerId: users[0].id,
        },
        {
            title: JSON.stringify({
                en: "Spacious Villa in Al-Arid, North Riyadh",
                ar: "فيلا للبيع في العارض، شمال الرياض",
                tr: "Kuzey Riyad, Al-Arid'de Geniş Villa"
            }),
            description: "Exceptional villa with generous living spaces. Located in the sought-after Al-Arid neighborhood with easy access to King Salman Road. Modern architecture with traditional touches.",
            price: 2200000,
            currency: "SAR",
            type: "VILLA",
            status: "PUBLISHED",
            location: JSON.stringify({
                city: "Riyadh",
                address: "Sulaiman bin Murad Street, Al-Arid, North Riyadh",
                lat: 24.8423,
                lng: 46.6912
            }),
            features: JSON.stringify({
                bedrooms: 6,
                bathrooms: 5,
                area: 297,
                parking: 3
            }),
            images: [
                "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
                "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800"
            ],
            ownerId: users[1].id,
        },
        {
            title: JSON.stringify({
                en: "5-Bedroom Villa in Al-Narjis, Riyadh",
                ar: "فيلا مكونة من 5 غرف نوم للبيع في النرجس، الرياض",
                tr: "Riyad Al-Narjis'te 5 Yatak Odalı Villa"
            }),
            description: "Beautiful family villa in the Al-Narjis district. Features include a private pool, landscaped garden, and driver's room. Close to international schools.",
            price: 1900000,
            currency: "SAR",
            type: "VILLA",
            status: "PUBLISHED",
            location: JSON.stringify({
                city: "Riyadh",
                address: "Hamad Al-Arini Street, Al-Narjis, North Riyadh",
                lat: 24.8567,
                lng: 46.6723
            }),
            features: JSON.stringify({
                bedrooms: 5,
                bathrooms: 5,
                area: 296,
                parking: 2
            }),
            images: [
                "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
                "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800"
            ],
            ownerId: users[0].id,
        },
        {
            title: JSON.stringify({
                en: "Premium Villa in Al-Narjis District",
                ar: "فيلا مكونة من ٥ غرف نوم للبيع في النرجس، الرياض",
                tr: "Al-Narjis Bölgesinde Premium Villa"
            }),
            description: "Exquisite villa with premium finishes in the upscale Al-Narjis neighborhood. Features smart home technology, marble flooring, and a rooftop terrace with city views.",
            price: 2300000,
            currency: "SAR",
            type: "VILLA",
            status: "PUBLISHED",
            location: JSON.stringify({
                city: "Riyadh",
                address: "Al-Shihab Al-Khafaji Street, Al-Narjis, North Riyadh",
                lat: 24.8589,
                lng: 46.6745
            }),
            features: JSON.stringify({
                bedrooms: 5,
                bathrooms: 6,
                area: 250,
                parking: 2
            }),
            images: [
                "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800",
                "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800"
            ],
            ownerId: users[1].id,
        },
        {
            title: JSON.stringify({
                en: "Luxury Villa in Sedra, Riyadh",
                ar: "فيلا للبيع في سدرة، الرياض",
                tr: "Riyad Sedra'da Lüks Villa"
            }),
            description: "Grand villa in the exclusive Sedra community. Spanning over 450 sqm, this property offers unparalleled luxury with a private cinema, indoor pool, and gymnasium.",
            price: 2972500,
            currency: "SAR",
            type: "VILLA",
            status: "PUBLISHED",
            location: JSON.stringify({
                city: "Riyadh",
                address: "Street 1017, Sedra, Riyadh",
                lat: 24.7234,
                lng: 46.8123
            }),
            features: JSON.stringify({
                bedrooms: 7,
                bathrooms: 8,
                area: 459,
                parking: 4
            }),
            images: [
                "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800",
                "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=800"
            ],
            ownerId: users[0].id,
        },
        // Commercial Properties
        {
            title: JSON.stringify({
                en: "Commercial Building in Al-Olaya, Riyadh",
                ar: "مبنى تجاري للبيع في العليا، الرياض",
                tr: "Riyad Al-Olaya'da Ticari Bina"
            }),
            description: "Prime commercial property in Riyadh's business district. Ideal for offices or retail. High foot traffic area near Kingdom Tower.",
            price: 8500000,
            currency: "SAR",
            type: "COMMERCIAL",
            status: "PUBLISHED",
            location: JSON.stringify({
                city: "Riyadh",
                address: "Olaya Street, Al-Olaya, Riyadh",
                lat: 24.6912,
                lng: 46.6856
            }),
            features: JSON.stringify({
                bedrooms: 0,
                bathrooms: 10,
                area: 850,
                parking: 20
            }),
            images: [
                "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
                "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800"
            ],
            ownerId: users[0].id,
        },
        // Land
        {
            title: JSON.stringify({
                en: "Residential Land in Al-Madinah",
                ar: "أرض سكنية للبيع في المدينة المنورة",
                tr: "Medine'de Konut Arsası"
            }),
            description: "Prime residential land near Al-Masjid an-Nabawi. Excellent investment opportunity for those looking to build near the Prophet's Mosque.",
            price: 1200000,
            currency: "SAR",
            type: "LAND",
            status: "PUBLISHED",
            location: JSON.stringify({
                city: "Al Madinah",
                address: "Al-Awali District, Al Madinah",
                lat: 24.4672,
                lng: 39.6024
            }),
            features: JSON.stringify({
                bedrooms: 0,
                bathrooms: 0,
                area: 625,
                parking: 0
            }),
            images: [
                "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800",
                "https://images.unsplash.com/photo-1628744876497-eb30460be9f6?w=800"
            ],
            ownerId: users[1].id,
        },
    ];

    // Create properties
    for (const propertyData of properties) {
        await prisma.property.create({
            data: propertyData,
        });
    }

    console.log(`✅ Created ${users.length} users`);
    console.log(`✅ Created ${properties.length} properties`);
    console.log('🎉 Seed completed successfully!');
}

main()
    .catch((e) => {
        console.error('Seed error:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
