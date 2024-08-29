import React from "react";
import Curriculum from "../assets/curriculum.svg";

const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-16 w-[100vw] md:w-full overflow-scroll md:overflow-hidden bg-purpley grid grid-cols-6 md:grid-cols-[1fr_3fr] items-center px-2 md:px-12">
      <img
        src={Curriculum}
        alt="curriculum"
        className="w-12 h-12 col-start-1 hidden md:block"
      />
      <div className="flex flex-row gap-8 justify-between md:justify-around">
        <button onClick={() => scrollToSection('about')} className="text-white space-x-2 col-start-2">
          <h1 className="text-white space-x-2 col-start-2 text-nowrap">
            About me
          </h1>
        </button>

        <button onClick={() => scrollToSection('services')} className="text-white space-x-2 col-start-2">
          <h1 className="text-white space-x-2 col-start-2">Services</h1>
        </button>

        <button onClick={() => scrollToSection('project')} className="text-white space-x-2 col-start-2">
          <h1 className="text-white space-x-2 col-start-2">Projects</h1>
        </button>

        <button onClick={() => scrollToSection('contact')} className="text-white space-x-2 col-start-2">
          <h1 className="text-white space-x-2 col-start-2">Contact</h1>
        </button>
      </div>
    </div>
  );
};

export default Navbar;