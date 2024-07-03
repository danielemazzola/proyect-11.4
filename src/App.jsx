import { useState } from 'react'
import './App.css'
import Time from './components/Time/Time'
import useTime from './hooks/useTime'
import Calcolator from './components/calcolator/Calculator'

const App = () => {
  const currentDate = useTime()
  return (
    <div>
      <Time date={currentDate} />
      <h1>Proyect 4</h1>
      <div>
        <Calcolator />
      </div>
    </div>
  )
}

export default App
