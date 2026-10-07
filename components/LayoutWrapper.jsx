'use client';

import { usePathname } from 'next/navigation';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const isLanding = pathname.startsWith('/landing');

  return (
    <>
      {!isLanding && <Header />}
      {children}
      {!isLanding && <Footer />}
    </>
  );
}