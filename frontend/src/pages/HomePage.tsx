import { Hero } from '@/components/Hero';
import { StatsCards } from '@/components/StatsCards';
import { FeatureGrid } from '@/components/FeatureGrid';
import { CompanyFooter } from '@/components/CompanyFooter';

export function HomePage() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-slate-50">
      <Hero />
      <StatsCards />
      <FeatureGrid />
      <CompanyFooter />
    </div>
  );
}
