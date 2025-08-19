import { notFound } from "next/navigation";
import { getAdBySlug, getAdsMetadata } from "@/lib/ads";
import type { Metadata } from "next";

interface AdPageProps {
  params: Promise<{ slug: string }>; // <- params is now a Promise
}

export async function generateMetadata({ params }: AdPageProps): Promise<Metadata> {
  const { slug } = await params; // <- await params
  const ad = await getAdBySlug(slug);

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
  const { slug } = await params; // <- await params
  const ad = await getAdBySlug(slug);

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
