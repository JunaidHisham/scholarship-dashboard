import logo from './logo.svg'
import './App.css'
import React, { useContext, useEffect, useState } from 'react'
import Store, { Context } from './components/context/store'
import MainRouter from './components/routing/MainRouter'
import 'animate.css/animate.min.css'

const App = () => {
  const { state } = useContext(Context)
  const [reswidth, setResWidth] = useState(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', () => setResWidth(window.innerWidth))
  }, [])
  return (
    <Store>
      <MainRouter reswidth={reswidth} />
    </Store>
  )
}
export default App
