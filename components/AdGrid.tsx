'use client';

import { Ad } from '@/types/ad';
import AdCard from './AdCard';
import { Search } from 'lucide-react';

interface AdGridProps {
  ads: Ad[];
  loading: boolean;
  error: string | null;
}

export default function AdGrid({ ads, loading, error }: AdGridProps) {
  if (loading) {
    return (
      <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="bg-white shadow-sm border rounded-lg overflow-hidden animate-pulse">
            <div className="bg-gray-200 aspect-video" />
            <div className="space-y-3 p-4">
              <div className="bg-gray-200 rounded w-3/4 h-4" />
              <div className="bg-gray-200 rounded w-1/2 h-3" />
              <div className="flex justify-between">
                <div className="bg-gray-200 rounded w-1/4 h-3" />
                <div className="bg-gray-200 rounded w-1/4 h-3" />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-12 text-center">
        <div className="mb-2 font-medium text-red-500 text-lg">Error Loading Ads</div>
        <p className="text-gray-600">{error}</p>
      </div>
    );
  }

  if (ads.length === 0) {
    return (
      <div className="py-12 text-center">
        <Search className="mx-auto mb-4 w-16 h-16 text-gray-300" />
        <h3 className="mb-2 font-medium text-gray-900 text-lg">No ads found</h3>
        <p className="text-gray-600">Try adjusting your filters to see more results.</p>
      </div>
    );
  }

  return (
    <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {ads.map(ad => (
        <AdCard key={ad.id} ad={ad} />
      ))}
    </div>
  );
}