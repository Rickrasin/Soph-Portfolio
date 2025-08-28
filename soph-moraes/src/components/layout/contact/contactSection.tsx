"use client";

import Image from "next/image";
import {
  Mail,
  User,
  MessageCircle,
} from "lucide-react";

const ContactSection = () => {
  return (
    <section className="relative bg-background text-crimsonWine py-24 px-4 sm:px-6 md:px-12 lg:px-20 ">
      {/* Wave decorativo invertido no topo do footer */}
      <div className="absolute -bottom-[5px] left-0 w-full z-0 pointer-events-none select-none ">
        <Image
          src="/images/Wave/split-wave-crimsomWine.svg"
          alt="Wave Top"
          width={2100}
          height={100}
          unoptimized
          className="w-full "
        />
      </div>

      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Entre em Contato
        </h2>
        <p className="text-crimsonWine/80 text-sm sm:text-base">
          Ficarei feliz em conversar sobre seu projeto, responder dúvidas ou
          apenas bater um papo criativo.
        </p>
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="max-w-2xl mx-auto bg-cream rounded-xl shadow-md p-6 md:p-8 space-y-6 mb-32"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-semibold text-sm">
            Nome
          </label>
          <div className="flex items-center gap-2 border border-crimsonWine/30 rounded-md px-3 py-2 bg-white focus-within:ring-2 focus-within:ring-amberOrange">
            <User className="w-4 h-4 text-crimsonWine" />
            <input
              type="text"
              id="name"
              placeholder="Seu nome"
              className="w-full bg-transparent outline-none text-sm"
              required
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-semibold text-sm">
            Email
          </label>
          <div className="flex items-center gap-2 border border-crimsonWine/30 rounded-md px-3 py-2 bg-white focus-within:ring-2 focus-within:ring-amberOrange">
            <Mail className="w-4 h-4 text-crimsonWine" />
            <input
              type="email"
              id="email"
              placeholder="Seu email"
              className="w-full bg-transparent outline-none text-sm"
              required
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="font-semibold text-sm">
            Mensagem
          </label>
          <div className="flex items-start gap-2 border border-crimsonWine/30 rounded-md px-3 py-2 bg-white focus-within:ring-2 focus-within:ring-amberOrange">
            <MessageCircle className="w-4 h-4 text-crimsonWine mt-1" />
            <textarea
              id="message"
              rows={4}
              placeholder="Escreva sua mensagem aqui..."
              className="w-full bg-transparent outline-none text-sm resize-none"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-amberOrange text-white px-6 py-3 rounded-full font-semibold hover:brightness-110 transition"
        >
          Enviar mensagem
        </button>
      </form>

      {/* Redes sociais opcionais */}
      {/* <div className="flex justify-between mt-10">
        <div className="w-[196.41px]"></div>
        <div className="flex items-center gap-6">
          <a
            href="https://www.instagram.com/sofizz_14"
            rel="noreferrer"
            target="_blank"
            className="hover:scale-110 transition-transform"
          >
            <Instagram className="w-6 h-6 text-amberOrange" />
          </a>
          <a
            href="https://www.linkedin.com/in/sophia-moraes-1b94bb24b"
            target="_blank"
            rel="noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <Linkedin className="w-6 h-6 text-amberOrange" />
          </a>
        </div>
        <div className="w-[138px]"></div>
      </div> */}
    </section>
  );
};

export default ContactSection;
