import Image from "next/image";
import Button from "@/components/common/button";
import FeatureIcons from "@/components/layout/featureIcons";

const HeroSection = () => {
  return (
    <section className=" mt-8 px-4 md:px-20 flex flex-col md:flex-row items-center md:items-start gap-8">
      {/* Wave decorativa */}
      <Image
        src="/decorations/wave-top-left.svg"
        alt=""
        width={200}
        height={200}
        className="absolute -top-20 -left-8 rotate-45 scale-x-[-1] opacity-60 z-[-1]"
      />

      {/* Wave decorativa */}

      <Image
        src="/decorations/wave-bottom-right.svg"
        alt=""
        width={700}
        height={700}
        className="absolute bottom-0 right-0 opacity-60 z-[-1]  pointer-events-none"
      />

      <div className="w-full my-auto md:w-2/3 pr-0 md:pr-10">
        <h1 className="text-6xl font-bold font-serif text-crimsonWine mb-4">
          <span className="">Sophia </span>
          <span className="text-amberOrange">Soares</span>
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
        <Image
          src="/blob.svg"
          alt="Blob Shape"
          fill
          className="object-cover z-0"
        />
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
