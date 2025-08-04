export interface Ad {
  id: string;
  name: string;
  slug: string;
  brand: string;
  category: string;
  dimensions: string;
  fileSize: string;
  creationDate: string;
  filePath: string;
  previewImage: string;
  description?: string;
}

export interface AdMetadata {
  ads: Ad[];
  brands: string[];
  categories: string[];
}

export interface FilterState {
  brands: string[];
  categories: string[];
}