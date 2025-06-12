import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';
import chatBot from '../assets/chatBot-scr.png'
import bookLibrary from '../assets/bookLibrary-scr.png'
import socialMedia from '../assets/socialMedia-scr.png'

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'ChatBot AI',
      description: 'Smart chatbot platform built with React and Redux, featuring live responses via Gemini Pro API in React Vite.',
      // image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      image: chatBot,
      technologies: ['React', 'Tailwind CSS', 'Firebase', 'Redux-Toolkit', 'Gemini API'],
      github: 'https://github.com/Vishalchorala/ChatBot-AI.git',
      live: 'https://vishal-chatbot.netlify.app/',
      featured: true,
    },
    {
      id: 2,
      title: 'Book Library App',
      description: ' Your smart companion for managing and exploring your personal book library in React Vite.',
      image: bookLibrary,
      technologies: ['React', 'Tailwind CSS', 'Supabase', 'Redux-Toolkit', 'Book API'],
      github: 'https://github.com/Vishalchorala/Book-Library-App.git',
      live: 'https://vishal-book-library-app.netlify.app/',
      featured: true,
    },
    {
      id: 3,
      title: 'Social Media App',
      description: 'Create, edit, and delete posts on a fully responsive social media app secured with Firebase Authentication in React Vite.',
      image: socialMedia,
      technologies: ['React', 'Tailwind CSS', 'Firebase', 'Redux-Toolkit', 'Local Storage'],
      github: 'https://github.com/Vishalchorala/Social-Media-App.git',
      live: 'https://vishal-social-media-app.netlify.app/',
      featured: true,
    },
    {
      id: 4,
      title: 'Social Media Analytics',
      description: 'Analytics dashboard for social media metrics with data visualization, reporting, and automated insights generation.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'D3.js', 'Python', 'FastAPI', 'PostgreSQL'],
      github: '#',
      live: '#',
      featured: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
            <p className="text-gray-300 text-lg mt-6 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and passion for development
            </p>
          </motion.div>

          {/* Featured Projects */}
          <div className="space-y-16 mb-20">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                  }`}
              >
                <motion.div
                  className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
                  whileHover={{ scale: 1.02 }}
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                >
                  <div className="relative group overflow-hidden rounded-2xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{
                        opacity: hoveredProject === project.id ? 1 : 0,
                        y: hoveredProject === project.id ? 0 : 20
                      }}
                      className="absolute inset-0 flex items-center justify-center space-x-4"
                    >
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-slate-800/80 backdrop-blur-sm rounded-full text-white hover:bg-slate-700 transition-colors"
                      >
                        <Github size={24} />
                      </motion.a>
                      <motion.a
                        href={project.live}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-slate-800/80 backdrop-blur-sm rounded-full text-white hover:bg-slate-700 transition-colors"
                      >
                        <ExternalLink size={24} />
                      </motion.a>
                    </motion.div>
                  </div>
                </motion.div>

                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <motion.h3
                    className="text-3xl font-bold text-white mb-4"
                    whileHover={{ x: 10 }}
                  >
                    {project.title}
                  </motion.h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full text-sm border border-blue-400/30 text-blue-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                    >
                      <Github size={20} />
                      <span>Code</span>
                    </motion.a>
                    <motion.a
                      href={project.live}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Other Projects Grid */}
          {/* <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold text-center text-white mb-12">Other Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherProjects.map((project) => (
                <motion.div
                  key={project.id}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden group"
                >
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60" />
                  </div>

                  <div className="p-6">
                    <h4 className="text-xl font-semibold text-white mb-3">{project.title}</h4>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-blue-500/20 rounded-full text-xs text-blue-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex space-x-3">
                        <motion.a
                          href={project.github}
                          whileHover={{ scale: 1.1 }}
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          <Github size={18} />
                        </motion.a>
                        <motion.a
                          href={project.live}
                          whileHover={{ scale: 1.1 }}
                          className="text-gray-400 hover:text-blue-400 transition-colors"
                        >
                          <ExternalLink size={18} />
                        </motion.a>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                      >
                        View Details
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;