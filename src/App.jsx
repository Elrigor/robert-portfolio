import React from 'react'

import MobileSwitches from './components/mobile-switches/Mobile-switches'
import Nav from './components/nav/Nav'
import Header from './components/header/Header'
import About from './components/about/About'
import Skill from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

import './components/lightmode-switcher/lightmode-switcher.css'

const App = () => {

  return (
    <>
        <MobileSwitches />
        <Nav />
        <Header />
        <About />
        <Skill />
        <Projects />
        <Contact />
        <Footer />
    </>
  )
}

export default App