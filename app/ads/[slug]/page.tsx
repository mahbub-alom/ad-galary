import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Tag, Monitor, HardDrive } from "lucide-react";
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
  console.log("slag ahere ",params.slug);
  const ad = await getAdBySlug(params.slug);

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
    <main className="bg-gray-50 min-h-screen">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-6xl">
        {/* Back Navigation */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Gallery</span>
          </Link>
        </div>

        {/* Ad Title */}
        <div className="mb-8">
          <h1 className="mb-2 font-bold text-gray-900 text-3xl">{ad.name}</h1>
          <div className="flex items-center space-x-4 text-gray-600 text-sm">
            <div className="flex items-center space-x-1">
              <Tag className="w-4 h-4" />
              <span>{ad.brand}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>{new Date(ad.creationDate).toLocaleDateString()}</span>
            </div>
            <span className="bg-blue-100 px-2 py-1 rounded-full font-medium text-blue-800 text-xs">
              {ad.category}
            </span>
          </div>
        </div>

        <div className="gap-8 grid grid-cols-1 lg:grid-cols-4">
          {/* Ad Content */}
          <div className="lg:col-span-3">
            <div className="bg-white shadow-sm border rounded-lg overflow-hidden">
              <div className="relative bg-gray-100 aspect-video">
                <iframe
                  src={`/ads-data/ads/${ad.slug}/index.html`}
                  className="border-0 w-full h-full"
                  title={ad.name}
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          {/* Ad Metadata */}
          <div className="lg:col-span-1">
            <div className="bg-white shadow-sm p-6 border rounded-lg">
              <h3 className="mb-4 font-semibold text-gray-900 text-lg">
                Ad Details
              </h3>

              <div className="space-y-4">
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <Tag className="w-4 h-4 text-gray-500" />
                    <span className="font-medium text-gray-700 text-sm">
                      Brand
                    </span>
                  </div>
                  <p className="ml-6 text-gray-900 text-sm">{ad.brand}</p>
                </div>

                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <Tag className="w-4 h-4 text-gray-500" />
                    <span className="font-medium text-gray-700 text-sm">
                      Category
                    </span>
                  </div>
                  <p className="ml-6 text-gray-900 text-sm">{ad.category}</p>
                </div>

                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <Monitor className="w-4 h-4 text-gray-500" />
                    <span className="font-medium text-gray-700 text-sm">
                      Dimensions
                    </span>
                  </div>
                  <p className="ml-6 text-gray-900 text-sm">{ad.dimensions}</p>
                </div>

                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <HardDrive className="w-4 h-4 text-gray-500" />
                    <span className="font-medium text-gray-700 text-sm">
                      File Size
                    </span>
                  </div>
                  <p className="ml-6 text-gray-900 text-sm">{ad.fileSize}</p>
                </div>

                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span className="font-medium text-gray-700 text-sm">
                      Created
                    </span>
                  </div>
                  <p className="ml-6 text-gray-900 text-sm">
                    {new Date(ad.creationDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
