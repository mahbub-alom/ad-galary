'use client';

import { FilterState } from '@/types/ad';
import { Filter, X } from 'lucide-react';

interface FilterSidebarProps {
  brands: string[];
  categories: string[];
  filters: FilterState;
  onFilterChange: (filters: Partial<FilterState>) => void;
  onClearFilters: () => void;
}

export default function FilterSidebar({
  brands,
  categories,
  filters,
  onFilterChange,
  onClearFilters
}: FilterSidebarProps) {
  const handleBrandChange = (brand: string, checked: boolean) => {
    const newBrands = checked
      ? [...filters.brands, brand]
      : filters.brands.filter(b => b !== brand);
    onFilterChange({ brands: newBrands });
  };

  const handleCategoryChange = (category: string, checked: boolean) => {
    const newCategories = checked
      ? [...filters.categories, category]
      : filters.categories.filter(c => c !== category);
    onFilterChange({ categories: newCategories });
  };

  const hasActiveFilters = filters.brands.length > 0 || filters.categories.length > 0;

  return (
    <div className="bg-white rounded-lg shadow-sm border h-fit sticky top-24">
      <div className="p-6 border-b">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-gray-600" />
            <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
          </div>
          {hasActiveFilters && (
            <button
              onClick={onClearFilters}
              className="flex items-center space-x-1 text-sm text-blue-600 hover:text-blue-700 transition-colors"
            >
              <X className="h-4 w-4" />
              <span>Clear</span>
            </button>
          )}
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Brand Filters */}
        <div>
          <h4 className="text-sm font-medium text-gray-900 mb-3">Brands</h4>
          <div className="space-y-2 max-h-48 overflow-y-auto custom-scrollbar">
            {brands.map(brand => (
              <label key={brand} className="flex items-center space-x-2 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={filters.brands.includes(brand)}
                  onChange={(e) => handleBrandChange(brand, e.target.checked)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 focus:ring-2"
                />
                <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors">
                  {brand}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Category Filters */}
        <div>
          <h4 className="text-sm font-medium text-gray-900 mb-3">Categories</h4>
          <div className="space-y-2 max-h-48 overflow-y-auto custom-scrollbar">
            {categories.map(category => (
              <label key={category} className="flex items-center space-x-2 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={filters.categories.includes(category)}
                  onChange={(e) => handleCategoryChange(category, e.target.checked)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 focus:ring-2"
                />
                <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors">
                  {category}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}