const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
    console.log('Seeding database...');

    // Create a Seller User
    const seller = await prisma.user.upsert({
        where: { phone: '+966500000000' },
        update: {},
        create: {
            phone: '+966500000000',
            fullName: 'Abu Fahad Real Estate',
            role: 'SELLER',
            email: 'fahad@example.com',
        },
    });

    console.log('Created Vendor:', seller.fullName);

    // Properties Data
    const properties = [
        {
            title: 'Luxury Villa in Al Malqa',
            description: 'Modern 5-bedroom villa with pool and smart home features. Located in the heart of Northern Riyadh.',
            price: 4500000.0,
            location: {
                lat: 24.8123,
                lng: 46.6231,
                address: 'Al Malqa, Riyadh',
                city: 'Riyadh'
            },
            type: 'VILLA',
            features: {
                bedrooms: 5,
                bathrooms: 6,
                area: 450,
                parking: 2
            },
            images: JSON.stringify([
                'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80',
                'https://images.unsplash.com/photo-1613490493576-2f5033190119?auto=format&fit=crop&q=80'
            ]),
            status: 'PUBLISHED',
            ownerId: seller.id,
        },
        {
            title: 'Modern Apartment in Jeddah Corniche',
            description: 'Sea view apartment, 3 bedrooms, high floor. Direct access to Red Sea mall.',
            price: 1200000.0,
            location: {
                lat: 21.6123,
                lng: 39.1231,
                address: 'Ash Shati, Jeddah',
                city: 'Jeddah'
            },
            type: 'APARTMENT',
            features: {
                bedrooms: 3,
                bathrooms: 3,
                area: 180,
                parking: 1
            },
            images: JSON.stringify([
                'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80'
            ]),
            status: 'PUBLISHED',
            ownerId: seller.id,
        },
    ];

    for (const prop of properties) {
        const p = await prisma.property.create({
            data: prop,
        });
        console.log(`Created property: ${p.title}`);
    }
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
