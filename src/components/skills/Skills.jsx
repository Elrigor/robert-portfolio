import React from 'react'
import './skills.css'
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
import {MdDns} from 'react-icons/md'
import {AiFillLock} from 'react-icons/ai'
import {FaEnvelope} from 'react-icons/fa'
import {IoStatsChartSharp} from 'react-icons/io5'
import {SiNginx} from 'react-icons/si'
import {SiApache} from 'react-icons/si'
import {GiUnicorn} from 'react-icons/gi'
import {TfiGithub} from 'react-icons/tfi'
import {AiFillGithub} from 'react-icons/ai'
import {BiGitBranch} from 'react-icons/bi'
import {AiFillGitlab} from 'react-icons/ai'
import {FaDocker} from 'react-icons/fa'
import {FaUbuntu} from 'react-icons/fa'
import {SiArchlinux} from 'react-icons/si'
import {DiDebian} from 'react-icons/di'

import { useTranslation } from "react-i18next";

const Skill = () => {
  const { t } = useTranslation();
  return (
    <section id='skill'>
      <h5>{t("knowledge")}</h5>
      <h2>{t("skills")}</h2>
      
      <div className="container skill__container">
        <div className="skill__frontend">
          <h3>{t("frontdev")}</h3>
          <div className="skill__content">
            <article className='skill__details'>
              <AiFillHtml5 className='skill__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>{t("ad")} <BsPatchCheckFill className='skill__check-icon'/></small>
              </div>
            </article>
            <article className='skill__details'>
              <IoLogoCss3 className='skill__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>{t("ad")} <BsPatchCheckFill className='skill__check-icon'/></small>
              </div>
            </article>
            <article className='skill__details'>
              <DiJavascript1 className='skill__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>{t("ad")} <BsPatchCheckFill className='skill__check-icon'/></small>
              </div>
            </article>
            <article className='skill__details'>
              <FaBootstrap className='skill__details-icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>{t("ad")} <BsPatchCheckFill className='skill__check-icon'/></small>
              </div>
            </article>
            <article className='skill__details'>
              <FaReact className='skill__details-icon' />
              <div>
                <h4>React</h4>
                <small className='text-light'>{t("ad")} <BsPatchCheckFill className='skill__check-icon'/></small>
              </div>
            </article>            
            <article className='skill__details'>
              <SiTailwindcss className='skill__details-icon' />
              <div>
                <h4>Tailwind</h4>
                <small className='text-light'>{t("in")}</small>
              </div>
            </article>
            <article className='skill__details'>
              <SiNuxtdotjs className='skill__details-icon' />
              <div>
                <h4>Nuxt JS</h4>
                <small className='text-light'>{t("in")}</small>
              </div>
            </article>     
            <article className='skill__details'>
              <FaAngular className='skill__details-icon' />
              <div>
                <h4>Angular</h4>
                <small className='text-light'>{t("in")}</small>
              </div>
            </article> 
            <article className='skill__details'>
              <SiHtmlacademy className='skill__details-icon' />
              <div>
                <h4>XML</h4>
                <small className='text-light'>{t("in")}</small>
              </div>
            </article> 
            <article className='skill__details'>
              <SiHtmlacademy className='skill__details-icon' />
              <div>
                <h4>XSD</h4>
                <small className='text-light'>{t("in")}</small>
              </div>
            </article> 
            <article className='skill__details'>
              <SiHtmlacademy className='skill__details-icon' />
              <div>
                <h4>DTD</h4>
                <small className='text-light'>{t("ba")}</small>
              </div>
            </article>             
          </div>
        </div>
        {/* END OF FRONTEND */}

        <div className="skill__backend">
          <h3>{t("backdev")}</h3>
          <div className="skill__content">
          <article className='skill__details'>
              <FaPython className='skill__details-icon' />
              <div>
                <h4>Python</h4>
                <small className='text-light'>{t("ad")} <BsPatchCheckFill className='skill__check-icon'/></small>
              </div>
            </article>
            <article className='skill__details'>
              <SiDjango className='skill__details-icon' />
              <div>
                <h4>Django</h4>
                <small className='text-light'>{t("ad")} <BsPatchCheckFill className='skill__check-icon'/></small>
              </div>
            </article>          
            <article className='skill__details'>
              <SiWagtail className='skill__details-icon' />
              <div>
                <h4>Wagtail</h4>
                <small className='text-light'>{t("ad")} <BsPatchCheckFill className='skill__check-icon'/></small>
              </div>
            </article>
            <article className='skill__details'>
              <TbCSharp className='skill__details-icon' />
              <div>
                <h4>C#</h4>
                <small className='text-light'>{t("ad")} <BsPatchCheckFill className='skill__check-icon'/></small>
              </div>
            </article>           
            <article className='skill__details'>
              <FaJava className='skill__details-icon' />
              <div>
                <h4>Java</h4>
                <small className='text-light'>{t("ad")} <BsPatchCheckFill className='skill__check-icon'/></small>
              </div>
            </article>                                   
            <article className='skill__details'>
              <FaNodeJs className='skill__details-icon' />
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>{t("ad")} <BsPatchCheckFill className='skill__check-icon'/></small>
              </div>
            </article>
            <article className='skill__details'>
              <SiPostgresql className='skill__details-icon' />
              <div>
                <h4>PostgreSQL</h4>
                <small className='text-light'>{t("ad")} <BsPatchCheckFill className='skill__check-icon'/></small>
              </div>
            </article>
            <article className='skill__details'>
              <GrMysql className='skill__details-icon' />
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>{t("in")} </small>
              </div>
            </article>              
            <article className='skill__details'>
              <SiKotlin className='skill__details-icon' />
              <div>
                <h4>Kotlin</h4>
                <small className='text-light'>{t("in")} </small>
              </div>
            </article>                     
            <article className='skill__details'>
              <SiPhp className='skill__details-icon' />
              <div>
                <h4>PHP</h4>
                <small className='text-light'>{t("ba")} </small>
              </div>
            </article>     
            <article className='skill__details'>
              <SiFlutter className='skill__details-icon' />
              <div>
                <h4>Flutter</h4>
                <small className='text-light'>{t("ba")} </small>
              </div>
            </article>        
          </div>
        </div>
        {/* END OF BACKEND */}
        <div className="skill__backend">
        <h3>{t("web")}</h3>
          <div className="skill__content">
            <article className='skill__details'>
              <MdDns className='skill__details-icon' />
              <div>
                <h4>DNS</h4>
                <small className='text-light'>{t("in")}</small>
              </div>
            </article>
            <article className='skill__details'>
              <AiFillLock className='skill__details-icon' />
              <div>
                <h4>SSL</h4>
                <small className='text-light'>{t("in")}</small>
              </div>
            </article>   
            <article className='skill__details'>
              <FaEnvelope className='skill__details-icon' />
              <div>
                <h4>MX</h4>
                <small className='text-light'>{t("in")}</small>
              </div>
            </article> 
            <article className='skill__details'>
              <IoStatsChartSharp className='skill__details-icon' />
              <div>
                <h4>SEO</h4>
                <small className='text-light'>{t("in")}</small>
              </div>
            </article>
            <article className='skill__details'>
              <SiNginx className='skill__details-icon' />
              <div>
                <h4>Nginx</h4>
                <small className='text-light'>{t("in")}</small>
              </div>
            </article>   
            <article className='skill__details'>
              <SiApache className='skill__details-icon' />
              <div>
                <h4>Apache</h4>
                <small className='text-light'>{t("in")}</small>
              </div>
            </article>  
            <article className='skill__details'>
              <GiUnicorn className='skill__details-icon' />
              <div>
                <h4>Gunicorn</h4>
                <small className='text-light'>{t("in")}</small>
              </div>
            </article>  
            <article className='skill__details'>
              <TfiGithub className='skill__details-icon' />
              <div>
                <h4>GH Pages</h4>
                <small className='text-light'>{t("in")}</small>
              </div>
            </article>              
          </div>
        </div>
        {/* END OF WEB SKILLS */}
        <div className="skill__backend">
        <h3>{t("system")}</h3>
          <div className="skill__content">
          <article className='skill__details'>
            <FaUbuntu className='skill__details-icon' />
            <div>
              <h4>Ubuntu</h4>
              <small className='text-light'>{t("ad")}</small>
            </div>
          </article> 
          <article className='skill__details'>
              <DiDebian className='skill__details-icon' />
              <div>
                <h4>Debian</h4>
                <small className='text-light'>{t("ad")}</small>
              </div>
            </article> 
            <article className='skill__details'>
              <BiGitBranch className='skill__details-icon' />
              <div>
                <h4>Git</h4>
                <small className='text-light'>{t("in")}</small>
              </div>
            </article>
            <article className='skill__details'>
              <AiFillGithub className='skill__details-icon' />
              <div>
                <h4>Github</h4>
                <small className='text-light'>{t("in")}</small>
              </div>
            </article>   
            <article className='skill__details'>
              <AiFillGitlab className='skill__details-icon' />
              <div>
                <h4>Gitlab</h4>
                <small className='text-light'>{t("in")}</small>
              </div>
            </article> 
            <article className='skill__details'>
              <FaDocker className='skill__details-icon' />
              <div>
                <h4>Docker</h4>
                <small className='text-light'>{t("in")}</small>
              </div>
            </article>  
            <article className='skill__details'>
              <SiArchlinux className='skill__details-icon' />
              <div>
                <h4>Arch</h4>
                <small className='text-light'>{t("in")}</small>
              </div>
            </article>         
          </div>
        </div>
        {/* END OF SYSTEM SKILLS */}
      </div>
    </section>
  )
}

export default Skill