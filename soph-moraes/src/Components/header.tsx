import Link from "next/link";

const Header = () => {
  return (
    <section className="mx-40 pt-4">
      <div className=" flex justify-between">
        {/* Logo */}
        <div className="w-8 h-8 bg-crimsonWine"></div>

        <nav className="flex gap-8 text-2xl">
          <Link href={"/"}>Sobre</Link>
          <Link href={"/"}>Serviços</Link>
          <Link href={"/"}>Blog</Link>
          <Link href={"/"}>Projetos</Link>
          <Link href={"/"}>Contato</Link>
        </nav>

        <button className="px-4 py-2 bg-amberOrange text-white rounded-lg hover:bg-amberOrange-700 transition">
          Fale Comigo
        </button>
      </div>
    </section>
  );
};

export default Header;
