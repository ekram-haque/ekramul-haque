import { motion } from "framer-motion";

import { projects } from "../data/Project";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiVite,
  SiFigma,
} from "react-icons/si";

import { HiOutlineSparkles } from "react-icons/hi";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  const skills = [
    { icon: <FaHtml5 />, name: "HTML", color: "group-hover:text-orange-500" },
    { icon: <FaCss3Alt />, name: "CSS", color: "group-hover:text-blue-500" },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind",
      color: "group-hover:text-sky-400",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
      color: "group-hover:text-yellow-400",
    },
    { icon: <FaReact />, name: "React", color: "group-hover:text-cyan-400" },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
      color: "group-hover:text-green-500",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
      color: "group-hover:text-green-400",
    },
    {
      icon: <SiFirebase />,
      name: "Firebase",
      color: "group-hover:text-amber-400",
    },
    { icon: <FaGitAlt />, name: "Git", color: "group-hover:text-orange-500" },
    { icon: <FaGithub />, name: "GitHub", color: "group-hover:text-white" },
    { icon: <SiVite />, name: "Vite", color: "group-hover:text-purple-400" },
    { icon: <SiFigma />, name: "Figma", color: "group-hover:text-pink-500" },
  ];

  return (
    <>
      {/* HERO */}

      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
        {/* BACKGROUND GLOW */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>

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
              className="inline-flex items-center gap-2 px-4 py-1 mb-4 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm"
            >
              <HiOutlineSparkles />
              Open to Work & Opportunities
            </motion.div>

            <p className="text-blue-500 font-medium mb-3">👋 Hello, I’m</p>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Ekramul 
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 ml-2 bg-clip-text text-transparent">
                 Haque
              </span>
            </h1>

            {/* ROLE TEXT */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-4 text-xl md:text-2xl font-medium text-gray-300"
            >
              MERN Stack Developer • Frontend Focused
            </motion.p>

            <p className="mt-5 text-gray-400 max-w-xl">
              I build modern, scalable, and user-friendly web applications.
              Actively seeking freelance, remote, and full-time opportunities
              where I can create real impact.
            </p>

            {/* CTA BUTTONS */}
            <div className="mt-8 flex flex-wrap gap-4">
              <motion.a
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                href="/resume.pdf"
                className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition font-medium shadow-lg"
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
              className="absolute w-80 h-80 rounded-full border border-blue-500/30"
            />

            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 blur-2xl opacity-40"></div>

            <motion.img
              whileHover={{ scale: 1.05 }}
              src="/profile.png"
              alt="Ekram"
              className="relative w-64 md:w-80 rounded-full border-4 border-white/10 shadow-2xl cursor-pointer"
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
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>

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
              A collection of modern languages, frameworks, and tools I use to
              build high-quality web applications.
            </p>
          </motion.div>

          {/* ICON GRID */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-10 mt-20"
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                whileHover={{ scale: 1.15 }}
                className="group flex flex-col items-center gap-3 text-gray-400 transition"
              >
                <div
                  className={`text-5xl transition-colors duration-300 ${skill.color}`}
                >
                  {skill.icon}
                </div>

                <span className="text-sm tracking-wide group-hover:text-white transition">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* <ProjectCard /> */}
      <section
        id="projects"
        className="relative py-32 px-6 bg-gradient-to-b from-black via-gray-900 to-black text-white"
      >
        <div className="max-w-6xl mx-auto">
          {/* HEADER */}
          <div className="text-center mb-16">
            <p className="text-blue-500 font-medium tracking-wide mb-3">
              PROJECTS
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Featured Projects
            </h2>
            <p className="mt-4 text-gray-400 max-w-xl mx-auto">
              Real-world applications built with modern technologies.
            </p>
          </div>

          {/* PROJECT GRID */}
          <div className="grid md:grid-cols-2 gap-10">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

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
                <span>ekram@email.com</span>
              </div>

              <div className="flex items-center gap-4">
                <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10">
                  📞
                </span>
                <span>+880 1XXXXXXXXX</span>
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
