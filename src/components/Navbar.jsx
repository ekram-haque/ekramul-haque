import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#about");

  // Background blur on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Social", href: "#social" },
    { name: "Contact", href: "#contact" },
  ];

  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Active section observer
  useEffect(() => {
    const sections = links.map((l) => document.querySelector(l.href));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((sec) => sec && observer.observe(sec));
    return () => sections.forEach((sec) => sec && observer.unobserve(sec));
  }, [links]);

  const handleScrollClick = (href) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center ">
        {/* LOGO */}
        <button
          onClick={() => handleScrollClick("#hero")}
          className="text-lg md:text-xl font-bold tracking-wide"
        >
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent cursor-pointer">
            {"<EkramulHaque/>"}
          </span>
        </button>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex space-x-8">
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => handleScrollClick(link.href)}
              className={`group relative font-medium transition cursor-pointer ${
                active === link.href
                  ? "text-blue-400"
                  : "text-white hover:text-blue-400"
              }`}
            >
              {link.name}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-blue-500 transition-all duration-300
                ${active === link.href ? "w-full" : "w-0 group-hover:w-full"}`}
              />
            </button>
          ))}
          {/* <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-3 py-1 border rounded hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button> */}
        </div>

        {/* MOBILE ICON */}
        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-black/90 backdrop-blur-lg px-6 pb-6"
        >
          <div className="flex flex-col space-y-4 mt-4">
            {links.map((link) => (
              <button
                key={link.name}
                onClick={() => handleScrollClick(link.href)}
                className={`text-lg transition ${
                  active === link.href
                    ? "text-blue-400"
                    : "text-white hover:text-blue-400"
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
