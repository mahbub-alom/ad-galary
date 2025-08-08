'use client';

import { FilterState } from '@/types/ad';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ScrollArea } from '@/components/ui/scroll-area';
import { X } from 'lucide-react';

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
  onClearFilters,
}: FilterSidebarProps) {
  const handleBrandChange = (brand: string, checked: boolean) => {
    const newBrands = checked
      ? [...filters.brands, brand]
      : filters.brands.filter((b) => b !== brand);
    onFilterChange({ brands: newBrands });
  };

  const handleCategoryChange = (category: string, checked: boolean) => {
    const newCategories = checked
      ? [...filters.categories, category]
      : filters.categories.filter((c) => c !== category);
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
              className="flex items-center space-x-1 text-[#0F828C] hover:text-[#06eaff] text-sm transition-colors"
            >
              <X className="w-4 h-4" />
              <span>Clear</span>
            </button>
          )}
        </div>
      </div>

      <div className="p-6">
        <Accordion type="multiple" defaultValue={['brands', 'categories']} className="space-y-4 w-full">
          {/* Brands Accordion */}
          <AccordionItem value="brands">
            <AccordionTrigger className="font-medium text-gray-900 text-sm">Brands</AccordionTrigger>
            <AccordionContent>
              <ScrollArea className="pr-2 max-h-48">
                <div className="space-y-2">
                  {brands.map((brand) => (
                    <label key={brand} className="group flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={filters.brands.includes(brand)}
                        onChange={(e) => handleBrandChange(brand, e.target.checked)}
                        className="border-gray-300 rounded focus:ring-[#0F828C] focus:ring-2 text-[#0F828C]"
                      />
                      <span className="text-gray-700 group-hover:text-gray-900 text-sm transition-colors">
                        {brand}
                      </span>
                    </label>
                  ))}
                </div>
              </ScrollArea>
            </AccordionContent>
          </AccordionItem>

          {/* Categories Accordion */}
          <AccordionItem value="categories">
            <AccordionTrigger className="font-medium text-gray-900 text-sm">Categories</AccordionTrigger>
            <AccordionContent>
              <ScrollArea className="pr-2 max-h-48">
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label key={category} className="group flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={filters.categories.includes(category)}
                        onChange={(e) => handleCategoryChange(category, e.target.checked)}
                        className="border-gray-300 rounded focus:ring-[#0F828C] focus:ring-2 text-[#0F828C]"
                      />
                      <span className="text-gray-700 group-hover:text-gray-900 text-sm transition-colors">
                        {category}
                      </span>
                    </label>
                  ))}
                </div>
              </ScrollArea>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
