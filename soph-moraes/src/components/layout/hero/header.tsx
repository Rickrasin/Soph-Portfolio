import Button from "@/components/common/button";
import Link from "next/link";

const Header = () => {
  return (
    <section className="px-20 py-4 bg-crimsonWine">
      <div className=" flex justify-between">
        {/* Logo */}
        <div className="w-8 h-8 bg-amberOrange"></div>

        <nav className="flex gap-8 text-2xl text-white">
          <Link href={"/"} className="hover:text-amberOrange   duration-300">
            Sobre
          </Link>
          <Link href={"/"} className="hover:text-amberOrange   duration-300">
            Serviços
          </Link>
          <Link href={"/"} className="hover:text-amberOrange   duration-300">
            Blog
          </Link>
          <Link href={"/"} className="hover:text-amberOrange   duration-300">
            Projetos
          </Link>
          <Link href={"/"} className="hover:text-amberOrange   duration-300">
            Contato
          </Link>
        </nav>

        <Button variant="solidAmberOrange" className="w-fit">
          Fale Comigo
        </Button>
      </div>
    </section>
  );
};

export default Header;
