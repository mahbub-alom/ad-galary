'use client';

import { useState } from 'react';
import { Ad } from '@/types/ad';
import AdCard from './AdCard';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';
import SkeletonGrid, { SkeletonCard } from './SkeletonGrid';

interface AdGridProps {
  ads: Ad[];
  loading: boolean;
  error: string | null;
}

const ITEMS_PER_PAGE = 10;
const MAX_VISIBLE_PAGES = 9;

export default function AdGrid({ ads, loading, error }: AdGridProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [skeletonLoading, setSkeletonLoading] = useState(false);

  const totalPages = Math.ceil(ads.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentAds = ads.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage) return;
    setSkeletonLoading(true);
    setTimeout(() => {
      setCurrentPage(page);
      setSkeletonLoading(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 500);
  };

  const getPageNumbers = () => {
    const chunkIndex = Math.floor((currentPage - 1) / MAX_VISIBLE_PAGES);
    const startPage = chunkIndex * MAX_VISIBLE_PAGES + 1;
    const endPage = Math.min(startPage + MAX_VISIBLE_PAGES - 1, totalPages);

    let pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };

  if (loading) return <SkeletonGrid />;

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
    <div className="space-y-6">
      {/* Ad Grid */}
      <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {skeletonLoading
          ? Array.from({ length: ITEMS_PER_PAGE }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          : currentAds.map((ad) => <AdCard key={ad.id} ad={ad} />)}
      </div>

      {/* Pagination Controls */}
      <div className="flex flex-wrap justify-center gap-2 pt-6">
        {/* Prev Button */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="bg-white hover:bg-gray-100 disabled:opacity-50 px-3 py-2 border border-gray-300 rounded text-gray-800 transition disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Numbered Buttons */}
        {getPageNumbers().map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            className={`px-4 py-2 rounded border ${
              currentPage === pageNumber
                ? 'bg-[#2596be] text-white border-[#0F828C]'
                : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-100'
            } transition`}
          >
            {pageNumber}
          </button>
        ))}

        {/* Next Button */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="bg-white hover:bg-gray-100 disabled:opacity-50 px-3 py-2 border border-gray-300 rounded text-gray-800 transition disabled:cursor-not-allowed"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
