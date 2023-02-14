import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocials'
import { useTranslation } from "react-i18next";


const Header = () => {
  const { t } = useTranslation();

  return (
    <header>
      <div className="container header__container">
        <h5>{t("greeting")}</h5>
        <h1>Robert Mihai Maracine</h1>
        <h5 className="text-light">{t("developer")}</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={ME} alt="me" />
        </div>
      </div>
    </header>
  )
}

export default Header
