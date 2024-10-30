"use client";
import { Search } from "lucide-react";
import Link from "next/link";
const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <header className="py-6 md:px-7">
      <div className="flex justify-between items-center px-8">
        <Link href="/" className="lg:text-3xl text-2xl font-bold">
          My Blog
        </Link>
        <div className="w-1/2 relative lg:block hidden">
          <input
            type="text"
            placeholder="looking for something?"
            className="text-lg uppercase bg-slate-50 w-full h-14 py-3 font-light px-7"
          />
          <Search className="absolute right-4 top-3 text-slate-500" size={28} />
        </div>
        <div className="uppercase font-light flex items-center gap-10 md:text-lg list-none">
          <li
            className="cursor-pointer"
            onClick={() => scrollToSection("featured")}
          >
            articles
          </li>
          <Link href="/contact" className="cursor-pointer">
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
