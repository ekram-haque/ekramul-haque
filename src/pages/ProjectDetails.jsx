import { useParams, Link } from "react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { projects } from "../data/Project";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));
  const [activeImage, setActiveImage] = useState(
    project?.images?.[0]
  );

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Project not found
      </div>
    );
  }

  return (
    <section className="relative min-h-screen py-24 px-6 bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-6xl mx-auto"
      >
        {/* BACK LINK */}
        <Link
          to="/"
          className="inline-block mb-8 text-sm text-blue-400 hover:text-blue-300"
        >
          ← Back to Home
        </Link>

        {/* IMAGE GALLERY */}
        <div className="grid md:grid-cols-4 gap-6 mb-14">
          {/* MAIN IMAGE */}
          <motion.div
            className="md:col-span-3 rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
            whileHover={{ scale: 1.01 }}
          >
            <img
              src={activeImage}
              alt={project.name}
              className="w-full h-[500px] object-cover"
            />
          </motion.div>

          {/* THUMBNAILS */}
          <div className="flex md:flex-col gap-4">
            {project.images.map((img, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(img)}
                className={`rounded-xl overflow-hidden border transition
                ${
                  activeImage === img
                    ? "border-blue-500"
                    : "border-white/10 hover:border-blue-400"
                }`}
              >
                <img
                  src={img}
                  alt="preview"
                  className="w-full h-24 object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* PROJECT INFO */}
        <div className="grid md:grid-cols-3 gap-12">
          {/* LEFT CONTENT */}
          <div className="md:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {project.name}
            </h1>

            <p className="text-gray-300 leading-relaxed mb-8">
              {project.description}
            </p>

            {/* CHALLENGES */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">
                Key Challenges
              </h3>
              <p className="text-gray-400">{project.challenges}</p>
            </div>

            {/* FUTURE */}
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Future Improvements
              </h3>
              <p className="text-gray-400">{project.future}</p>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="rounded-2xl p-6 bg-white/5 backdrop-blur border border-white/10">
            <h3 className="font-semibold mb-4">Tech Stack</h3>

            <div className="flex flex-wrap gap-3 mb-8">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm rounded-full bg-white/10 border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col gap-3">
              <a
                href={project.live}
                target="_blank"
                className="w-full text-center py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition font-medium"
              >
                Live Preview
              </a>

              <a
                href={project.github}
                target="_blank"
                className="w-full text-center py-3 rounded-lg border border-white/20 hover:border-blue-500 hover:text-blue-400 transition font-medium"
              >
                GitHub Repository
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
