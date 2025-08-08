'use client';

import { useAds } from '@/hooks/useAds';
import FilterSidebar from '@/components/FilterSidebar';
import AdGrid from '@/components/AdGrid';

export default function Home() {
  const { ads, metadata, filters, loading, error, updateFilters, clearFilters } = useAds();

  return (
    <main className="bg-gray-50 min-h-screen">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-2 font-bold text-[#0F828C] text-3xl">Creative Ad Gallery</h1>
          <p className="text-gray-600">
            Discover our collection of innovative advertisements across multiple brands and categories.
          </p>
        </div>

        {/* Layout Container */}
        <div className="flex lg:flex-row flex-col gap-8">
          {/* Sidebar - Desktop: 25%, Mobile: full width */}
          <aside className="lg:w-1/4">
            <FilterSidebar
              brands={metadata.brands}
              categories={metadata.categories}
              filters={filters}
              onFilterChange={updateFilters}
              onClearFilters={clearFilters}
            />
          </aside>

          {/* Main Content - Desktop: 75%, Mobile: full width */}
          <div className="lg:w-3/4">
            {/* Ad Grid */}
            <AdGrid ads={ads} loading={loading} error={error} />
          </div>
        </div>
      </div>
    </main>
  );
}