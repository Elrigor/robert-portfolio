import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/robert-mihai-maracine-741a70150/" target="_blank"><BsLinkedin className='icon-size'/></a>
        <a href="https://github.com/Elrigor" target="_blank"><FaGithub className='icon-size'/></a>
    </div>
  )
}

export default HeaderSocials