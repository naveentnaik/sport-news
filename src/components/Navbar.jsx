import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { HiMenu, HiX } from "react-icons/hi";
import { MdTranslate, MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [activeNavItem, setActiveNavItem] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);

  const navItems = [
    { name: t('navItems.home'), id: "home" },
    { name: t('navItems.category'), id: "category" },
    { name: t('navItems.trendingNews'), id: "trending-news" },
    { name: t('navItems.recentNews'), id: "recent-news" },
    { name: t('navItems.clubRankings'), id: "recent-news" },
    { name: t('navItems.sportsArticle'), id: "sports-article" },
  ];

  const languages = [
    { code: "en", name: "English" },
    { code: "kn", name: "ಕನ್ನಡ" },
    { code: "te", name: "తెలుగు" }
  ];

  useEffect(() => {
    const handleScrollEvent = () => {
      if (mobileMenuOpen) setMobileMenuOpen(false);
      if (languageDropdownOpen) setLanguageDropdownOpen(false);
    };

    window.addEventListener('scroll', handleScrollEvent);
    
    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, [mobileMenuOpen, languageDropdownOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setLanguageDropdownOpen(false);
  };

  const toggleLanguageDropdown = () => {
    setLanguageDropdownOpen(!languageDropdownOpen);
  };

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveNavItem(id);
      setMobileMenuOpen(false);
      setLanguageDropdownOpen(false); 
    }
  };

  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
    setLanguageDropdownOpen(false);
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
              className={`px-2 py-1 text-sm cursor-pointer ${
                activeNavItem === item.id ? "font-semibold" : "text-gray-600"
              }`}
              onClick={() => handleScroll(item.id)}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Translation Button - Desktop */}
        <div className="hidden lg:block relative ">
          <button 
            className="w-28 flex items-center gap-2 bg-[#B8C2CE] text-white px-3 py-2 rounded text-sm font-dm-sans cursor-pointer"
            onClick={toggleLanguageDropdown}
          >
            <MdTranslate />
            <span>{languages.find(lang => lang.code === i18n.language)?.name || "English"}</span>
            <MdKeyboardArrowDown className={`transition-transform duration-300 ${languageDropdownOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {/* Desktop Language Dropdown with Animation */}
          <div 
            className={`absolute right-0 top-full mt-1 bg-white shadow-md rounded-md py-2 w-32 z-30 overflow-hidden transition-all duration-300 origin-top  ${
              languageDropdownOpen 
                ? 'max-h-40 opacity-100' 
                : 'max-h-0 opacity-0 pointer-events-none'
            }`}
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer ${
                  i18n.language === lang.code ? "font-semibold" : ""
                }`}
                onClick={() => changeLanguage(lang.code)}
              >
                {lang.name}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button and Translation */}
        <div className="lg:hidden flex items-center gap-4">
          <div className="relative">
            <button 
              className="flex items-center gap-1 bg-[#B8C2CE] text-white px-2 py-2 rounded text-sm font-dm-sans"
              onClick={toggleLanguageDropdown}
            >
              <MdTranslate size={16} />
              <span className="sr-only md:not-sr-only">{i18n.language.toUpperCase()}</span>
              <MdKeyboardArrowDown className={`transition-transform duration-300 ${languageDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Mobile Language Dropdown with Animation */}
            <div 
              className={`absolute right-0 top-full mt-1 bg-white shadow-md rounded-md py-2 w-32 z-10 overflow-hidden transition-all duration-300 origin-top ${
                languageDropdownOpen 
                  ? 'max-h-40 opacity-100' 
                  : 'max-h-0 opacity-0 pointer-events-none'
              }`}
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                    i18n.language === lang.code ? "font-semibold" : ""
                  }`}
                  onClick={() => changeLanguage(lang.code)}
                >
                  {lang.name}
                </button>
              ))}
            </div>
          </div>
          <button onClick={toggleMobileMenu} className="text-gray-700">
            {mobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation with Animation */}
      <div 
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen 
            ? 'max-h-64 opacity-100 mt-4 py-2 border-t' 
            : 'max-h-0 opacity-0 mt-0 py-0 border-t border-transparent'
        }`}
      >
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
    </nav>
  );
};

export default Navbar;