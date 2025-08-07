import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroContainer = () => {
  return (
    <div className="relative w-full h-full flex justify-center items-end">
      {/* Spinning starburst decoration */}
      <motion.div
        className="absolute top-0 left-1/2 sm:top-0 md:top-8 lg:top-16 xl:top-4 2xl:top-28 min-w-[320px] sm:min-w-[400px] md:min-w-[400px] lg:min-w-[420px] xl:min-w-[600px] 2xl:min-w-[520px] aspect-square -translate-x-1/2"
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      >
        <Image
          src="/Star/starburst.svg"
          alt="Estrela decorativa"
          fill
          unoptimized
          className="object-contain"
        />
      </motion.div>

      {/* Hero portrait */}
      <div className="relative z-10 min-w-[240px] sm:min-w-[320px] md:min-w-[400px] lg:min-w-[420px] xl:min-w-[400px] 2xl:min-w-[520px] aspect-[2/3]">
        <Image
          src="/soph.png"
          alt="Sophia Moraes"
          fill
          unoptimized
          className="object-contain object-bottom"
        />
      </div>
    </div>
  );
};

export default HeroContainer;
