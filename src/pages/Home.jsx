import { motion, AnimatePresence } from "framer-motion";

import { projects } from "../data/Project";

import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";



import { HiOutlineSparkles } from "react-icons/hi";
import ProjectCard from "../components/ProjectCard";
import { useEffect, useState } from "react";
import { FaSquareXTwitter, FaX } from "react-icons/fa6";

export default function Home() {

  
const socials = [
  {
    name: "GitHub",
    icon: <FaGithub />,
    link: "https://github.com/ekram-haque",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    link: "https://linkedin.com/in/ekram-haque",
  },
  {
    name: "Facebook",
    icon: <FaFacebook />,
    link: "https://facebook.com/ekramm-haque",
  },
  {
    name: "Twitter",
    icon: <FaSquareXTwitter />,
    link: "https://x.com/ekramm_haque",
  },
  {
    name: "Email",
    icon: <FaEnvelope />,
    link: "mailto:ekramulhaque.dev@email.com",
  },
];

  // ---------- TYPING EFFECT LOGIC ----------
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  // ✅ TAB STATES (HERE)
  const [activeTab, setActiveTab] = useState("web");
  const [vibeTab, setVibeTab] = useState("web");

  // ✅ FILTER LOGIC
  const filteredProjects =
    activeTab === "vibe"
      ? projects.filter((p) =>
          vibeTab === "web"
            ? p.category === "vibe-web"
            : p.category === "vibe-android"
        )
      : projects.filter((p) => p.category === activeTab);

  useEffect(() => {
    const roles = [
      "Full Stack Developer",
      "Frontend Developer",
      "React Developer",
      "MERN Stack Developer",
      "Node.js Developer",
    ];
    const currentWord = roles[wordIndex];

    const timer = setTimeout(
      () => {
        if (!deleting) {
          setText(currentWord.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);

          if (charIndex + 1 === currentWord.length) {
            setTimeout(() => setDeleting(true), 1000); // pause at the end
          }
        } else {
          setText(currentWord.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);

          if (charIndex === 0) {
            setDeleting(false);
            setWordIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      deleting ? 50 : 120
    );

    return () => clearTimeout(timer);
  }, [charIndex, deleting, wordIndex]);

  return (
    <>
      {/* HERO */}

  <section
  id="hero"
  className={`relative min-h-screen flex items-center overflow-hidden
    bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white
    dark:bg-gradient-to-br dark:from-gray-900 dark:via-black dark:to-gray-900
    light:bg-gray-50 light:text-gray-900 font-sans`}
>
  {/* BACKGROUND GLOW */}
  <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full blur-3xl
    bg-blue-600/20 dark:bg-blue-600/20 light:bg-yellow-300/10"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl
    bg-purple-600/20 dark:bg-purple-600/20 light:bg-orange-200/10"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
    {/* LEFT CONTENT */}
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* OPEN TO WORK BADGE */}
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="inline-flex items-center gap-2 px-4 py-1 mb-4 rounded-full
          bg-green-500/10 border border-green-500/30 text-green-400 text-sm"
      >
        <HiOutlineSparkles />
        Open to Work & Opportunities
      </motion.div>

      <p className="text-blue-500 font-medium mb-3">👋 Hello, I’m</p>

      <h1 className={`text-4xl md:text-6xl font-extrabold leading-tight
        dark:font-sans light:font-serif`}>
        Ekramul
        <span className="bg-gradient-to-r from-blue-500 to-purple-500 ml-2 bg-clip-text text-transparent">
          Haque
        </span>
      </h1>

      {/* TYPING ROLE TEXT */}
      <div className="mt-4 h-8">
        <span className="text-gray-300 dark:text-gray-300 light:text-gray-800 text-xl md:text-2xl font-medium">
          {text}<span className="animate-blink">|</span>
        </span>
      </div>

      <p className="mt-5 text-gray-400 dark:text-gray-400 light:text-gray-800 max-w-xl">
        I build modern, scalable, and user-friendly web applications.
        Actively seeking freelance, remote, and full-time opportunities.
      </p>

      {/* CTA BUTTONS */}
      <div className="mt-8 flex flex-wrap gap-4">
        <motion.a
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          href="https://drive.google.com/file/d/1gpHHNtUEuSHfnGpoQFkrge0oNqu3oabm/view?usp=drive_link"
          className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition font-medium shadow-lg"
          target="_blank"
        >
          Download Resume
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          href="#projects"
          className="px-6 py-3 rounded-lg border border-white/20 hover:border-blue-500 hover:text-blue-400 transition font-medium"
        >
          View Projects
        </motion.a>
      </div>
    </motion.div>

    {/* RIGHT IMAGE */}
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      className="relative flex justify-center"
    >
      {/* ROTATING GLOW RING */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="absolute w-80 h-80 rounded-full border border-blue-500/30 dark:border-blue-500/30 light:border-yellow-200/40"
      />

      <div className="absolute inset-0 rounded-full
        bg-gradient-to-tr from-blue-500 to-purple-500 blur-2xl opacity-40
        dark:from-blue-500 dark:to-purple-500
        light:from-yellow-200 light:to-orange-200"
      ></div>

      <motion.img
        whileHover={{ scale: 1.05 }}
        src="/profile.png"
        alt="Ekram"
        className="relative w-64 md:w-80 rounded-full
          border-4 border-white/10 shadow-2xl cursor-pointer
          filter grayscale hover:grayscale-0
          transition duration-500 ease-in-out"
      />
    </motion.div>
  </div>

  {/* SCROLL INDICATOR */}
  <motion.div
    animate={{ y: [0, 10, 0] }}
    transition={{ repeat: Infinity, duration: 1.5 }}
    className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-400 text-sm"
  >
    Scroll ↓
  </motion.div>
</section>


      {/* ABOUT */}
      <section
        id="about"
        className="relative py-32 px-6 bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden"
      >
        {/* BACKGROUND ACCENTS */}
        <div className="absolute top-1/4 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p className="text-blue-500 font-medium mb-3 tracking-wide">
              ABOUT ME
            </p>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              A Passionate Developer <br />
              Focused on Clean & Scalable Web Apps
            </h2>

            <p className="mt-6 text-gray-300 leading-relaxed">
              I am a passionate web developer who enjoys building modern,
              user-friendly, and scalable web applications. My journey into
              programming started with curiosity and has grown into a strong
              commitment to solving real-world problems through clean and
              efficient code.
            </p>

            <p className="mt-4 text-gray-300 leading-relaxed">
              I specialize in frontend development with a strong focus on UI,
              smooth animations, and performance. I constantly explore new
              technologies to improve my skills and deliver better digital
              experiences.
            </p>

            {/* HIGHLIGHTS */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-white/5 backdrop-blur border border-white/10">
                <h4 className="font-semibold text-white">What I Enjoy</h4>
                <p className="text-sm text-gray-400 mt-1">
                  UI Design, Animations, Problem Solving
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white/5 backdrop-blur border border-white/10">
                <h4 className="font-semibold text-white">Interests</h4>
                <p className="text-sm text-gray-400 mt-1">
                  Learning New Tech, Sports, Creativity
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE CARD */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="rounded-2xl p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur border border-white/10 shadow-2xl"
          >
            <h3 className="text-xl font-semibold mb-6">Quick Overview</h3>

            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                MERN Stack Web Developer
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Strong focus on UI & UX quality
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Experience building real-world projects
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Always eager to learn and grow
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="relative py-32 px-6 bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden"
      >
        {/* BACKGROUND ACCENTS */}
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <p className="text-blue-500 font-medium tracking-wide mb-3">
              SKILLS
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Technologies I Use
            </h2>
            <p className="mt-4 text-gray-400">
              Modern technologies and tools I use to build scalable and
              high-quality applications.
            </p>
          </motion.div>

          {/* SKILL CATEGORIES */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-10 mt-24"
          >
            {[
              {
                title: " Frontend",
                glow: "from-blue-500/30 to-purple-500/30",
                icons: ["html", "css", "tailwind", "js", "react", "nextjs"],
              },
              {
                title: " Backend",
                glow: "from-green-500/30 to-emerald-500/30",
                icons: ["nodejs", "express", "mongodb", "firebase"],
              },
              {
                title: " Tools",
                glow: "from-purple-500/30 to-pink-500/30",
                icons: [
                  "git",
                  "github",
                  "vscode",
                  "figma",
                  "vercel",
                  "cloudflare",
                ],
              },
              {
                title: "📱 Android Development",
                glow: "from-orange-500/30 to-red-500/30",
                icons: ["androidstudio", "java", "php"],
                extra: ["< / >"],
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="group relative rounded-3xl p-8 bg-white/5 border border-white/10 backdrop-blur-xl"
              >
                {/* CARD GLOW */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${item.glow} opacity-0 group-hover:opacity-100 blur-2xl transition pointer-events-none`}
                />

                <div className="relative z-10">
                  <h3 className="text-xl font-semibold mb-8 text-center tracking-wide">
                    {item.title}
                  </h3>

                  {/* ICON GRID */}
                  <div className="grid grid-cols-3 gap-6 place-items-center">
                    {item.icons.map((icon) => (
                      <motion.div
                        key={icon}
                        whileHover={{ scale: 1.15 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="relative p-3 rounded-xl bg-white/5 border border-white/10 hover:border-white/30"
                      >
                        <div className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 blur-md transition pointer-events-none" />

                        <img
                          src={`https://skillicons.dev/icons?i=${icon}`}
                          alt={icon}
                          className="relative z-10 w-10 h-10"
                        />
                      </motion.div>
                    ))}

                    {/* XML Badge */}
                    {item.extra?.map((tech) => (
                      <motion.div
                        key={tech}
                        whileHover={{ scale: 1.1 }}
                        className="flex items-center justify-center w-16 h-16 rounded-xl bg-white/5 border border-white/10 text-sm font-semibold text-gray-300 hover:text-white transition"
                      >
                        {tech}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* project section */}
      {/* PROJECTS */}
      <section
        id="projects"
        className="relative py-32 px-6 bg-gradient-to-b from-black via-gray-900 to-black text-white"
      >
        <div className="max-w-6xl mx-auto">
          {/* HEADER */}
          <div className="text-center mb-12">
            <p className="text-blue-500 font-medium tracking-wide mb-3">
              PROJECTS
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Featured Projects
            </h2>
            <p className="mt-4 text-gray-400 max-w-xl mx-auto">
              Real-world applications & experimental builds.
            </p>
          </div>

          {/* MAIN TABS */}
          <div className="flex justify-center gap-4 mb-10">
            {["web", "android", "vibe"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition
            ${
              activeTab === tab
                ? "bg-blue-600 text-white"
                : "bg-white/5 text-gray-400 hover:bg-white/10"
            }`}
              >
                {tab.toUpperCase()}
              </button>
            ))}
          </div>

          {/* VIBE SUB TABS */}
          {activeTab === "vibe" && (
            <div className="flex justify-center gap-4 mb-10">
              {["web", "android"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setVibeTab(tab)}
                  className={`px-5 py-2 rounded-full text-sm transition
              ${
                vibeTab === tab
                  ? "bg-purple-600 text-white"
                  : "bg-white/5 text-gray-400 hover:bg-white/10"
              }`}
                >
                  Vibe {tab}
                </button>
              ))}
            </div>
          )}

          {/* PROJECT GRID */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeTab}-${vibeTab}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-3 gap-10"
            >
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

       <section
      id="social"
      className="relative py-24 px-6 bg-gradient-to-b from-black via-gray-900 to-black text-white"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* HEADER */}
        <p className="text-blue-500 font-medium tracking-wide mb-3">
          CONNECT WITH ME
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Let’s Stay Connected
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-14">
          Feel free to reach out or explore my work and professional journey
          through these platforms.
        </p>

        {/* SOCIAL GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {socials.map((social, i) => (
            <motion.a
              key={i}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -6, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center justify-center gap-3 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6 transition hover:border-blue-500/50"
            >
              <span className="text-3xl text-blue-400">
                {social.icon}
              </span>
              <span className="text-sm font-medium text-gray-300">
                {social.name}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>

      {/* contact section  */}
      <section
        id="contact"
        className="relative py-32 px-6 bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden"
      >
        {/* BACKGROUND ACCENTS */}
        <div className="absolute top-20 left-1/3 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/3 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          {/* LEFT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-blue-500 font-medium tracking-wide mb-3">
              CONTACT
            </p>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Let’s Work Together
            </h2>

            <p className="mt-6 text-gray-300 max-w-md">
              I’m always open to discussing new opportunities, projects, or
              collaborations. Feel free to reach out through any of the channels
              below.
            </p>

            {/* CONTACT DETAILS */}
            <div className="mt-10 space-y-5 text-gray-300">
              <div className="flex items-center gap-4">
                <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10">
                  📧
                </span>
                <span>ekramulhaque.dev@gmail.com</span>
              </div>

              <div className="flex items-center gap-4">
                <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10">
                  📞
                </span>
                <span>+880 1817760692</span>
              </div>

              <div className="flex items-center gap-4">
                <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10">
                  💬
                </span>
                <span>WhatsApp Available</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-2xl p-8 bg-white/5 backdrop-blur border border-white/10 shadow-2xl"
          >
            <h3 className="text-xl font-semibold mb-6">Send a Message</h3>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:outline-none focus:border-blue-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:outline-none focus:border-blue-500"
              />

              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:outline-none focus:border-blue-500"
              />

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition font-medium"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
}
