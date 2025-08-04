"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ImageType } from "@/types/project";
import {
  ImageIcon,
  HeartIcon,
  MessageCircle,
  Send,
  Bookmark
} from "lucide-react";
import ProjectModal from "@/components/layout/projects/projectsModal";
import { Block, Project } from "@/types/project";

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
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(
          "http://localhost:1337/api/projects?populate[image][fields][0]=url&populate[gallery][fields][0]=url"
        );
        const json = await res.json();

        const normalized: Project[] = json.data.map((proj: Project) => ({
          id: proj.id,
          title: proj.title,
          category: proj.category,
          description: proj.description,
          link: proj.link,
          image: proj.image?.url
            ? {
                ...proj.image,
                url: `http://127.0.0.1:1337${proj.image.url}`
              }
            : null,
          gallery:
            proj.gallery?.map((img: ImageType) => ({
              id: img.id,
              documentId: img.documentId,
              url: `http://127.0.0.1:1337${img.url}`
            })) || []
        }));

        setProjects(normalized);
        setFiltered(normalized);
      } catch (error) {
        console.error("Erro ao buscar projetos:", error);
      }
    };

    fetchProjects();
  }, []);

  const handleFilter = (category: string) => {
    setActive(category);
    setFiltered(
      category === "Todos"
        ? projects
        : projects.filter((proj) => proj.category === category)
    );
  };

  return (
    <section className="bg-cream py-24 px-6 md:px-20 text-crimsonWine">
      <h2 className="text-4xl font-bold text-center mb-10">Projetos</h2>

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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {filtered.map((project) => (
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
                    className="object-cover"
                  />
                ) : (
                  <ImageIcon className="w-10 h-10 text-gray-400 absolute inset-0 m-auto" />
                )}
              </div>

              <div className="flex items-center justify-between px-4 py-2 text-gray-600">
                <div className="flex space-x-2">
                  <span>
                    <HeartIcon />
                  </span>
                  <span>
                    <MessageCircle />
                  </span>
                  <span>
                    <Send />
                  </span>
                </div>
                <span>
                  <Bookmark />
                </span>
              </div>

              <div className="px-4 pb-4 text-sm text-gray-700">
                <p className="font-semibold">{project.title}</p>
                <p className="text-sm text-gray-700">
                  {truncateText(extractPlainText(project.description), 320)}
                </p>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="block mt-2 text-amberOrange font-medium hover:underline"
                >
                  Ver mais →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

const extractPlainText = (blocks: Block[]): string => {
  return blocks
    .flatMap((block) => block.children.map((child) => child.text))
    .join(" ");
};

const truncateText = (text: string, maxLength: number): string => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

export default ProjectsSection;
