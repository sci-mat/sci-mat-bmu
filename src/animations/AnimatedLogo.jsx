import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AnimatedLogo = () => {
  const [isHovered, setIsHovered] = useState(false);

  const textVariants = {
    hidden: {
      x: -40,
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    },
    exit: {
      x: -40,
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="flex justify-center items-center relative">
      <div 
        className="flex items-center gap-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.img
          src="https://dl.dropboxusercontent.com/scl/fi/wds2aptq1qtsts1ttx3rf/scimat.png?rlkey=gt8538jdbljq8mvax903piyik&st=n0p5y6e1"
          alt="scimat logo"
          className="h-16 mb-4"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
        <AnimatePresence mode="wait">
          {isHovered ? (
            <motion.h1
              className="text-lg md:text-xl absolute left-full ml-4 whitespace-nowrap"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              key="text"
            >
              Sci-Mat
            </motion.h1>
          ) : (
            <motion.h1
              className="text-lg md:text-2xl opacity-0"
              initial={{ opacity: 0 }}
              key="placeholder"
            >
              Sci-Mat
            </motion.h1>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AnimatedLogo;