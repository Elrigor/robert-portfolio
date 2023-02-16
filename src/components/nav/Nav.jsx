import React from "react";
import "./nav.css";
import { AiFillHome } from "react-icons/ai";
import { RiUser2Fill } from "react-icons/ri";
import { BiCodeAlt } from "react-icons/bi";
import { MdOutlineWork } from "react-icons/md";

import { AiFillMessage } from "react-icons/ai";
import { useState, useEffect } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#top");

  useEffect(() => {
    const handleScroll = () => {
      const anchorLinks = ["#top", "#about", "#skill", "#projects", "#contact"];

      for (const link of anchorLinks) {
        const element = document.querySelector(link);
        if (
          element &&
          window.pageYOffset >= element.offsetTop - 500 &&
          window.pageYOffset < element.offsetTop + element.offsetHeight
        ) {
          setActiveNav(link);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeNav]);

  useEffect(() => {
    const targetTop = window.innerWidth < 750 ? document.querySelector("#MobileTop").offsetTop : document.querySelector("#top").offsetTop;
    window.scrollTo({
      top: targetTop,
      behavior: "smooth",
    });
  }, []);
  

  return (
    <nav>
      <a
        href="#top"
        onClick={() => setActiveNav("#top")}
        className={activeNav === "#top" ? "active" : ""}
      >
        <AiFillHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <RiUser2Fill />
      </a>
      <a
        href="#skill"
        onClick={() => setActiveNav("#skill")}
        className={activeNav === "#skill" ? "active" : ""}
      >
        <MdOutlineWork />
      </a>
      <a
        href="#projects"
        onClick={() => setActiveNav("#projects")}
        className={activeNav === "#projects" ? "active" : ""}
      >
        <BiCodeAlt />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <AiFillMessage />
      </a>
    </nav>
  );
};

export default Nav;
