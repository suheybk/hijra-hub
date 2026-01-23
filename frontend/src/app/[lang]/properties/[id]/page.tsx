
import PropertyDetailClient from "./PropertyDetailClient";

export default async function PropertyDetailPage({ params }: { params: Promise<{ lang: string; id: string }> }) {
    const { lang, id } = await params;

    return <PropertyDetailClient lang={lang} id={id} />;
}
