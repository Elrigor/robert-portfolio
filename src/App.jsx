import React from 'react'

import ChangeLanguage from './components/language-switcher/Language-switcher'
import Nav from './components/nav/Nav'
import Header from './components/header/Header'
import About from './components/about/About'
import Skill from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Footer from './components/footer/Footer'
import Contact from './components/contact/Contact'
const App = () => {
  return (
    <>
        <ChangeLanguage />
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