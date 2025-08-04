'use client';

import { useAds } from '@/hooks/useAds';
import FilterSidebar from '@/components/FilterSidebar';
import AdGrid from '@/components/AdGrid';

export default function Home() {
  const { ads, metadata, filters, loading, error, updateFilters, clearFilters } = useAds();

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Creative Ad Gallery</h1>
          <p className="text-gray-600">
            Discover our collection of innovative advertisements across multiple brands and categories.
          </p>
        </div>

        {/* Layout Container */}
        <div className="flex flex-col lg:flex-row gap-8">
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
            {/* Results Summary */}
            {!loading && !error && (
              <div className="mb-6 flex items-center justify-between">
                <p className="text-sm text-gray-600">
                  Showing {ads.length} of {metadata.ads.length} ads
                </p>
                {(filters.brands.length > 0 || filters.categories.length > 0) && (
                  <div className="flex items-center space-x-2 text-sm">
                    <span className="text-gray-500">Filtered by:</span>
                    {filters.brands.map(brand => (
                      <span key={brand} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                        {brand}
                      </span>
                    ))}
                    {filters.categories.map(category => (
                      <span key={category} className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                        {category}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Ad Grid */}
            <AdGrid ads={ads} loading={loading} error={error} />
          </div>
        </div>
      </div>
    </main>
  );
}