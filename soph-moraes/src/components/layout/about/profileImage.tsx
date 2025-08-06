"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

const blobs = [
  {
    src: "/blob/blob-back.svg",
    zIndex: "z-0",
    size: "w-[48rem] h-[48rem]"
  },
  {
    src: "/blob/blob-normal.svg",
    zIndex: "z-[1]",
    size: "w-[44rem] h-[44rem]"
  },
  {
    src: "/blob/blob-front.svg",
    zIndex: "z-[5]",
    size: "w-[36rem] h-[36rem]"
  }
];

const ProfileImage = () => {
  return (
    <div className="relative w-full flex justify-center items-center h-[300px] mb-12">
      {/* BLOBS no fundo */}
      <div className="absolute w-full h-full flex items-center justify-center pointer-events-none">
        {blobs.map((blob, index) => (
          <motion.div
            key={index}
            className={`absolute ${blob.zIndex} ${blob.size}`}
            animate={{ scale: [1, 1.03, 1], rotate: [0, 2, -2, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src={blob.src}
              alt={`blob-${index}`}
              width={800}
              height={800}
              unoptimized
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </motion.div>
        ))}
      </div>

      {/* AVATAR sobre os blobs */}
      <div className="relative z-10 w-48 h-48 rounded-full overflow-hidden shadow-xl">
        <Image
          src="/soph-avatar.png"
          alt="avatar"
          fill
          unoptimized
          className="object-cover rounded-full"
        />
      </div>
    </div>
  );
};

export default ProfileImage;
