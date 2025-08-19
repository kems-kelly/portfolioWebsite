import Logo from "./Logo";
import Navlinks from "./Navlinks";
import { FiAlignJustify, FiX } from "react-icons/fi";
import { useState } from "react";

function HeaderMain() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="px-nav-px sm:px-container-px flex flex-row items-center mt-8 gap-2 relative">
      <div className="container m-auto flex items-center justify-between px-nav-sm sm:px-section-px-lg lg:px-8 bg-secondary rounded-full z-50 border-accent/20">
        <Logo />
        <Navlinks isOpen={isOpen} />
      </div>

      {/* Mobile Menu Button */}
      <div className="flex lg:hidden p-3 bg-secondary items-center justify-center rounded-full border border-accent/20 h-16 w-16">
        <button
          onClick={toggleMenu}
          className="p-3 bg-gradient-to-b from-accent/90 rounded-full text-white h-10 w-10 flex items-center justify-center"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? (
            <FiX className="text-light text-xl" />
          ) : (
            <FiAlignJustify className="text-light text-xl" />
          )}
        </button>
      </div>
    </header>
  );
}

export default HeaderMain;
