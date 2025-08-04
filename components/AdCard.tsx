'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Ad } from '@/types/ad';
import { Eye, Calendar, Tag } from 'lucide-react';

interface AdCardProps {
  ad: Ad;
}

export default function AdCard({ ad }: AdCardProps) {
  return (
    <div className="group relative bg-white rounded-lg shadow-sm border hover:shadow-md transition-all duration-300 overflow-hidden">
      {/* Ad Preview */}
      <div className="relative aspect-video bg-gray-100 overflow-hidden">
        <Image
          src={ad.previewImage}
          alt={ad.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Link
            href={`/ads/${ad.slug}`}
            className="bg-white text-gray-900 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors flex items-center space-x-2"
          >
            <Eye className="h-4 w-4" />
            <span>View Ad</span>
          </Link>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          <Link href={`/ads/${ad.slug}`} className="line-clamp-2">
            {ad.name}
          </Link>
        </h3>
        
        <div className="space-y-2">
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <Tag className="h-4 w-4" />
              <span>{ad.brand}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>{new Date(ad.creationDate).toLocaleDateString()}</span>
            </div>
          </div>
          
          <div className="flex justify-between items-center text-sm">
            <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
              {ad.category}
            </span>
            <span className="text-gray-500">{ad.dimensions}</span>
          </div>
        </div>
      </div>
    </div>
  );
}