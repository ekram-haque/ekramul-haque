import { motion } from "framer-motion";

const SkillCard = ({ title, skills, color, gradient }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6"
    >
      <h3 className={`text-xl font-semibold mb-6 ${color}`}>
        {title}
      </h3>

      {skills.map((skill) => (
        <div key={skill.name} className="mb-5">
          <div className="flex items-center justify-between text-sm mb-2">
            <div className="flex items-center gap-3">
              <span className="text-lg text-white/80">
                {skill.icon}
              </span>
              <span>{skill.name}</span>
            </div>
            <span className="text-gray-400">{skill.level}</span>
          </div>

          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className={`h-full bg-gradient-to-r ${gradient}`}
              initial={{ width: 0 }}
              whileInView={{ width: skill.level }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            />
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default SkillCard;
