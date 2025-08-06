import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const BlobAnimated = () => {
  return (
    <motion.div
      className="absolute inset-0 z-0"
      animate={{
        scale: [1, 1.03, 1],
        rotate: [0, 2, -2, 0]
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <Image
        src="/blob/blob.svg"
        alt="Blob Shape"
        fill
        unoptimized
        className="object-cover"
      />
    </motion.div>
  );
};

export default BlobAnimated;
