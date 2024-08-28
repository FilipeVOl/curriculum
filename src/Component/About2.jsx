import { React, useEffect, useRef } from "react";
import { motion, useInView, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import Photo from "../assets/profi2.jpeg";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import JsLogo from "../assets/jslogo.svg";
import ReactLogo from "../assets/reactlogo.svg";
import AngularLogo from "../assets/angularlogo.svg";
import NodeLogo from "../assets/nodelogo.svg";
import MongoLogo from "../assets/mongologo.svg";

const Sliders = ({ value, photoValue, defValue}) => {


  return (
    <motion.div
    initial={{
      opacity: 0,
      y: 20,
    }}
    whileInView={{
        opacity: 1,
        y: 0,
    }}
    transition={{
        duration: 0.95,
    }}
    >
      <Box sx={{ width: 300}}>
        <h1 className="font-bold text-purpley flex flex-row items-center gap-12">{<img src={photoValue} alt="Javascript logo" />} {value}</h1>
        <Slider aria-label="" defaultValue={defValue} sx={{ color: "#4433F4" }} />
      </Box>
    </motion.div>
  );
};


const About2 = () => {
  return (
    <div>
      <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{
        amount: "all",
        once: true,
      }}
      className="flex flex-row items-center gap-8 min-w-[40%]">
        <img
          src={Photo}
          alt="profile"
          className="w-96 h-96 shadow-lg object-cover shadow-purpley rounded-full"
        />
        <div>
        <Sliders photoValue={JsLogo} defValue={90} value="JavaScript" />
        <Sliders photoValue={ReactLogo} defValue={100} value="React" />
        <Sliders photoValue={AngularLogo} defValue={60} value="Angular" />
        <Sliders photoValue={NodeLogo} defValue={50} value="NodeJS" />
        <Sliders photoValue={MongoLogo} defValue={30} value="MongoDB" />
        </div>
        </motion.div>
    </div>
  );
};

export default About2;
