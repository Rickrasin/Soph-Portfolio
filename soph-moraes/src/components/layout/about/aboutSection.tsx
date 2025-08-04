import React from "react";
import { Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Button from "@/components/common/button";

const AboutSection = () => {
  return (
    <section className="relative overflow-x-clip flex justify-center bg-amberOrange pt-24 pb-48 px-6 md:px-20 text-white overflow-hidden ">
      <div className="absolute -right-16 top-4  z-0 ">
        <Image
          src="/decorations/chatbox.svg"
          alt=""
          width={800}
          height={800}
          className="select-none pointer-events-none"
        />
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-20 items-start ">
        {/* Título e Apresentação */}
        <div className="flex flex-col justify-center items-start gap-2">
          <p className="text-xl md:text-3xl text-crimsonWine custom-selection">
            Oi, seja bem-vindo!
          </p>
          <h3 className="text-3xl md:text-5xl font-bold text-white uppercase custom-selection">
            Me chamo Sophia;
          </h3>
        </div>

        {/* Conteúdo principal */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
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
              Gosto de me envolver em projetos que me desafiem, que tragam
              aquele friozinho na barriga — porque acredito que é aí que a gente
              cresce de verdade.
              <br />
              Sou uma pessoa{" "}
              <span className="font-bold text-amberOrange">
                otimista, dedicada e movida a novidades.
              </span>{" "}
              Se tem uma ideia diferente, um desafio ou uma missão criativa,
              pode contar comigo.
            </p>

            {/* Linha divisória */}
            <div className="h-1 bg-amberOrange w-93" />

            {/* Frase final */}
            <p className="italic text-white/60 text-sm">
              Vamos conversar sobre seu projeto? Estou pronta para ajudar!
            </p>
          </div>

          {/* CTA e redes sociais */}
          <div className="flex flex-col gap-4">
            <Button variant="solidAmberOrange" className="w-fit">
              Entre em contato
            </Button>

            <div className="flex gap-6 mx-4 mb-4">
              <a
                href="https://www.linkedin.com/in/sophia-moraes-1b94bb24b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noreferrer"
                className="transition-transform hover:scale-110"
              >
                <Linkedin className="w-6 h-6 text-amberOrange" />
              </a>
              <a
                href="https://www.instagram.com/sofizz_14?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <Instagram className="w-6 h-6 text-amberOrange" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
