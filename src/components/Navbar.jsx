import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
  const [activeNavItem, setActiveNavItem] = useState("Home");

  return (
    <nav className="py-6 px-2 md:px-[115px] flex flex-row justify-between items-center bg-white">
      <div className="mb-4 md:mb-0">
        <h1 className="text-2xl font-bold italic">Sport News</h1>
      </div>

      <div className="flex flex-wrap justify-center space-x-2 md:space-x-6">
        {[
          "Home",
          "Category",
          "Trending News",
          "Recent News",
          "Clubs Ranking",
          "Sports Article",
        ].map((item) => (
          <button
            key={item}
            className={`px-2 py-1 text-sm ${
              activeNavItem === item ? "font-semibold" : "text-gray-600"
            }`}
            onClick={() => setActiveNavItem(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <button className="flex justify-center items-center gap-2 bg-[#B8C2CE] text-white px-2 py-1 rounded text-sm">
        <IoSearchOutline />
        <span>Search</span>
      </button>
    </nav>
  );
};

export default Navbar;
