import React from 'react'
import './about.css'
import ME from '../../assets/me.jpg'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <section id='about'>
      <h5>{t("know")}</h5>
      <h2>{t("about")}</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img style={{height:"100%"}} src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>{t("experience")}</h5>
              <small>2+ {t("working")}</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>{t("projects")}</h5>
              <small>15+ {t("completed")}</small>
            </article>
          </div>

          <p> 
            Soy una persona con experiencia sobre todo, en apliaciones web. <br/>
            No obstante, he trabajado en varios proyectos tales como aplicaciones móviles, apliaciones de escritorio y bots de todo tipo (Discord, Telegram, Twitter etc.).<br/>
            Me encanta la programación y me gusta mucho aprender cosas nuevas al respecto. 
          </p>

          <a href="#contact" className='btn btn-primary'>{t("talk")}</a>
        </div>
      </div>
    </section>
  )
}

export default About