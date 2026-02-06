import PropertyDetailClient from "./PropertyDetailClient";

// Static params for dynamic route - generates placeholder routes
// Actual property data is fetched client-side
export function generateStaticParams() {
    // Pre-generate pages for these property IDs
    // These are sample IDs from seed data
    const propertyIds = [
        'prop-001',
        'prop-002',
        'prop-003',
        'prop-004',
        'prop-005',
        'prop-006',
        'prop-007',
        'prop-008',
    ];

    const langs = ['en', 'ar', 'tr'];
    const params: { lang: string; id: string }[] = [];

    for (const lang of langs) {
        for (const id of propertyIds) {
            params.push({ lang, id });
        }
    }

    return params;
}

export default async function PropertyDetailPage({ params }: { params: Promise<{ lang: string; id: string }> }) {
    const { lang, id } = await params;

    return <PropertyDetailClient lang={lang} id={id} />;
}
