import { React, useState } from "react";
import Snake from "../assets/snake.svg";
import ProjectLogo from "../assets/shopping.svg";
import PIlogo from "../assets/pi.svg";
import { Link } from "react-router-dom";
import { motion, useMotionValue } from "framer-motion";

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
];

const DRAG_BUFFER = 50;

const Images = () => {
  return (
    <>
      {imgs.map((img, index) => {
        return (
          <div
            key={index}
            className="bg-purple-950 w-auto iphone:max-sm:w-[50%] p-4 shrink-0 rounded-xl"
          >
            <Link
              to={img.url}
              draggable="false"
              className="flex flex-col gap-4"
            >
              <img
                src={img.src}
                alt="image of project"
                className="iphone:max-sm:w-14 iphone:max-sm:h-14 w-63 h-63 object-cover "
                draggable="false"
              />
              <div className="h-auto bg-gray-900 w-full rounded-lg text-nowrap">
                <h1 className="font-bold text-xl text-center p-4 iphone:max-sm:p-2 iphone:max-sm:text-sm">
                  {img.title}
                </h1>
              </div>
            </Link>
          </div>
        );
      })}
    </>
  );
};

const Projects = () => {
  const [dragging, setDragging] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);

  const onDragStart = () => {
    setDragging(true);
  };

  const onDragEnd = () => {
    setDragging(false);
    const x = dragX.get();
    if (x <= -DRAG_BUFFER) {
      setImgIndex((prev) => prev + 1);
    } else if (x >= DRAG_BUFFER) {
      setImgIndex((prev) => prev - 1);
    }
  };

  const dragX = useMotionValue(0);
  console.log(dragX.get());

  return (
    <div
      id="project"
      className="relative bg-purpley font-bold text-white h-full pt-72 iphone:max-sm:pt-32 overflow-hidden"
    >
      <div className=" flex flex-col gap-8">
        <h1 className="text-5xl text-center">Projects</h1>
        <h1 className="text-3xl text-center mb-16">
          here are some of the projects i've worked{" "}
        </h1>
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
          style={{
            x: dragX,
          }}
          className="flex items-center iphone:max-sm:overflow-hidden cursor-grab active:cursor-grabbing justify-around"
        >
          <Images />
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
