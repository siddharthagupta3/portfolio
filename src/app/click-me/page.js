'use client';

import dynamic from 'next/dynamic';
import Footer from '../../components/Footer';

// ✅ Dynamically import ThreeBox with SSR disabled
const ThreeBox = dynamic(() => import('../../components/ThreeBox'), {
  ssr: false,
});

export default function ClickMePage() {
  return (
    <>
      <ThreeBox />

      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold text-primary">You Clicked Me! !! Page is under maintenance</h1>
      </div>
      <div className="w-full h-20"></div>

      {/* Footer Component */}
      <div className="relative z-10">
        <Footer />
      </div>
    </>
  );
}
