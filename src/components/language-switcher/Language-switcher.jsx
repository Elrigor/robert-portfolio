import { useTranslation } from "react-i18next";
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import {IoLanguage} from 'react-icons/io5'
import './language-switcher.css'
import LightMode from "../lightmode-switcher/Lightmode-switcher";
import Cookies from "js-cookie";

const Dropdown = styled.div`
  background-color: var(--color-bg);
  border: 1px solid var(--color-primary);
  color: var(--color-white);
  border-radius: 4px;
  padding: 6px;
  z-index: 2;
  margin-right: 3em;
  margin-top: 1em;
  
  width: 100px;
  display: ${(props) => (props.show ? "block" : "none")};
  position: absolute;
  top: 40px;
  right: 0;
  animation: fadeIn 0.3s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const DropdownItem = styled.div`
padding: 10px;
cursor: pointer;
`;

const Wrapper = styled.div``;

const ChangeLanguage = () => {
  const ref = useRef();
  const { t, i18n } = useTranslation();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
    setShowDropdown(false);
    Cookies.set('language', lng, { expires: 365 });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  return (
    <div>
        <div ref={ref} className="disable__mobile__switches">
        <a href="" onClick={() => setShowDropdown(!showDropdown)}>
          <IoLanguage className="icon-size" />
        </a>
        {showDropdown && (
          <Wrapper onClick={() => setShowDropdown(false)}>
            <Dropdown show={showDropdown}>
              <DropdownItem
                className="hover-lang"
                onClick={() => handleLanguageChange("en")}
              >
                {t("english")}
              </DropdownItem>
              <DropdownItem
                className="hover-lang"
                onClick={() => handleLanguageChange("es")}
              >
                {t("spanish")}
              </DropdownItem>
            </Dropdown>
          </Wrapper>
        )}
       </div> 
        <div className="mobile__switches" style={{ display: "none"}}>
          <LightMode />
          <a href="" onClick={() => setShowDropdown(!showDropdown)}>
            <IoLanguage className="icon-size" />
          </a>
          <Dropdown show={showDropdown}>
            <DropdownItem className="hover-lang" onClick={() => handleLanguageChange("en")}>
              {t("english")}
            </DropdownItem>
            <DropdownItem className="hover-lang"onClick={() => handleLanguageChange("es")}>
              {t("spanish")}
            </DropdownItem>
          </Dropdown>
      </div>
    </div>
  );
};

export default ChangeLanguage;
