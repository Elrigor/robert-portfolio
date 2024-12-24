import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="www.linkedin.com/in/robertmima"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsLinkedin className="icon-size" />
      </a>
      <a
        href="https://github.com/Elrigor"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="icon-size" />
      </a>
    </div>
  );
};

export default HeaderSocials;
