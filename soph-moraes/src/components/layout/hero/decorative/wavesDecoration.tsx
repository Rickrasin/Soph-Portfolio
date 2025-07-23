"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const WavesDecoration = () => {
  return (
    <>
      <motion.div
        className="absolute -top-90 -left-5 rotate-45 scale-x-[-1] opacity-60 z-[-1] pointer-events-none"
        animate={{
          y: [0, -10, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Wave decorativa */}
        <Image
          src="/decorations/wave-top-left.svg"
          alt=""
          width={600}
          height={600}
          className=""
        />
      </motion.div>
      <motion.div
        className="absolute -bottom-50 right-20 -rotate-45 z-[-1]  pointer-events-none"
        animate={{
          y: [0, 10, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Wave decorativa */}
        <Image
          src="/decorations/wave-bottom-right.svg"
          alt=""
          width={800}
          height={800}
          className=""
        />
      </motion.div>
    </>
  );
};
