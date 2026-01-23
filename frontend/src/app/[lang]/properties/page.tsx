
import PropertiesClient from "./PropertiesClient";

export default async function PropertiesPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;

    return <PropertiesClient lang={lang} />;
}
