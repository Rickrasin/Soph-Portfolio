import AboutSection from "@/components/layout/about/aboutSection";
import Header from "@/components/layout/hero/header";
import HeroSection from "@/components/layout/hero/heroSection";
import ServicesSection from "@/components/layout/services/servicesSection";
import ProjectsSection from "@/components/layout/projects/projects";
import { getAllProjects } from "@/lib/api";
import ContactSection from "@/components/layout/contact/contactSection";
import FooterSection from "@/components/layout/footer/footerSection";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const projects = await getAllProjects();

  return (
    <>
      <Header />
      <HeroSection />
      {/* Decoration para hero e about */}
      <AboutSection />
      <ServicesSection />
      <ProjectsSection projects={projects} />
      <ContactSection />
      <FooterSection />
    </>
  );
}
