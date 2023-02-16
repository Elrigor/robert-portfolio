import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { IoLanguage } from "react-icons/io5";
import "../language-switcher/language-switcher.css";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import Dropdown from "./Dropdown";
import LightMode from "../lightmode-switcher/Lightmode-switcher";

const Wrapper = styled.div``;

const MobileSwitches = () => {
  const { i18n } = useTranslation();
  const [showDropdown, setShowDropdown] = useState(false);
  const ref = useRef();

  const handleLanguageChange = (lng) => {
    setShowDropdown(false);
    i18n.changeLanguage(lng);
    Cookies.set("language", lng, { expires: 365 });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <div
      ref={ref}
      className="mobile__switches"
      style={{ display: "none", marginTop: "3%" }}
    >
      <LightMode />
      <a onClick={() => setShowDropdown(!showDropdown)}>
        <IoLanguage className="icon-size" />
      </a>
      {showDropdown && (
        <Wrapper>
          <Dropdown handleLanguageChange={handleLanguageChange} />
        </Wrapper>
      )}
    </div>
  );
};

export default MobileSwitches;
