import AboutSection from "@/components/layout/about/aboutSection";
import Header from "@/components/layout/hero/header";
import HeroSection from "@/components/layout/hero/heroSection";
import ServicesSection from "@/components/layout/services/servicesSection";
import ProjectsSection from "@/components/layout/projects/projects";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      {/* Decoration para hero e about */}
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      {/* <ContactSection /> */}
    </>
  );
}
