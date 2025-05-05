import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "@popmotion/popcorn";
import Snake from "../assets/snake.svg";
import ProjectLogo from "../assets/shopping.svg";
import PIlogo from "../assets/pi.png";
import MedvetLogo from "../assets/medvetlogo.svg";
import Poll from "../assets/poll.svg";

const imgs = [
  {
    src: Snake,
    title: "Rise Signals",
    url: "https://risesignalss.netlify.app/",
  },
  {
    src: ProjectLogo,
    title: "Shopping Cart",
    url: "https://filipe-shopping-cart.netlify.app/",
  },
  {
    src: PIlogo,
    title: "MobiSocial",
    url: "https://mobisocialpi.netlify.app/",
  },
  {
    src: MedvetLogo,
    title: "Medvet",
    url: "https://www.linkedin.com/in/filipegideao/overlay/1734637072774/single-media-viewer/?profileId=ACoAADQjCEoB1Ou8xBqIwKcKDF0bCHYS_RlZ2b0",
  },
  {
    src: Poll,
    title: "Enquetes",
    url: "https://heartfelt-tapioca-777b50.netlify.app/"
  }
];

const sliderVariants = {
  incoming: direction => ({
    x: direction > 0 ? "100%" : "-100%",
    scale: 1.2,
    opacity: 0
  }),
  active: { x: 0, scale: 1, opacity: 1 },
  exit: direction => ({
    x: direction > 0 ? "-100%" : "100%",
    scale: 1,
    opacity: 0.2
  })
};

const sliderTransition = {
  duration: 0.7,
  ease: [0.56, 0.03, 0.12, 1.04]
};

const Projects = () => {
  const [[imgIndex, direction], setImgIndex] = useState([0, 0]);
  const activeIndex = wrap(0, imgs.length, imgIndex);

  const swipeToImage = swipeDirection => {
    setImgIndex([imgIndex + swipeDirection, swipeDirection]);
  };

  const dragEndHandler = (_, dragInfo) => {
    const draggedDistance = dragInfo.offset.x;
    const swipeThreshold = 50;
    if (draggedDistance > swipeThreshold) {
      swipeToImage(-1);
    } else if (draggedDistance < -swipeThreshold) {
      swipeToImage(1);
    }
  };

  const skipToImage = idx => {
    let changeDirection = 0;
    if (idx > activeIndex) changeDirection = 1;
    else if (idx < activeIndex) changeDirection = -1;
    setImgIndex([idx, changeDirection]);
  };

  return (
    <div className="bg-purpley min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl text-center font-bold text-white mb-4">Projects</h1>
      <h2 className="text-3xl text-center text-white mb-8">
        here are some of the projects i've worked
      </h2>
      <div className="relative w-full max-w-xl h-80 flex items-center justify-center mb-8">
        <AnimatePresence initial={false} custom={direction}>
          <motion.a
            key={imgIndex}
            href={imgs[activeIndex].url}
            target="_blank"
            rel="noopener noreferrer"
            custom={direction}
            variants={sliderVariants}
            initial="incoming"
            animate="active"
            exit="exit"
            transition={sliderTransition}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={dragEndHandler}
            className="absolute w-full h-full flex flex-col items-center justify-center bg-purple-900 rounded-xl shadow-lg cursor-grab active:cursor-grabbing"
            style={{ textDecoration: "none" }}
          >
            <img
              src={imgs[activeIndex].src}
              alt={imgs[activeIndex].title}
              className="hover:scale-105 transition ease-in-out w-40 h-40 object-contain mb-4"
              draggable="false"
            />
            <div className="bg-gray-900 w-3/4 rounded-lg">
              <h1 className="font-bold text-xl text-center p-4 text-white">
                {imgs[activeIndex].title}
              </h1>
            </div>
          </motion.a>
        </AnimatePresence>
        <button
          onClick={() => swipeToImage(-1)}
          className="hover:scale-105 transition ease-in-out absolute left-2 top-1/2 -translate-y-1/2 bg-purple-700 text-white rounded-full w-10 h-10 flex items-center justify-center"
        >
          &#8592;
        </button>
        <button
          onClick={() => swipeToImage(1)}
          className="hover:scale-105 transition ease-in-out absolute right-2 top-1/2 -translate-y-1/2 bg-purple-700 text-white rounded-full w-10 h-10 flex items-center justify-center"
        >
          &#8594;
        </button>
      </div>
      <div className="flex gap-2">
        {imgs.map((img, idx) => (
          <button
            key={img.title}
            onClick={() => skipToImage(idx)}
            className={`hover:scale-105 transition ease-in-out w-4 h-4 rounded-full border-2 ${idx === activeIndex ? "bg-purple-700 border-white" : "bg-gray-700 border-gray-400"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;