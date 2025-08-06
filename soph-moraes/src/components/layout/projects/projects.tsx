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

  const filtered =
    active === "Todos"
      ? projects
      : projects.filter((proj) => proj.category === active);

  return (
    <section className="bg-cream py-24 px-6 md:px-20 text-crimsonWine">
      <h2 className="text-4xl font-bold text-center mb-10">Projetos</h2>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories?.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 rounded-full border transition hover:scale-105 ${
              active === cat
                ? "bg-amberOrange text-white border-amberOrange"
                : "border-crimsonWine text-crimsonWine"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {filtered.map((project: Project) => (
          <div
            key={project.id}
            className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
          >
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 flex flex-col overflow-hidden">
              <div className="flex items-center px-4 py-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amberOrange to-crimsonWine flex items-center justify-center text-white font-bold text-sm">
                  <p className="mt-1 pointer-events-none select-none">
                    {project.title[0]}
                  </p>
                </div>
                <p className="ml-3 text-sm font-semibold text-gray-800">
                  {project.title}
                </p>
              </div>

              <div className="relative w-full h-64 bg-gray-100">
                {project.image ? (
                  <Image
                    src={project.image.url}
                    alt={project.title}
                    fill
                    unoptimized
                    className="object-cover"
                  />
                ) : (
                  <ImageIcon
                    className="w-10 h-10 text-gray-400 absolute inset-0 m-auto"
                  />
                )}
              </div>

              <div className="px-4 pb-4 text-sm text-gray-700">
                <p className="font-semibold mt-2">{project.title}</p>
                <p className="text-sm text-gray-700">
                  {truncateText(extractPlainText(project?.description), 320)}
                </p>
                <Link
                  href={`/projects/${project.slug}`}
                  className="block mt-2 text-amberOrange font-medium hover:underline"
                >
                  Ver mais →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
