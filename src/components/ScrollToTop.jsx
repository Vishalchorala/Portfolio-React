import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowSmUp } from "react-icons/hi";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTopBtn = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={scrollToTopBtn}
                    className="fixed bottom-6 right-6 z-50 p-1 lg:p-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm border border-white/20"
                    aria-label="Scroll to top"
                >
                    <motion.div
                        animate={{ y: [0, -3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <HiArrowSmUp size={22} />
                    </motion.div>
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTop;