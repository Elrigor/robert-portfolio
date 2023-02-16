import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { IoLanguage } from "react-icons/io5";
import "./language-switcher.css";
import Cookies from "js-cookie";
import Dropdown from "./Dropdown";
import { useTranslation } from "react-i18next";
const Wrapper = styled.div``;

const ChangeLanguage = () => {
  const ref = useRef();
  const { i18n } = useTranslation();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
    setShowDropdown(false);
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
    <div ref={ref} className="disable__mobile__switches">
      <a onClick={() => setShowDropdown(!showDropdown)}>
        <IoLanguage className="icon-size" />
      </a>
      {showDropdown && (
        <Wrapper onClick={() => setShowDropdown(false)}>
          <Dropdown handleLanguageChange={handleLanguageChange} />
        </Wrapper>
      )}
    </div>
  );
};

export default React.memo(ChangeLanguage);
