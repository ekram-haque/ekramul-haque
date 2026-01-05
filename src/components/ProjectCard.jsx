import { Link } from "react-router";
import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="group relative rounded-2xl overflow-hidden 
      bg-white/5 backdrop-blur border border-white/10 
      shadow-xl hover:shadow-blue-500/20 transition-all"
    >
      {/* IMAGE */}
      <div className="relative overflow-hidden">
        <motion.img
          src={project.images[0]}
          alt={project.name}
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.5 }}
          className="w-full h-52 object-cover"
        />

        {/* IMAGE OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition" />
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">
          {project.name}
        </h3>

        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* TECH STACK */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1 rounded-full 
              bg-white/10 text-gray-300 border border-white/10"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA */}
        <Link
          to={`/project/${project.id}`}
          className="inline-flex items-center gap-2 text-sm font-medium 
          text-blue-400 hover:text-blue-300 transition"
        >
          View Case Study →
        </Link>
      </div>

      {/* HOVER GLOW */}
      <div className="absolute inset-0 rounded-2xl 
      bg-gradient-to-r from-blue-500/10 to-purple-500/10 
      opacity-0 group-hover:opacity-100 transition pointer-events-none" />
    </motion.div>
  );
}
