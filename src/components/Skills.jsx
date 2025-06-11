import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skills = [
    { name: 'HTML 5 & CSS 3', level: 95, color: 'from-blue-500 to-cyan-500' },
    { name: 'Javascript', level: 90, color: 'from-blue-600 to-purple-600' },
    { name: 'React JS', level: 85, color: 'from-green-500 to-emerald-500' },
    { name: 'Next JS', level: 80, color: 'from-yellow-500 to-orange-500' },
    { name: 'Redux Toolkit', level: 75, color: 'from-indigo-500 to-purple-500' },
    { name: 'Material UI', level: 70, color: 'from-orange-500 to-red-500' },
    { name: 'Github', level: 85, color: 'from-pink-500 to-purple-500' },
    { name: 'Responsive Design', level: 75, color: 'from-purple-500 to-pink-500' },
  ];

  //   const skills = [
  //   { name: 'HTML 5 & CSS 3', level: 95, color: 'from-blue-500 to-cyan-500' },
  //   { name: 'Javascript', level: 90, color: 'from-blue-600 to-purple-600' },
  //   { name: 'React JS', level: 85, color: 'from-green-500 to-emerald-500' },
  //   { name: 'Next JS', level: 80, color: 'from-yellow-500 to-orange-500' },
  //   { name: 'Tailwind CSS', level: 75, color: 'from-indigo-500 to-purple-500' },
  //   { name: 'Material UI', level: 70, color: 'from-orange-500 to-red-500' },
  //   { name: 'Git & GitHub', level: 85, color: 'from-pink-500 to-purple-500' },
  //   { name: 'Responsive Design', level: 75, color: 'from-purple-500 to-pink-500' },
  // ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
            <p className="text-gray-300 text-lg mt-6 max-w-2xl mx-auto">
              Here are the technologies and tools I work with to bring ideas to life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                  <span className="text-gray-400 text-sm">{skill.level}%</span>
                </div>
                
                <div className="relative h-3 bg-slate-700 rounded-full overflow-hidden">
                  <motion.div
                    className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full`}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ delay: index * 0.1, duration: 1, ease: 'easeOut' }}
                  />
                  <motion.div
                    className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full opacity-50`}
                    animate={{ x: [0, 100, 0] }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      delay: index * 0.2,
                      ease: 'easeInOut'
                    }}
                    style={{ width: '20px' }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Tools & Platforms</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'VS Code', 'Git',
                'Tailwind CSS', 'Netlify', 'Firebase','Supabase'
              ].map((tool, index) => (
                <motion.div
                  key={tool}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1 }}
                  className="px-4 py-2 bg-gradient-to-r from-slate-700 to-slate-800 rounded-full text-sm text-gray-300 border border-slate-600 hover:border-purple-400 transition-all duration-300"
                >
                  {tool}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;