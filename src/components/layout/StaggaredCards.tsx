import React, { useState, useEffect } from "react";
import { motion } from "motion/react";

import PeopleIcon from "../../assets/images/PeopleIcon.svg";
import FireIcon from "@/assets/images/FireIcon.svg";
import SparkleIcon from "@/assets/images/SparkleIcon.svg";
import AbstractCircles from "@/assets/images/abstract-cirlces.png"; // Import the backdrop image

const StaggeredCards = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [cardOrder, setCardOrder] = useState<number[]>([]); // Track the card order

  // Content for each card
  const cardContent = [
    {
      icon: FireIcon, // Icon for card 1
      title: "Web Development",
      description: "Build responsive and modern websites tailored to your needs.",
    },
    {
      icon: PeopleIcon, // Icon for card 2
      title: "Data Analytics",
      description: "Transform data into actionable insights with our expert analysis.",
    },
    {
      icon: SparkleIcon, // Icon for card 3
      title: "Design Services",
      description: "Craft stunning designs that leave a lasting impression.",
    },
  ];

  useEffect(() => {
    // Initialize cards
    const cardCount = 3; // Number of cards to display
    const initialOrder = Array.from({ length: cardCount }, (_, i) => i); // Initialize card order

    setCardOrder(initialOrder); // Set the initial order

    // Simulate cards being added one by one
    for (let i = 0; i < cardCount; i++) {
      setTimeout(() => {
        setVisibleCards((prev) => {
          if (prev.length < cardCount) {
            return [...prev, i];
          }
          return prev;
        });
      }, i * 300); // Stagger delay
    }
  }, []);

  useEffect(() => {
    // Automatically shuffle cards at intervals
    const interval = setInterval(() => {
      shuffleTopCard(); // Trigger the shuffle function
    }, 6000); // Shuffle every 4 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const shuffleTopCard = () => {
    setCardOrder((prevOrder) => {
      const newOrder = [...prevOrder];
      const firstCard = newOrder.shift(); // Remove the first card
      if (firstCard !== undefined) {
        newOrder.push(firstCard); // Add the first card to the end
      }
      return newOrder;
    });
  };

  return (
    <div className="relative w-[350px] h-[450px] flex justify-center items-center">
      {visibleCards.map((card, index) => (
        <motion.div
          key={cardOrder[index]} // Use dynamic order
          initial={{ opacity: 0, y: -50, rotate: 0 }} // Start offscreen, no rotation
          animate={{
            opacity: 1,
            y: index === 0 ? 0 : `${index * 35}px`, // Slight stacking offset
            scale: index === 0 ? 1 : 0.9, // Top card is larger
            rotate: index === 0 ? -5 : index === 1 ? 0 : 5, // Rotate each card differently
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className={`absolute glassmorphic-stacked-card rounded-lg cursor-pointer p-6 text-center flex flex-col items-center space-y-4`}
          style={{
            width: "550px",
            height: "250px",
            zIndex: visibleCards.length - index, // Staggered zIndex for overlapping
            transformOrigin: "center",
          }}
          onClick={() => {
            if (index === 0) shuffleTopCard(); // Only allow shuffling the top card
          }}
        >
          {/* Backdrop Image */}
          <div
            className="absolute inset-0 z-0 rounded-lg overflow-hidden"
            style={{
              backgroundImage: `url(${AbstractCircles})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.6, // Adjust opacity for better visibility
              pointerEvents: "none", // Ensure it doesn't interfere with interactions
            }}
          ></div>


          {/* Card Content */}
          <div className="relative z-10 flex items-center space-x-4">
            <img
              src={cardContent[cardOrder[index]].icon}
              alt={`${cardContent[cardOrder[index]].title} Icon`}
              className="w-14 h-14"
            />            
            <h2 className="text-3xl font-bold font-clash tracking-widest text-white">{cardContent[cardOrder[index]].title}</h2>
          </div>
          {/* Card Description Container */}
          <div className="relative z-10 bg-[#1A1A1A]/60 p-4 rounded-lg">
            <p className="text-white font-sora mt-4">
              {cardContent[cardOrder[index]].description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default StaggeredCards;
