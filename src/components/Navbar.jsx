import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [activeNavItem, setActiveNavItem] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Category", id: "category" },
    { name: "Trending News", id: "trending-news" },
    { name: "Recent News", id: "recent-news" },
    { name: "Clubs Ranking", id: "recent-news" }, // Clubs Ranking uses Recent News section
    { name: "Sports Article", id: "sports-article" },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveNavItem(id);
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="py-4 lg:py-6 px-4 lg:px-[115px] bg-white">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div>
          <h1 className="font-darkline text-3xl lg:text-4xl">Sport News</h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-4 lg:space-x-6 font-dm-sans">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`px-2 py-1 text-sm ${
                activeNavItem === item.id ? "font-semibold" : "text-gray-600"
              }`}
              onClick={() => handleScroll(item.id)}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Search Button */}
        <div className="hidden lg:flex">
          <button className="flex items-center gap-2 bg-[#B8C2CE] text-white px-3 py-2 rounded text-sm font-dm-sans">
            <IoSearchOutline />
            <span>Search</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-4">
          <button className="flex items-center gap-1 bg-[#B8C2CE] text-white px-2 py-1 rounded text-sm font-dm-sans">
            <IoSearchOutline size={16} />
            <span className="sr-only md:not-sr-only">Search</span>
          </button>
          <button onClick={toggleMobileMenu} className="text-gray-700">
            {mobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-4 py-2 border-t">
          <div className="flex flex-col space-y-3 font-dm-sans">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`px-2 py-2 text-left text-sm ${
                  activeNavItem === item.id ? "font-semibold" : "text-gray-600"
                }`}
                onClick={() => handleScroll(item.id)}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
