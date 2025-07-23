"use client";
import { PencilRuler, BarChart3, Share2 } from "lucide-react";

const features = [
  {
    icon: PencilRuler,
    label: "Design Gráfico",
    description: "Criação de peças visuais com impacto e propósito."
  },
  {
    icon: BarChart3,
    label: "Marketing",
    description: "Planejamento e execução de estratégias eficientes."
  },
  {
    icon: Share2,
    label: "Social Media",
    description: "Gestão de conteúdo e identidade para redes sociais."
  }
];

const FeatureIcons = () => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {features.map(({ icon: Icon, label, description }, index) => (
        <li
          key={index}
          className="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-6 text-white shadow-sm transition-colors duration-300"
        >
          <div className="flex items-center justify-center mb-4">
            <div className="p-4 rounded-full bg-[#ad333b22] group-hover:scale-110 transition-transform duration-300">
              <Icon className="w-6 h-6 text-white group-hover:text-amberOrange transition-colors duration-300" />
            </div>
          </div>
          <h3 className="font-semibold text-md group-hover:text-amberOrange transition-colors mb-1 text-center">
            {label}
          </h3>
          <p className="text-sm text-white/80 text-center">{description}</p>
        </li>
      ))}
    </ul>
  );
};

export default FeatureIcons;
