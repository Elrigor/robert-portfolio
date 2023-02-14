import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import {AiFillHtml5} from 'react-icons/ai'
import {IoLogoCss3} from 'react-icons/io5'
import {DiJavascript1} from 'react-icons/di'
import {FaBootstrap} from 'react-icons/fa'
import {SiTailwindcss} from 'react-icons/si'
import {FaReact} from 'react-icons/fa'
import {SiPostgresql} from 'react-icons/si'
import {FaNodeJs} from 'react-icons/fa'
import {SiPhp} from 'react-icons/si'
import {FaPython} from 'react-icons/fa'
import {GrMysql} from 'react-icons/gr'
import {SiDjango} from 'react-icons/si'
import {SiWagtail} from 'react-icons/si'
import {SiNuxtdotjs} from 'react-icons/si'
import {SiFlutter} from 'react-icons/si'
import {SiKotlin} from 'react-icons/si'
import {TbCSharp} from 'react-icons/tb'
import {FaJava} from 'react-icons/fa'
import {FaAngular} from 'react-icons/fa'
import {SiHtmlacademy} from 'react-icons/si'

import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t } = useTranslation();
  return (
    <section id='experience'>
      <h5>{t("knowledge")}</h5>
      <h2>{t("skills")}</h2>
      
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>{t("frontdev")}</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <AiFillHtml5 className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>{t("ex")} <BsPatchCheckFill className='experience__check-icon'/></small>
              </div>
            </article>
            <article className='experience__details'>
              <IoLogoCss3 className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>{t("ex")} <BsPatchCheckFill className='experience__check-icon'/></small>
              </div>
            </article>
            <article className='experience__details'>
              <DiJavascript1 className='experience__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>{t("ex")} <BsPatchCheckFill className='experience__check-icon'/></small>
              </div>
            </article>
            <article className='experience__details'>
              <FaBootstrap className='experience__details-icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>{t("ad")}</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaReact className='experience__details-icon' />
              <div>
                <h4>React</h4>
                <small className='text-light'>{t("ad")}</small>
              </div>
            </article>            
            <article className='experience__details'>
              <SiTailwindcss className='experience__details-icon' />
              <div>
                <h4>Tailwind</h4>
                <small className='text-light'>{t("in")}</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiNuxtdotjs className='experience__details-icon' />
              <div>
                <h4>Nuxt JS</h4>
                <small className='text-light'>{t("in")}</small>
              </div>
            </article>     
            <article className='experience__details'>
              <FaAngular className='experience__details-icon' />
              <div>
                <h4>Angular</h4>
                <small className='text-light'>{t("in")}</small>
              </div>
            </article> 
            <article className='experience__details'>
              <SiHtmlacademy className='experience__details-icon' />
              <div>
                <h4>XML</h4>
                <small className='text-light'>{t("in")}</small>
              </div>
            </article> 
            <article className='experience__details'>
              <SiHtmlacademy className='experience__details-icon' />
              <div>
                <h4>XSD</h4>
                <small className='text-light'>{t("in")}</small>
              </div>
            </article> 
            <article className='experience__details'>
              <SiHtmlacademy className='experience__details-icon' />
              <div>
                <h4>DTD</h4>
                <small className='text-light'>{t("ba")}</small>
              </div>
            </article>             
          </div>
        </div>
        {/* END OF FRONTEND */}

        <div className="experience__backend">
        <h3>{t("backdev")}</h3>
          <div className="experience__content">
          <article className='experience__details'>
              <FaPython className='experience__details-icon' />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Experienced <BsPatchCheckFill className='experience__check-icon'/></small>
              </div>
            </article>
            <article className='experience__details'>
              <SiDjango className='experience__details-icon' />
              <div>
                <h4>Django</h4>
                <small className='text-light'>Experienced <BsPatchCheckFill className='experience__check-icon'/></small>
              </div>
            </article>          
            <article className='experience__details'>
              <SiWagtail className='experience__details-icon' />
              <div>
                <h4>Wagtail</h4>
                <small className='text-light'>Experienced <BsPatchCheckFill className='experience__check-icon'/></small>
              </div>
            </article>
            <article className='experience__details'>
              <TbCSharp className='experience__details-icon' />
              <div>
                <h4>C#</h4>
                <small className='text-light'>{t("ex")} <BsPatchCheckFill className='experience__check-icon'/></small>
              </div>
            </article>           
            <article className='experience__details'>
              <FaJava className='experience__details-icon' />
              <div>
                <h4>Java</h4>
                <small className='text-light'>{t("ex")} <BsPatchCheckFill className='experience__check-icon'/></small>
              </div>
            </article>                                   
            <article className='experience__details'>
              <FaNodeJs className='experience__details-icon' />
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>{t("ad")} </small>
              </div>
            </article>
            <article className='experience__details'>
              <SiPostgresql className='experience__details-icon' />
              <div>
                <h4>PostgreSQL</h4>
                <small className='text-light'>{t("ad")} </small>
              </div>
            </article>
            <article className='experience__details'>
              <GrMysql className='experience__details-icon' />
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>{t("in")} </small>
              </div>
            </article>              
            <article className='experience__details'>
              <SiKotlin className='experience__details-icon' />
              <div>
                <h4>Kotlin</h4>
                <small className='text-light'>{t("in")} </small>
              </div>
            </article>                     
            <article className='experience__details'>
              <SiPhp className='experience__details-icon' />
              <div>
                <h4>PHP</h4>
                <small className='text-light'>{t("ba")} </small>
              </div>
            </article>     
            <article className='experience__details'>
              <SiFlutter className='experience__details-icon' />
              <div>
                <h4>Flutter</h4>
                <small className='text-light'>{t("ba")} </small>
              </div>
            </article>        
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </section>
  )
}

export default Experience