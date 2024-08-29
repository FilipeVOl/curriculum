import { React, useEffect, useRef, useState } from "react";
import {
  motion,
  inView,
  useInView
} from "framer-motion";
import Photo from "../assets/profi2.jpeg";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import JsLogo from "../assets/jslogo.svg";
import ReactLogo from "../assets/reactlogo.svg";
import AngularLogo from "../assets/angularlogo.svg";
import NodeLogo from "../assets/nodelogo.svg";
import MongoLogo from "../assets/mongologo.svg";

const Sliders = ({ value, photoValue, defValue }) => {
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
      <Box sx={{ width: 300 }}>
        <h1 className="font-bold text-purpley flex flex-row items-center gap-12">
          {<img src={photoValue} alt="Javascript logo"/>} {value}
        </h1>
        <Slider
          aria-label=""
          defaultValue={defValue}
          sx={{ color: "#4433F4" }}
        />
      </Box>
    </motion.div>
  );
};

const About2 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 1.0, once: true })

  return (
    <div>
      <div className="flex flex-row items-center justify-center gap-8 min-w-[40%] iphone:max-sm:mt-[21rem] iphone:max-sm:flex iphone:max-sm:flex-col">
        <motion.div
          ref={ref}
          className="rounded-full"
          animate={
            isInView
            ? { 
              boxShadow: ["0 0 20px rgba(68, 51, 244, 0.75)", "0 0 100px rgba(68, 51, 244, 0.75)", "0 0 20px rgba(68, 51, 244, 0.75)"],
            }
            : { boxShadow: "0 "}
            }
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
          className="rounded-full"
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              amount: 0.5,
              threshold: 0.1,
              once: true,
            }}
          >
            <img
              src={Photo}
              alt="Profile"
              className="rounded-full w-96 h-96 object-cover"
            />
          </motion.div>
        </motion.div>
        <div className="">
          <h1 className="font-bold text-2xl mb-8 text-purpley">Here are some of my abilities.</h1>
          <Sliders photoValue={JsLogo} defValue={90} value="JavaScript" />
          <Sliders photoValue={ReactLogo} defValue={100} value="React" />
          <Sliders photoValue={AngularLogo} defValue={60} value="Angular" />
          <Sliders photoValue={NodeLogo} defValue={50} value="NodeJS" />
          <Sliders photoValue={MongoLogo} defValue={30} value="MongoDB" />
        </div>
      </div>
    </div>
  );
};

export default About2;
