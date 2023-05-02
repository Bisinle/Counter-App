import React from 'react'
import Styles from './CounterStyles/Styles.css'

import { useState } from 'react'

export default function CounterRender() {
  const [display, setDisplay] = useState (0)
  


  
  let increment =()=>{ setDisplay (display +1);  }
  let decrement =()=>{ setDisplay (display -1);  }
  let reset =()=>{ setDisplay (0);  }

 
  



  return (
    <div className='CounterRender' >

      <div className='CounterRender-content'>
          


        <h2 className='CounterRender-h2'>Counter</h2>
        <h1 className='CounterRender-h1'>{display}</h1>
        
        <div className='btn'>
          <button className='CounterRender-btn'onClick={increment}>+</button>
          <button className='CounterRender-btn' onClick={reset}>↻</button>
          <button className='CounterRender-btn' onClick={decrement}>-</button>
        </div>


      </div>
      
    </div>
  )
}
