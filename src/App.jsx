import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Header} from './Components/Header/Header.jsx'
import {Main} from './Components/Main/main.jsx'
import {Footer} from './Components/Footer/Footer.jsx'

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
