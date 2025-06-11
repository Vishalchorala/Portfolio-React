import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import '../styles/AnimatedBorder.css' // <-- Create this CSS file

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20" />

      <div
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center justify-between relative z-10 text-center md:text-left gap-7 md:gap-16"
      >
        {/* LEFT TEXT SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2"
        >
          <motion.h1
            className="text-3xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Hello, I'm{" "}
            <motion.span
              className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0%", "100%", "0%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              Vishal Chorala
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto md:mx-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            React.js & Frontend Developer focused on building responsive, interactive web applications.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToNext()}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View My Work
            </motion.button>

            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
              {/* <a href="/cv.pdf" download> */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-purple-500 text-purple-400 px-8 py-3 rounded-full font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300"
              >
                Download CV
              </motion.button>
            </a>
          </motion.div>

          <motion.div
            className="flex justify-center md:justify-start space-x-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {[
              { Icon: Github, href: "https://github.com/Vishalchorala" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/vishal-chorala-28378a21b/" },
              { Icon: Mail, href: "mailto:pintuchorala2004@gmail.com" },
            ].map(({ Icon, href }, index) => (
              <motion.a
                key={index}
                href={href}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Icon size={28} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center md:justify-end"
        >
          <div className="relative w-48 h-48 md:w-80 md:h-80 flex items-center justify-center">
            <div className="absolute w-full h-full rounded-full border-4 border-dashed border-purple-500 animate-dash"></div>
            <img
              src="./src/assets/programmer3.png"
              alt="Hero"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </motion.div>
      </div>

      {/* SCROLL DOWN INDICATOR */}
      <motion.div
        className="absolute bottom-8 left-2/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <motion.button
          onClick={scrollToNext}
          whileHover={{ scale: 1.1 }}
          className="text-white/70 hover:text-white transition-colors duration-300"
        >
          <ChevronDown size={32} />
        </motion.button>
      </motion.div>
    </section >
  );
};

export default Hero;