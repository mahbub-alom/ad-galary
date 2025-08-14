'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdPage = pathname?.startsWith('/ads/');

  return (
    <>
      {!isAdPage && <Navbar />}
      {children}
    </>
  );
}
