"use client";
import Button from "@/components/common/button";
import HeroContainer from "./HeroContainer";
import Image from "next/image";
import { Instagram, Linkedin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-x-clip mt-8 px-4 md:px-20 flex flex-col md:flex-row items-center md:items-start gap-8">
      <div className="w-full my-auto  md:w-2/3 pr-0 md:pr-10">
        <h1 className="text-6xl font-bold  text-amberOrange mb-4">
          <span className="">Sophia </span>
          <span className="">Moraes</span>
        </h1>

        <h2 className="text-xl text-crimsonWine mb-4">
          Designer Gráfico & Publicitária
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          Criatividade, estratégia e comunicação visual unidas para transformar
          ideias em experiências marcantes.
        </p>
        <p className="text-crimsonWine italic mb-6">
          &quot;Se tem uma ideia diferente, um desafio ou uma missão criativa,
          pode contar comigo!&quot;
        </p>
        <div className="flex gap-4 mx-4 mb-4">
          <Button variant="solidCrimsonWine">Ver Portfólio</Button>
          <Button variant="outlineCrimsonWine">Entre em contato</Button>
        </div>
        {/* Redes sociais */}
        <div className="flex gap-6 mx-4 mb-4">
          <a
            href="https://www.linkedin.com/in/sophia-moraes-1b94bb24b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noreferrer"
            className="transition-transform hover:scale-110"
          >
            <Linkedin className="w-6 h-6 text-crimsonWine" />
          </a>

          <a
            href="https://www.instagram.com/sofizz_14?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noreferrer"
            className="transition-transform hover:scale-110"
          >
            <Instagram className="w-6 h-6 text-crimsonWine" />
          </a>
        </div>
      </div>

      <HeroContainer />

      {/* Decorations */}

      <div className="text-6xl absolute bottom-24 left-1/2 transform -translate-x-1/2 animate-bounce text-crimsonWine">
        ↓
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none select-none z-[10]">
        <Image
          src="/images/Wave/split-wave.svg"
          alt=""
          width={1920}
          height={200}
          unoptimized
          className="w-full max-w-none"
        />
      </div>
    </section>
  );
};

export default HeroSection;
