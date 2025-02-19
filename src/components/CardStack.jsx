import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CardStack = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null);

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  const handleCardClick = (id) => {
    setSelectedCard(cards.find((card) => card.id === id));
  };

  const handleModalClose = () => {
    setSelectedCard(null);
  };

  const handleDragEnd = (event, info) => {
    if (info.offset.x > 100) {
      prevCard();
    } else if (info.offset.x < -100) {
      nextCard();
    }
  };

  const Card = ({ id, title, description, image, index, currentIndex, totalCards }) => {
    const offset = (index - currentIndex + totalCards) % totalCards;
    const isFront = offset === 0;
    
    return (
      <motion.div
        className={`absolute w-[90vw] h-[40vh] md:w-[90vh] md:h-[60vh] bg-[#0e0e0e] rounded-2xl shadow-lg cursor-pointer overflow-hidden border-2  ${
          isFront ? "border-opacity-100 nice-border" : "border-opacity-50"
        }`}
        style={{
          transformOrigin: 'center',
          zIndex: totalCards - offset, 
        }}
        drag={isFront ? "x" : false}
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.5}
        onDragEnd={handleDragEnd}
        animate={{
          x: isFront ? 0 : `calc(-50% - ${offset * 20}px)`,
          y: isFront ? 0 : `calc(-50% - ${offset * 5}px)`,
          opacity: isFront ? 1 : 0.6 - offset * 0.1,
          scale: isFront ? 1 : 0.6 - offset * 0.001,
        }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 25,
        }}
        onClick={() => handleCardClick(id)}
      >
        <div className="relative w-full h-full overflow-hidden rounded-2xl">
          <img src={image} alt={title} className="object-cover w-full h-full" />
          <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-20">
            <div className="text-center p-2 md:p-4">
              <h3 className="text-xl md:text-3xl font-bold mb-2 text-white">{title}</h3>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  const Modal = ({ card, onClose }) => {
    return (
      <AnimatePresence>
        {card && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute inset-0 bg-black opacity-50"
              onClick={onClose}
            />
            <motion.div
              className="bg-[#0e0e0e] text-white rounded-lg shadow-xl w-11/12 md:w-4/5 h-3/4 md:h-3/5 overflow-hidden z-10 border-2 nice-border"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="h-full w-full flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 bg-cover bg-center" style={{ backgroundImage: `url(${card.image})` }} />
                <div className="w-full md:w-1/2 p-4 flex flex-col justify-start">
                  <h2 className="text-2xl md:text-4xl font-bold font-sans mb-4 text-white">{card.title}</h2>
                  <p className="text-lg font-sans text-gray-300">{card.description}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  const NavigationArrow = ({ direction, onClick }) => (
    <motion.div
      className={`absolute top-1/2 transform -translate-y-1/2 ${direction === "left" ? "left-4" : "right-4"} z-70 hidden md:block`}
      onClick={onClick}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{ transformOrigin: 'center' }}
    >
      <motion.div
        className="bg-transparent bg-opacity-70 rounded-full p-5 shadow-lg cursor-pointer"
        whileTap={{scale:1.2}}
        transition={{ duration: 0.2 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d={direction === "left" ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
          />
        </svg>
      </motion.div>
    </motion.div>
  );

  return (
    <div className="relative min-h-screen flex justify-center items-center overflow-hidden">
      <div className="relative w-[90vw] h-[90vh] flex justify-center items-center">
        {cards.map((card, index) => (
          <Card
            key={card.id}
            {...card}
            index={index}
            currentIndex={currentIndex}
            totalCards={cards.length}
          />
        ))}
        
        <NavigationArrow direction="left" onClick={prevCard} />
        <NavigationArrow direction="right" onClick={nextCard} />
      </div>
      <Modal card={selectedCard} onClose={handleModalClose} />
    </div>
  );
};

export default CardStack;
