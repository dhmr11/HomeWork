import React from 'react'
import {useState,useEffect} from 'react'
import Clock from './Clock'

function TodayTime() {

    

  return (
    <div>
        <span>오늘이<br></br></span>
        <span><Clock/></span>
        <span>밖에 안남았다니</span>
        
    
    </div>
  )
}

export default TodayTime