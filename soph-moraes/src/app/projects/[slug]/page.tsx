import { getAllProjects, getProjectBySlug } from "@/lib/api";
import { notFound } from "next/navigation";
import { renderRichText } from "@/utils/richText";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  const projects = (await getAllProjects()) || [];
  return projects.map((project) => ({
    slug: project.slug
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage(props: PageProps) {
  const { slug } = await props.params;
  const project = await getProjectBySlug(slug);

  if (!project) return notFound();
  return (
    <div className="bg-cream text-crimsonWine min-h-screen">
      {/* VOLTAR */}
      <div className="px-4 md:px-20 pt-10">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm hover:text-amberOrange transition"
        >
          <ArrowLeft size={16} />
          Voltar para projetos
        </Link>
      </div>

      {/* TÍTULO + IMAGEM DE DESTAQUE */}
      <section className="px-4 md:px-20 pt-10 pb-16">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-serif mb-2">
            {project.title}
          </h1>

          <p className="text-lg text-crimsonWine/70 mb-8">{project.category}</p>

          {project.image && (
            <div className="relative mx-auto w-full max-w-5xl aspect-[3/2] rounded-lg overflow-hidden shadow-lg group border">
              <Image
                src={project.image.url}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          )}
        </div>
      </section>

      {/* DESCRIÇÃO */}
      <section className="px-4 md:px-20 pb-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Sobre o projeto</h2>

          <div className="space-y-5 text-lg leading-relaxed">
            {renderRichText(project.description)}
          </div>

          {project.link && (
            <Link
              href={project.link}
              target="_blank"
              className="inline-block mt-8 text-amberOrange font-semibold underline hover:text-crimsonWine transition"
            >
              Ver projeto completo no Canva →
            </Link>
          )}
        </div>
      </section>

      {/* GALERIA */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="px-4 md:px-20 pb-28">
          <div className="max-w-6xl mx-auto">
            a<h2 className="text-2xl font-semibold mb-6">Galeria de imagens</h2>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              {project.gallery?.map((img) => (
                <div
                  key={img.id}
                  className="relative w-full aspect-[4/3] rounded-md overflow-hidden shadow group border cursor-pointer"
                >
                  <Image
                    src={img.url}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
