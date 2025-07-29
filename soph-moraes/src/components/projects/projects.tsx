"use client";
import { useEffect, useState } from "react";
import data from "@/data/projects.json";
import Link from "next/link";
import Image from "next/image";
import { ImageIcon } from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: string;
  image?: string;
  description: string;
  link: string;
}

const categories = [
  "Todos",
  "Social Media",
  "Design Gráfico",
  "Brand & Marketing"
];

const ProjectsSection = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filtered, setFiltered] = useState<Project[]>([]);
  const [active, setActive] = useState("Todos");

  useEffect(() => {
    const normalized = data.map((proj) => ({
      ...proj,
      image:
        typeof proj.image === "string" && proj.image.trim() !== ""
          ? proj.image.trim()
          : null
    }));

    setProjects(normalized);
    setFiltered(normalized);
  }, []);

  const handleFilter = (category: string) => {
    setActive(category);
    if (category === "Todos") {
      setFiltered(projects);
    } else {
      setFiltered(projects.filter((proj) => proj.category === category));
    }
  };

  return (
    <section className="bg-cream py-24 px-6 md:px-20 text-crimsonWine">
      <h2 className="text-4xl font-bold text-center mb-10">Projetos</h2>

      {/* Botões de categoria */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleFilter(cat)}
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

      {/* Grid de projetos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {filtered.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
          >
            <div className="relative w-full h-56 flex items-center justify-center bg-gray-100">
              {typeof project.image === "string" && project.image.length > 5 ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <ImageIcon className="w-10 h-10 text-gray-400" />
              )}
            </div>

            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600 mb-4">
                {project?.description}
              </p>
              <Link
                href={project.link}
                target="_blank"
                className="text-amberOrange font-medium hover:underline"
              >
                Ver mais →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
