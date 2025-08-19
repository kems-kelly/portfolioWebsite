// import { motion, AnimatePresence } from "framer-motion";

// function Navlinks({ isOpen }) {
//   const links = [
//     { Link: "About Me", section: "about" },
//     { Link: "Skills", section: "skills" },
//     { Link: "Experience", section: "experience" },
//     { Link: "Projects", section: "projects" },
//     { Link: "Contact", section: "contact" },
//   ];

//   return (
//     <>
//       {/* Desktop Navigation */}
//       <ul className="hidden lg:flex space-x-6 px-container-px">
//         {links.map((link, index) => (
//           <li key={`desktop-${index}`} className="group relative">
//             <motion.a
//               href={`#${link.section}`}
//               className="cursor-pointer text-light text-bold text-l hover:text-accent transition-colors duration-300"
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{
//                 type: "spring",
//                 stiffness: 100,
//                 damping: 20,
//                 delay: 0.7 + index * 0.2,
//               }}
//             >
//               {link.Link}
//             </motion.a>
//             <div className="mx-auto bg-accent w-0 group-hover:w-full h-[2px] transition-all duration-300"></div>
//           </li>
//         ))}
//       </ul>

//       {/* Mobile Navigation */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.ul
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ type: "spring", damping: 20 }}
//             className="lg:hidden flex flex-col space-y-3 absolute top-full left-0 w-[90%] bg-secondary p-4 mt-2 rounded-2xl z-40 justify-center mx-10"
//           >
//             {links.map((link, index) => (
//               <motion.li
//                 key={`mobile-${index}`}
//                 className="group text-light text-bold text-l hover:text-accent"
//               >
//                 <a href={`#${link.section}`} className="block py-2 text-center">
//                   {link.Link}
//                 </a>
//                 <div className="mx-auto bg-accent w-0 group-hover:w-full h-[2px] transition-all duration-300"></div>
//               </motion.li>
//             ))}
//           </motion.ul>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }

// export default Navlinks;

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

function Navlinks({ isOpen, closeMenu }) {
  const links = [
    { Link: "About Me", section: "about" },
    { Link: "Skills", section: "skills" },
    { Link: "Experience", section: "experience" },
    { Link: "Projects", section: "projects" },
    { Link: "Contact", section: "contact" },
  ];

  // Smooth scroll to section and close mobile menu if open
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    if (closeMenu) closeMenu();
  };

  // Add scroll padding to account for fixed header
  useEffect(() => {
    document.documentElement.style.scrollPaddingTop = "100px";
    return () => {
      document.documentElement.style.scrollPaddingTop = "";
    };
  }, []);

  return (
    <>
      {/* Desktop Navigation */}
      <ul className="hidden lg:flex space-x-6 px-container-px">
        {links.map((link, index) => (
          <li key={`desktop-${index}`} className="group relative">
            <motion.a
              href={`#${link.section}`}
              onClick={(e) => scrollToSection(e, link.section)}
              className="cursor-pointer text-link text-bold text-l hover:text-link-hover transition-colors duration-300"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.7 + index * 0.2,
              }}
            >
              {link.Link}
            </motion.a>
            <div className="mx-auto bg-link-hover w-0 group-hover:w-full h-[2px] transition-all duration-300"></div>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", damping: 20 }}
            className="lg:hidden flex flex-col space-y-3 absolute top-full left-0 w-[90%] bg-secondary p-4 mt-2 rounded-2xl z-40 justify-center mx-10"
          >
            {links.map((link, index) => (
              <motion.li
                key={`mobile-${index}`}
                className="group text-light text-bold text-l hover:text-accent"
              >
                <a
                  href={`#${link.section}`}
                  onClick={(e) => scrollToSection(e, link.section)}
                  className="block py-2 text-center"
                >
                  {link.Link}
                </a>
                <div className="mx-auto bg-accent w-0 group-hover:w-full h-[2px] transition-all duration-300"></div>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navlinks;
