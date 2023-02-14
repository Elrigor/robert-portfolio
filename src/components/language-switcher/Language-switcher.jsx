import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import styled from "styled-components";
import i18n from "i18next";
import {FaLanguage} from 'react-icons/fa'

import './language-switcher.css'

const Button = styled.button`
  background-color: transparent;
  position: relative;
  margin-top: 1em;
  margin-right: 1em;
  cursor: pointer;
`;

const Dropdown = styled.div`
  background-color: var(--color-bg);
  border: 1px solid var(--color-primary);
  color: var(--color-primary);
  border-radius: 4px;
  padding: 6px;
  z-index: 2;
  margin-top: 10px;
  margin-left  10px;
  margin-right: 1em;
  
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

const ChangeLanguage = () => {
  const { t, i18n } = useTranslation();
  const [ setLanguage] = useState(i18n.language);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
    setShowDropdown(false);
  };

  return (
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
        
      <Button onClick={() => setShowDropdown(!showDropdown)}>
        <FaLanguage className="lang-icon" />
      </Button>
      <Dropdown show={showDropdown}>
        <DropdownItem className="hover-lang" onClick={() => handleLanguageChange("en")}>
          English
        </DropdownItem>
        <DropdownItem className="hover-lang"onClick={() => handleLanguageChange("es")}>
          Español
        </DropdownItem>
      </Dropdown>
    </div>
  );
};

export default ChangeLanguage;