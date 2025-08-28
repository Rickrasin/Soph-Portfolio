"use client";
import Button, { ButtonVariant } from "@/components/common/button";
import HeroContainer from "./HeroContainer";
import Image from "next/image";
import { Instagram, Linkedin } from "lucide-react";
import type { HomeHero } from "@/lib/strapi-hero";

type Props = { hero: HomeHero };

const HeroSection = ({ hero }: Props) => (
  <section className="relative overflow-x-clip mt-8 px-4 md:px-20 flex flex-col md:flex-row items-center md:items-start min-h-[calc(100vh-130px)] gap-8">
    <div className="w-full my-auto md:w-2/3 pr-0 md:pr-10">
      <h1 className="text-6xl font-bold text-amberOrange mb-4">
        <span>{(hero.title || "Sophia Moraes").split(" ")[0]} </span>
        <span>{(hero.title || "Sophia Moraes").split(" ").slice(1).join(" ")}</span>
      </h1>

      {hero.subtitle && <h2 className="text-xl text-crimsonWine mb-4">{hero.subtitle}</h2>}
      {hero.description && <p className="text-lg leading-relaxed mb-4">{hero.description}</p>}
      {hero.quote && <p className="text-crimsonWine italic mb-6">“{hero.quote}”</p>}

      <div className="flex flex-wrap gap-4 mx-4 mb-4">
        {hero.primaryButton?.label && (
          <a
            href={hero.primaryButton.href ?? "#portfolio"}
            target={hero.primaryButton.isExternal ? "_blank" : undefined}
            rel={hero.primaryButton.isExternal ? "noreferrer" : undefined}
          >
            <Button variant={(hero.primaryButton.variant as ButtonVariant) ?? "solidCrimsonWine"}>
              {hero.primaryButton.label}
            </Button>
          </a>
        )}
        {hero.secondaryButton?.label && (
          <a
            href={hero.secondaryButton.href ?? "#contato"}
            target={hero.secondaryButton.isExternal ? "_blank" : undefined}
            rel={hero.secondaryButton.isExternal ? "noreferrer" : undefined}
          >
            <Button variant={(hero.secondaryButton.variant as ButtonVariant) ?? "outlineCrimsonWine"}>
              {hero.secondaryButton.label}
            </Button>
          </a>
        )}
      </div>

      {/* Redes sociais */}
      {hero.socialLinks?.length > 0 && (
        <div className="flex gap-6 mx-4 mb-4">
          {hero.socialLinks.map((s) => s.provider === "linkedin" ? (
            <a key={s.id} href={s.url} target="_blank" rel="noreferrer" className="transition-transform hover:scale-110">
              <Linkedin className="w-6 h-6 text-crimsonWine" />
            </a>
          ) : s.provider === "instagram" ? (
            <a key={s.id} href={s.url} target="_blank" rel="noreferrer" className="transition-transform hover:scale-110">
              <Instagram className="w-6 h-6 text-crimsonWine" />
            </a>
          ) : (
            <a key={s.id} href={s.url} target="_blank" rel="noreferrer" className="transition-transform hover:scale-110 underline">
              {s.provider}
            </a>
          )
          )}
        </div>
      )}
    </div>

    <div className="relative w-full md:w-1/3 mt-auto flex justify-center items-end h-full overflow-visible">
      <HeroContainer />
    </div>

    {/* Decorations */}
    <div className="text-6xl absolute bottom-24 left-1/2 transform -translate-x-1/2 animate-bounce text-crimsonWine">↓</div>

    <div className="absolute -bottom-1 left-0 w-full overflow-hidden pointer-events-none select-none z-[10]">
      <Image src="/images/Wave/split-wave.svg" alt="" width={1920} height={200} unoptimized className="w-full max-w-none" />
    </div>
  </section>
);

export default HeroSection;
