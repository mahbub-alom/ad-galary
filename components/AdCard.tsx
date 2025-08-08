"use client";

import Link from "next/link";
import Image from "next/image";
import { Ad } from "@/types/ad";
import { Eye, Calendar, Tag } from "lucide-react";

interface AdCardProps {
  ad: Ad;
}

export default function AdCard({ ad }: AdCardProps) {
  return (
    <div className="group relative bg-white shadow-sm hover:shadow-md border rounded-lg overflow-hidden transition-all duration-300">
      {/* Ad Preview */}
      <div className="relative bg-gray-100 aspect-video overflow-hidden">
        <Image
          src={ad.previewImage}
          alt={ad.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 flex justify-center items-center bg-white/30 opacity-0 group-hover:opacity-100 backdrop-blur-sm transition-opacity duration-300">
          <Link
            href={`/ads/${ad.slug}`}
            className="flex items-center space-x-2 bg-white hover:bg-gray-100 px-6 py-2 rounded-full font-medium text-gray-900 transition-colors"
          >
            <Eye className="w-4 h-4" />
            <span>View Ad</span>
          </Link>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4">
        <h3 className="mb-2 font-semibold text-gray-900 group-hover:text-blue-600 text-lg transition-colors">
          <Link href={`/ads/${ad.slug}`} className="line-clamp-2">
            {ad?.brand}: {ad?.name}
          </Link>
        </h3>

        {/* <div className="space-y-2">
          <div className="flex items-center space-x-4 text-gray-600 text-sm">
            <div className="flex items-center space-x-1">
              <Tag className="w-4 h-4" />
              <span>{ad.brand}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>{new Date(ad.creationDate).toLocaleDateString()}</span>
            </div>
          </div>
          
          <div className="flex justify-between items-center text-sm">
            <span className="bg-blue-100 px-2 py-1 rounded-full font-medium text-blue-800 text-xs">
              {ad.category}
            </span>
            <span className="text-gray-500">{ad.dimensions}</span>
          </div>
        </div> */}
      </div>
    </div>
  );
}
