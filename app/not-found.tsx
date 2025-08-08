import Link from 'next/link';
import { Search, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="flex justify-center items-center bg-gray-50 min-h-screen">
      <div className="text-center">
        <Search className="mx-auto mb-4 w-16 h-16 text-gray-300" />
        <h1 className="mb-2 font-bold text-gray-900 text-4xl">404</h1>
        <h2 className="mb-4 font-semibold text-gray-700 text-xl">Page Not Found</h2>
        <p className="mb-8 max-w-md text-gray-600">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center space-x-2 bg-[#2596be] hover:bg-[#2596be] px-6 py-3 rounded-lg text-white transition-colors"
        >
          <Home className="w-4 h-4" />
          <span>Back to Gallery</span>
        </Link>
      </div>
    </main>
  );
}