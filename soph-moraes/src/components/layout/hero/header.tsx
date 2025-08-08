import Button from "@/components/common/button";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-crimsonWine shadow-md">
      <div className="flex items-center justify-between px-4 md:px-20">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 md:space-x-4">
          <Image
            src="/sophia-moraes-logomarca.svg"
            width={80}
            height={80}
            alt="logomarca"
            className="w-20 h-20 md:w-24 md:h-24"
          />
        </Link>

        {/* Call to action */}
        <Button
          variant="solidAmberOrange"
          className="px-4 py-2 text-sm sm:text-base md:px-6 md:py-2 md:text-lg"
        >
          Fale Comigo
        </Button>
      </div>
    </header>
  );
};

export default Header;
