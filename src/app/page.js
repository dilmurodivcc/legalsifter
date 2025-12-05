import Header from '@/sections/Header';
import Hero from '@/sections/Hero';
import Features from '@/sections/Features';
import Roadmap from '@/sections/Roadmap';
import Infrastructure from '@/sections/Infrastructure';
import IntegratedWith from '@/sections/IntegratedWith';
import AsSeenOn from '@/sections/AsSeenOn';
import FAQ from '@/sections/FAQ';
import Perspectives from '@/sections/Perspectives';
import Footer from '@/sections/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <Roadmap />
      <Infrastructure />
      <IntegratedWith />
      <AsSeenOn />
      <FAQ />
      <Perspectives />
      <Footer />
    </main>
  );
}
