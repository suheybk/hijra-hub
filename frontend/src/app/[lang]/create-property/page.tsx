
import CreatePropertyClient from "./CreatePropertyClient";

export default async function CreatePropertyPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    return <CreatePropertyClient lang={lang} />;
}
