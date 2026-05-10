import { FeaturedProjectsSection } from "@/features/home/sections/FeaturedProjectsSection";
import { HeroSection } from "@/features/home/sections/HeroSection";
import { LatestBlogSection } from "@/features/home/sections/LatestBlogSection";
import { PersonalitySection } from "@/features/home/sections/PersonalitySection";
import { SkillsSection } from "@/features/home/sections/SkillsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProjectsSection />
      <LatestBlogSection />
      <SkillsSection />
      <PersonalitySection />
    </>
  );
}
