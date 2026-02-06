import MarketplaceClient from "./MarketplaceClient";

export function generateStaticParams() {
    return [{ lang: 'en' }, { lang: 'ar' }, { lang: 'tr' }];
}

export default async function MarketplacePage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    return <MarketplaceClient lang={lang} />;
}
