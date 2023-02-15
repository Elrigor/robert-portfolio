import React from "react";
import LightMode from "../lightmode-switcher/Lightmode-switcher";
import ChangeLanguage from "../language-switcher/Language-switcher";
const HeaderSwitches = () => {
  return (
    <div>
      <div className="header__switches">
        <LightMode />
        <ChangeLanguage />
      </div>
    </div>
  );
};

export default HeaderSwitches;
