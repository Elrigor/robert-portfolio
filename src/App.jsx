import React from 'react'

import ChangeLanguage from './components/language-switcher/Language-switcher'
import Nav from './components/nav/Nav'
import Header from './components/header/Header'
import About from './components/about/About'

const App = () => {
  return (
    <>
        <ChangeLanguage />
        <Nav />
        <Header />
        <About />

    </>
  )
}

export default App