import { notFound } from "next/navigation";
import { getAdBySlug, getAdsMetadata } from "@/lib/ads";
import type { Metadata } from "next";

interface AdPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const metadata = await getAdsMetadata();
  return metadata.ads.map((ad) => ({
    slug: ad.slug,
  }));
}

export async function generateMetadata({
  params,
}: AdPageProps): Promise<Metadata> {
  const ad = await getAdBySlug(params?.slug);

  if (!ad) {
    return {
      title: "Ad Not Found - The Bridgers",
    };
  }

  return {
    title: `${ad.name} - The Bridgers`,
    description:
      ad.description ||
      `${ad.name} - A ${ad.category} advertisement by ${ad.brand}`,
    openGraph: {
      title: `${ad.name} - The Bridgers`,
      description:
        ad.description ||
        `${ad.name} - A ${ad.category} advertisement by ${ad.brand}`,
      images: [ad.previewImage],
    },
  };
}

export default async function AdPage({ params }: AdPageProps) {
  const ad = await getAdBySlug(params.slug);

  if (!ad) {
    notFound();
  }

  return (
    <main className="w-screen h-screen">
      <iframe
        src={`/ads-data/ads/${ad.slug}/index.html`}
        className="border-0 w-full h-full"
        title={ad.name}
        allowFullScreen
      />
    </main>
  );
}
