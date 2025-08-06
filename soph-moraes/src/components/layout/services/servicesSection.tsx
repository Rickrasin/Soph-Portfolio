import React from "react";
import { Megaphone, PenTool, LayoutDashboard } from "lucide-react";
import Image from "next/image";

const services = [
  {
    icon: <LayoutDashboard className="w-10 h-10 text-amberOrange" />,
    title: "Social Media",
    description:
      "Criação de conteúdo visual, identidade para redes sociais e estratégias para engajamento."
  },
  {
    icon: <PenTool className="w-10 h-10 text-amberOrange" />,
    title: "Design Gráfico",
    description:
      "Criação de peças gráficas para online e offline, como posts, panfletos, banners e mais."
  },
  {
    icon: <Megaphone className="w-10 h-10 text-amberOrange" />,
    title: "Brand & Marketing",
    description:
      "Posicionamento de marca, comunicação visual e estratégias criativas para destacar seu negócio."
  }
];

const ServicesSection = () => {
  return (
    <section className="relative bg-[#fdf6ec] pt-52 pb-32 px-6 md:px-20 text-crimsonWine overflow-x-clip">
      {/* Wave decorativo invertido */}
      <div className="absolute -top-1 left-0 w-full z-0 pointer-events-none select-none">
        <Image
          src="/images/Wave/split-wave.svg"
          alt=""
          unoptimized
          width={2100}
          height={100}
          className="w-full max-w-none rotate-180 scale-x-[-1]"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-16">Serviços</h2>

        <div className="grid gap-12 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-4 bg-white rounded-xl shadow-md border-b-4 border-amberOrange p-6 hover:scale-105 transition-transform duration-300"
            >
              <div className="bg-amberOrange/10 rounded-full p-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-crimsonWine/80">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
