import React from 'react'
import Styles from './CounterStyles/Styles.css'
import { createContext } from 'react';
import { useState } from 'react';
import ReactSwitch from 'react-switch'


export const themeContext = createContext(null)




export default function CounterRender() {
  const [count, setCount] = useState (0)
  const [theme, setTheme] = useState('light')
  
  function toggle (){
    setTheme((current)=> current ==='light' ? 'dark' : 'light')
    }
    
  let increment =  () => setCount (prevCount => prevCount +1) 
  let decrement = () => setCount(prevCount => prevCount-1)
  let reset =()=>{ setCount (0);  }

 
  



  return (
    <themeContext.Provider>
    <div className='CounterRender' id={theme} >
    <ReactSwitch 
             onChange={toggle}
        checked={theme==='dark'}
      />

      <div className='CounterRender-content'>
          


        <h2 className='CounterRender-h2'>Counter</h2>
        <h1 className='CounterRender-h1'>{count}</h1>
        
        <div className='btn'>
          <button className='CounterRender-btn'onClick={increment}>+</button>
          <button className='CounterRender-btn' onClick={reset}>↻</button>
          <button className='CounterRender-btn' onClick={decrement}>-</button>
        </div>


      </div>
      
    </div>
    </themeContext.Provider>
  )
}
