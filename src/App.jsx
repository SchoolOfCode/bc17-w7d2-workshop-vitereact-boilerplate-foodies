import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Header} from './Components/Header/Header.jsx'
import {Main} from './Components/Main/main.jsx'
import {Footer} from './Components/Footer/Footer.jsx'
import { BookConsBox } from './Components/Main/BookConsBox.jsx'
import { Heroimg } from './Components/Main/Heroimg.jsx'
import { HowitWorks } from './Components/Main/HowitWorks.jsx'
import { FooterTitles } from './Components/Footer/FooterTitles.jsx'
import { FindUs } from './Components/Footer/FindUs.jsx'

function App() {
  return (
    <>
  <body>
    <Header />
    <Main />
    <Footer />
    
  </body>
    </>
  )
}

export default App
