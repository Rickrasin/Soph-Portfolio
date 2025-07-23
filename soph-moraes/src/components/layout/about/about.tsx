import React from "react";
import Image from "next/image";
import FeatureIcons from "@/components/layout/about/about";

const AboutSection = () => {
  return (
    <section className="relative  justify-center bg-crimsonWine py-24 px-6 md:px-20 text-white overflow-hidden">
      {/* Decoração sutil no fundo */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-amberOrange/80 rounded-full blur-3xl z-0" />
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-20 items-start">
        <div className="relative flex justify-center mb-12">
          {/* BLOBS no fundo */}
          <div className="absolute inset-0 pointer-events-none">
            {/* blob back */}
            <Image
              src="/blob-back.svg"
              alt="blob back"
              width={700}
              height={700}
              className="absolute z-[6] top-1/2 left-60 -translate-x-1/2 -translate-y-120 "
            />
            {/* blob normal */}
            <Image
              src="/blob-normal.svg"
              alt="blob normal"
              width={600}
              height={600}
              className="absolute z-[7] top-1/2 left-60 -translate-x-1/2 -translate-y-1/2 "
            />
            {/* blob front */}
            <Image
              src="/blob-front.svg"
              alt="blob front"
              width={500}
              height={500}
              className="absolute z-[8] top-1/2 left-60 -translate-x-1/2 -translate-y-1/2"
            />
          </div>

          {/* AVATAR sobre os blobs */}
          <div className="relative z-10 w-40 h-40 rounded-full overflow-hidden shadow-xl border-4 border-white">
            <Image
              src="/soph-avatar.png"
              alt="avatar"
              fill
              className="object-cover rounded-full"
            />
          </div>
        </div>

        {/* Conteúdo principal */}
        {/* SOBRE MIM */}
        <div>
          <p className="leading-relaxed text-white/90 text-justify">
            <span className="font-bold text-amberOrange">
              Sou estudante de Publicidade e Técnica em Design Gráfico.
            </span>{" "}
            Sou apaixonada por criatividade, comunicação visual e tudo o que
            envolve transformar ideias em experiências marcantes.
            <br />
            Tenho um olhar atento para{" "}
            <span className="font-bold text-amberOrange">
              estratégias de marketing, redes sociais e criação de peças
              gráficas com propósito.
            </span>{" "}
            Gosto de me envolver em projetos que me desafiem, que tragam aquele
            friozinho na barriga — porque acredito que é aí que a gente cresce
            de verdade.
            <br />
            Sou uma pessoa{" "}
            <span className="font-bold text-amberOrange">
              otimista, dedicada e movida a novidades.
            </span>{" "}
            Se tem uma ideia diferente, um desafio ou uma missão criativa, pode
            contar comigo.
          </p>
          <p className="mt-6 italic text-white/60 tex t-sm">
            Vamos conversar sobre seu projeto? Estou pronta para ajudar!
          </p>
        </div>

        {/* SERVIÇOS */}
        {/* <div><FeatureIcons /></div> */}
      </div>
    </section>
  );
};

export default AboutSection;
