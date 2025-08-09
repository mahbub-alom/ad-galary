import { Ad, AdMetadata } from '@/types/ad';

export async function getAdsMetadata(): Promise<AdMetadata> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const response = await fetch(`${baseUrl}/ads-data/ads-metadata.json`);
    if (!response.ok) {
      throw new Error('Failed to fetch ads metadata');
    }
    return await response.json();
    
  } catch (error) {
    console.error('Error fetching ads metadata:', error);
    return { ads: [], brands: [], categories: [] };
  }
}


export async function getAdBySlug(slug: string): Promise<Ad | null> {
  try {
    const metadata = await getAdsMetadata();
   
    return metadata.ads.find(ad => ad.slug === slug) || null;
  } catch (error) {
    console.error('Error fetching ad by slug:', error);
    return null;
  }
}

export function filterAds(ads: Ad[], brands: string[], categories: string[]): Ad[] {
  return ads.filter(ad => {
    const brandMatch = brands.length === 0 || brands.includes(ad.brand);
    const categoryMatch = categories.length === 0 || categories.includes(ad.category);
    return brandMatch && categoryMatch;
  });
}