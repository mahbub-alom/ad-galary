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
    <div className="top-24 sticky bg-white shadow-sm border rounded-lg h-fit">
      <div className="p-6 border-b">
        <div className="flex justify-between items-center">
    
          {hasActiveFilters && (
            <button
              onClick={onClearFilters}
              className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 text-sm transition-colors"
            >
              <X className="w-4 h-4" />
              <span>Clear</span>
            </button>
          )}
        </div>
      </div>

      <div className="space-y-6 p-6">
        {/* Brand Filters */}
        <div>
          <h4 className="mb-3 font-medium text-gray-900 text-sm">Brands</h4>
          <div className="space-y-2 max-h-48 overflow-y-auto custom-scrollbar">
            {brands.map(brand => (
              <label key={brand} className="group flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.brands.includes(brand)}
                  onChange={(e) => handleBrandChange(brand, e.target.checked)}
                  className="border-gray-300 rounded focus:ring-2 focus:ring-blue-500 text-blue-600"
                />
                <span className="text-gray-700 group-hover:text-gray-900 text-sm transition-colors">
                  {brand}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Category Filters */}
        <div>
          <h4 className="mb-3 font-medium text-gray-900 text-sm">Categories</h4>
          <div className="space-y-2 max-h-48 overflow-y-auto custom-scrollbar">
            {categories.map(category => (
              <label key={category} className="group flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.categories.includes(category)}
                  onChange={(e) => handleCategoryChange(category, e.target.checked)}
                  className="border-gray-300 rounded focus:ring-2 focus:ring-blue-500 text-blue-600"
                />
                <span className="text-gray-700 group-hover:text-gray-900 text-sm transition-colors">
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