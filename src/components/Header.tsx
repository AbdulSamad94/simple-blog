import { Search } from "lucide-react";

const Header = () => {
  return (
    <header className="py-6 px-7">
      <div className="flex justify-between items-center px-8">
        <div className="text-3xl font-bold">My Blog</div>
        <div className="w-1/2 relative">
          <input
            type="text"
            placeholder="looking for something?"
            className="text-lg uppercase bg-slate-50 w-full h-14 py-3 font-light px-7"
          />
          <Search className="absolute right-4 top-3 text-slate-500" size={28} />
        </div>
        <div className="uppercase font-light flex gap-10 text-lg list-none">
          <li>articles</li>
          <li>Contact</li>
        </div>
      </div>
    </header>
  );
};

export default Header;
