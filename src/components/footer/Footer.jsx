import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#services">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/robert-mihai-maracine-741a70150/"><BsLinkedin/></a>
        <a href="https://github.com/Elrigor"><FaGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy;Robert Mihai Maracine. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer