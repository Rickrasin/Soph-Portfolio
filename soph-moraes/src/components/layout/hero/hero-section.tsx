"use client";
import Image from "next/image";
import Button from "@/components/common/button";
import { WavesDecoration } from "@/components/layout/hero/decorative/wavesDecoration";
import BlobAnimated from "./decorative/blobAnimated";

const HeroSection = () => {
  return (
    <section className="relative overflow-x-clip mt-8 px-4 md:px-20 flex flex-col md:flex-row items-center md:items-start gap-8">
      {/* <WavesDecoration /> */}
      <div className="w-full my-auto md:w-2/3 pr-0 md:pr-10">
        <h1 className="text-6xl font-bold font-serif text-crimsonWine mb-4">
          <span className="">Sophia </span>
          <span className="text-amberOrange">Moraes</span>
        </h1>

        <h2 className="text-xl text-amberOrange mb-4">
          Designer Gráfico & Publicitária
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          Criatividade, estratégia e comunicação visual unidas para transformar
          ideias em experiências marcantes.
        </p>
        <p className="italic mb-6">
          &quot;Se tem uma ideia diferente, um desafio ou uma missão criativa,
          pode contar comigo!&quot;
        </p>
        <div className="flex gap-4 mx-4 mb-12">
          <Button variant="solid">Ver Portfólio</Button>
          <Button variant="outline">Entre em contato</Button>
        </div>
      </div>
      <div className="relative w-full md:w-1/3 min-h-[calc(100vh-100px)]">
        <BlobAnimated />
        <Image
          src="/soph.png"
          alt="Hero Image"
          fill
          className="absolute object-contain object-bottom z-10"
        />
      </div>
      <div className="text-6xl absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-crimsonWine">
        ↓
      </div>
    </section>
  );
};

export default HeroSection;
