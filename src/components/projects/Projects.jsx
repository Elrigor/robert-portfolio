import React from 'react'
import './projects.css'
import IMG1 from '../../assets/hutao.png'
import IMG2 from '../../assets/wizardeo.png'
import IMG3 from '../../assets/task.png'
import {AiFillGithub} from 'react-icons/ai'
import {HiStatusOnline} from 'react-icons/hi'
import { useTranslation } from "react-i18next";


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'hutaoweb',
    github: 'https://github.com/Elrigor/hutaoWeb',
    demo: ''
  },
  {
    id: 2,
    image: IMG2,
    title: 'wizardeoweb',
    github: '',
    demo: 'https://wizardeo.es',
  },
  {
    id: 3,
    image: IMG3,
    title: 'taskbot',
    github: 'https://github.com/Elrigor/React-Tasks-Application',
    demo: 'https://elrigor.github.io/React-Tasks-Application/'
  }, 
]


const Projects = () => {
  const { t } = useTranslation();

  const translatedData = data.map(item => {
    return {
      ...item,
      title: t(item.title)
    }
  });

  return (
    <section id='projects'>
      <h5>{t("personalprj")}</h5>
      <h2>{t("projects")}</h2>

      <div className="container project__container">
        {
          translatedData.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='project__item'>
                <div className="project__item-image">
                  <img className="project__image" src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="project__item-cta">
                  {github && <a href={github} className='btn' target='_blank'>Github <AiFillGithub /></a>}
                  {demo && <a href={demo} className='btn btn-primary' target='_blank'>{t("live")} <HiStatusOnline /></a>}
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Projects