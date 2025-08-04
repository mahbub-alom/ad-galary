'use client';

import { useState, useEffect } from 'react';
import { Ad, AdMetadata, FilterState } from '@/types/ad';
import { getAdsMetadata, filterAds } from '@/lib/ads';

export function useAds() {
  const [metadata, setMetadata] = useState<AdMetadata>({ ads: [], brands: [], categories: [] });
  const [filteredAds, setFilteredAds] = useState<Ad[]>([]);
  const [filters, setFilters] = useState<FilterState>({ brands: [], categories: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchAds() {
      try {
        setLoading(true);
        const data = await getAdsMetadata();
        setMetadata(data);
        setFilteredAds(data.ads);
        setError(null);
      } catch (err) {
        setError('Failed to load ads');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchAds();
  }, []);

  useEffect(() => {
    const filtered = filterAds(metadata.ads, filters.brands, filters.categories);
    setFilteredAds(filtered);
  }, [metadata.ads, filters]);

  const updateFilters = (newFilters: Partial<FilterState>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const clearFilters = () => {
    setFilters({ brands: [], categories: [] });
  };

  return {
    ads: filteredAds,
    metadata,
    filters,
    loading,
    error,
    updateFilters,
    clearFilters
  };
}