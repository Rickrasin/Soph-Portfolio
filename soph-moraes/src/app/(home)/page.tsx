import AboutSection from "@/components/layout/about/aboutSection";
import Header from "@/components/layout/hero/header";
import HeroSection from "@/components/layout/hero/heroSection";
import ServicesSection from "@/components/layout/services/servicesSection";
import ProjectsSection from "@/components/layout/projects/projects";
import { getAllProjects } from "@/lib/api";
import ContactSection from "@/components/layout/contact/contactSection";
import FooterSection from "@/components/layout/footer/footerSection";
import { getHomeHero } from "@/lib/strapi-hero";

export default async function HomePage() {
  const projects = await getAllProjects();
  const hero = await getHomeHero();


  // Fallback simples se não tiver conteúdo publicado
  if (!hero) {
    return (
      <main className="px-4 md:px-20 py-16">
        <h1 className="text-3xl font-bold">Conteúdo em breve</h1>
        <p className="text-neutral-600 mt-2">Publique o Single Type “home-page” no Strapi.</p>
      </main>
    );
  }

  return (
    <>
      <Header />
      <HeroSection hero={hero} />
      {/* Decoration para hero e about */}
      <AboutSection />
      <ServicesSection />
      <ProjectsSection projects={projects} />
      <ContactSection />
      <FooterSection />
    </>
  );
}
