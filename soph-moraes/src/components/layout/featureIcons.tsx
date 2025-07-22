"use client";
import { PencilRuler, BarChart3, Share2 } from "lucide-react";

const features = [
  {
    icon: PencilRuler,
    label: "Design Gráfico"
  },
  {
    icon: BarChart3,
    label: "Marketing"
  },
  {
    icon: Share2,
    label: "Social Media"
  }
];

const FeatureIcons = () => {
  return (
    <ul className="grid grid-cols-3 gap-6 justify-center mt-10">
      {features.map(({ icon: Icon, label }, index) => (
        <li
          key={index}
          className="group w-[120px] flex flex-col items-center text-center text-sm gap-2"
        >
          <div className="p-4 aspect-square rounded-full bg-[#ad333b0a] flex items-center justify-center group-hover:scale-110 transition">
            <Icon className="w-6 h-6 text-crimsonWine group-hover:text-amberOrange transition-colors" />
          </div>
          <span className="text-crimsonWine group-hover:text-amberOrange transition-colors">
            {label}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default FeatureIcons;
