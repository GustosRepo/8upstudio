import { Hero } from "@/components/home/Hero";
import { EditorialStatement } from "@/components/home/EditorialStatement";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { ServicesShowcase } from "@/components/home/ServicesShowcase";
import { Differentiator } from "@/components/home/Differentiator";
import { CaseStudySection } from "@/components/home/CaseStudySection";
import { MonthlyContent } from "@/components/home/MonthlyContent";
import { AboutPreview } from "@/components/home/AboutPreview";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <EditorialStatement />
      <FeaturedWork />
      <ServicesShowcase />
      <Differentiator />
      <CaseStudySection />
      <MonthlyContent />
      <AboutPreview />
      <FinalCTA />
    </>
  );
}
