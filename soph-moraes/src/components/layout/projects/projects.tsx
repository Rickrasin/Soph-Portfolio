"use client";

import Image from "next/image";
import Link from "next/link";
import { ImageIcon } from "lucide-react";
import { extractPlainText, truncateText } from "@/utils/richText";
import { Project } from "@/types/project";
import { useState } from "react";

interface Props {
  projects: Project[];
}

const categories = [
  "Todos",
  "Social Media",
  "Design Gráfico",
  "Brand & Marketing"
];

const ProjectsSection = ({ projects }: Props) => {
  const [active, setActive] = useState("Todos");
  const [showAll, setShowAll] = useState(false);

  const filtered =
    active === "Todos"
      ? projects
      : projects.filter((proj) => proj.category === active);

  const visibleProjects = showAll ? filtered : filtered.slice(0, 9);

  return (
    <section className="bg-cream py-24 px-4 sm:px-6 md:px-12 lg:px-20 text-crimsonWine">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">
        Projetos
      </h2>

      {/* Filtros de categorias */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-14">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActive(cat);
              setShowAll(false);
            }}
            className={`px-4 py-2 text-sm sm:text-base rounded-full border transition-all duration-200 hover:scale-105 ${
              active === cat
                ? "bg-amberOrange text-white border-amberOrange"
                : "border-crimsonWine text-crimsonWine"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid responsiva */}
      <div className="grid grid-cols-1 min-[640px]:grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-10">
        {visibleProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-3 border-b">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amberOrange to-crimsonWine text-white font-bold text-sm flex items-center justify-center">
                {project.title[0]}
              </div>
              <p className="font-semibold text-gray-800">{project.title}</p>
            </div>

            {/* Imagem */}
            <div className="relative w-full h-60 bg-gray-100">
              {project.image ? (
                <Image
                  src={project.image.url}
                  alt={project.title}
                  fill
                  unoptimized
                  className="object-cover"
                />
              ) : (
                <ImageIcon className="w-10 h-10 text-gray-400 absolute inset-0 m-auto" />
              )}
            </div>

            {/* Descrição */}
            <div className="px-4 py-4 text-sm text-gray-700 flex flex-col gap-2">
              <p className="font-semibold">{project.title}</p>
              <p>{truncateText(extractPlainText(project.description), 280)}</p>
              <Link
                href={`/projects/${project.slug}`}
                className="text-amberOrange font-medium hover:underline mt-1"
              >
                Ver mais →
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Botão "Exibir mais" */}
      {!showAll && filtered.length > 9 && (
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setShowAll(true)}
            className="px-6 py-3 bg-amberOrange text-white font-semibold rounded-full shadow hover:brightness-110 transition"
          >
            Exibir mais
          </button>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
