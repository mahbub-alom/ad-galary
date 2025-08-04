import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, Tag, Monitor, HardDrive } from 'lucide-react';
import { getAdBySlug, getAdsMetadata } from '@/lib/ads';
import type { Metadata } from 'next';

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

export async function generateMetadata({ params }: AdPageProps): Promise<Metadata> {
  const ad = await getAdBySlug(params.slug);
  
  if (!ad) {
    return {
      title: 'Ad Not Found - The Bridgers',
    };
  }

  return {
    title: `${ad.name} - The Bridgers`,
    description: ad.description || `${ad.name} - A ${ad.category} advertisement by ${ad.brand}`,
    openGraph: {
      title: `${ad.name} - The Bridgers`,
      description: ad.description || `${ad.name} - A ${ad.category} advertisement by ${ad.brand}`,
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
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Navigation */}
        <div className="mb-6">
          <Link 
            href="/" 
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Gallery</span>
          </Link>
        </div>

        {/* Ad Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{ad.name}</h1>
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <Tag className="h-4 w-4" />
              <span>{ad.brand}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>{new Date(ad.creationDate).toLocaleDateString()}</span>
            </div>
            <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
              {ad.category}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Ad Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
              <div className="aspect-video bg-gray-100 relative">
                <iframe
                  src={`/ads-data/ads/${ad.slug}/index.html`}
                  className="w-full h-full border-0"
                  title={ad.name}
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          {/* Ad Metadata */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Ad Details</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <Tag className="h-4 w-4 text-gray-500" />
                    <span className="text-sm font-medium text-gray-700">Brand</span>
                  </div>
                  <p className="text-sm text-gray-900 ml-6">{ad.brand}</p>
                </div>

                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <Tag className="h-4 w-4 text-gray-500" />
                    <span className="text-sm font-medium text-gray-700">Category</span>
                  </div>
                  <p className="text-sm text-gray-900 ml-6">{ad.category}</p>
                </div>

                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <Monitor className="h-4 w-4 text-gray-500" />
                    <span className="text-sm font-medium text-gray-700">Dimensions</span>
                  </div>
                  <p className="text-sm text-gray-900 ml-6">{ad.dimensions}</p>
                </div>

                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <HardDrive className="h-4 w-4 text-gray-500" />
                    <span className="text-sm font-medium text-gray-700">File Size</span>
                  </div>
                  <p className="text-sm text-gray-900 ml-6">{ad.fileSize}</p>
                </div>

                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <Calendar className="h-4 w-4 text-gray-500" />
                    <span className="text-sm font-medium text-gray-700">Created</span>
                  </div>
                  <p className="text-sm text-gray-900 ml-6">
                    {new Date(ad.creationDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
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