"use client";
import { X } from "lucide-react";
import { Project } from "@/types/project";
import { renderRichText } from "@/utils/richText";
import GallerySlider from "./gallerySlider";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl xl:max-w-6xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[95vh]">
        {/* Botão de fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-gray-400 hover:text-black transition"
        >
          <X size={28} />
        </button>

        {/* Conteúdo */}
        <div className="w-full p-6 sm:p-8 md:p-10 overflow-y-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-amberOrange mb-4">
            {project.title.toUpperCase()}:
          </h2>

          <p className="text-sm text-gray-600 mb-4 leading-relaxed">
            <span className="font-semibold">Projeto:</span> {project.title}
            <br />
            <span className="font-semibold">Categoria:</span>{" "}
            {project.category || "Não definida"}
          </p>

          <div className="prose max-w-none text-sm text-gray-800 mb-8">
            {renderRichText(project.description)}
          </div>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-amberOrange text-white px-5 py-2 rounded-md font-semibold hover:bg-opacity-90 transition"
            >
              <span>Acessar trabalho</span>
            </a>
          )}
        </div>

        {/* Galeria no topo */}
        <div className="bg-gray-50 px-4 pt-8 pb-6 sm:px-6 border-b border-gray-200 max-h-[300px] overflow-hidden flex justify-center items-center">
          {project.gallery && project.gallery.length > 0 ? (
            <GallerySlider images={project.gallery} />
          ) : (
            <p className="text-center text-gray-500">Sem imagens disponíveis</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
