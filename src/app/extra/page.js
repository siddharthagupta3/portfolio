'use client';

// import ThreeBox from '/src/components/ThreeBox';
import dynamic from 'next/dynamic';
const ThreeBox = dynamic(() => import('../../components/ThreeBox'), {
  ssr: false,
});
import Footer from '../../components/Footer';


export default function ExtraPage() {
  return (

    <>
      <ThreeBox />

      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold text-primary">Extra Content !! Page is under maintainence</h1>
      </div>

      {/* Footer Component */}
      <div className="relative z-10">
        <Footer />
      </div>

    </>
  );
}
