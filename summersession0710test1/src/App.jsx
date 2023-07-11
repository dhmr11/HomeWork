import React from 'react'
import Counter from './Components/Counter'
import Input from './Components/usestate/Input'
import EffectCounter from './Components/useEffect/EffectCounter'
import TimerComponent from './Components/useEffect/TimerComponent'
import FakeNews from './Components/Fakenews'
import {useState,useEffect} from 'react'
import TodayTime from './Components/useEffect/TodayTime'


function App() {


  return (
    <div>
      <TodayTime/>
    </div>
  )
}

export default App