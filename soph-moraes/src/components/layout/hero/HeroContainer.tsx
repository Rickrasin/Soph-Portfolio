import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroContainer = () => {
  return (
    <div className="relative w-full md:w-1/3 min-h-[calc(100vh-100px)]">
      {/* Estrela no fundo */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-72 w-[600px] h-[600px] z-0"
        animate={{ rotate: 45 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        <Image
          src="/Star/starburst.svg"
          alt="Estrela decorativa"
          fill
          className="object-contain"
        />
      </motion.div>

      {/* Imagem da Sophia */}
      <Image
        src="/soph.png"
        alt="Hero Image"
        fill
        className="absolute object-contain object-bottom z-10"
      />
    </div>
  );
};

export default HeroContainer;
