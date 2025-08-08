import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin } from "lucide-react";
import Button from "@/components/common/button";

const Footer = () => {
  return (
    <footer className="relative bg-crimsonWine text-white pt-32 pb-8 px-4 sm:px-6 md:px-12 lg:px-20 ">

      {/* Conteúdo principal */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo + Nome */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/sophia-moraes-logomarca.svg"
            alt="logomarca"
            width={60}
            height={60}
            className="w-16 h-16"
          />
          <span className="text-lg font-semibold hidden sm:inline">
            Sophia Moraes
          </span>
        </Link>

        {/* Redes sociais */}
        <div className="flex gap-6">
          <a
            href="https://www.instagram.com/sofizz_14"
            target="_blank"
            rel="noreferrer"
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

        {/* Botão Fale comigo */}
        <div className="hidden md:block">
          <Button variant="solidAmberOrange">Fale Comigo</Button>
        </div>
      </div>

      {/* Linha de separação + direitos + assinatura */}
      <div className="relative z-10 mt-10 border-t border-white/20 pt-4 text-xs text-white/70 flex flex-col sm:flex-row justify-between items-center gap-2">
        <p>
          © {new Date().getFullYear()} Sophia Moraes. Todos os direitos
          reservados.
        </p>
        <p>
          Desenvolvido por{" "}
          <Link
            href="https://rickson.me"
            target="_blank"
            rel="noreferrer"
            className="text-white hover:underline font-medium"
          >
            Rickson Oliveira
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
