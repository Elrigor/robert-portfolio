import React from 'react'

import ChangeLanguage from './components/language-switcher/Language-switcher'
import Nav from './components/nav/Nav'
import Header from './components/header/Header'
import About from './components/about/About'
import Skill from './components/skills/Skills'

const App = () => {
  return (
    <>
        <ChangeLanguage />
        <Nav />
        <Header />
        <About />
        <Skill />

    </>
  )
}

export default App