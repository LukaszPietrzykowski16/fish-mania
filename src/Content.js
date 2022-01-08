import React, { useState, useEffect } from 'react';
import './style.css';



const Content = ()  => {
  const [text, setText] = useState('random title');
    
  useEffect(() => {
    const interval = setInterval(() => {
      if (text === 'random title') {
        setText('hello world');
      } else {
        setText('random title');
      }
    }, 5000 ) 
    return () => {
      clearInterval(interval);
    }
  })
 

    return (

    <section className='background-img'>
        <div className='string'> {text} </div>
    </section>
      
  )
 
}

export default Content;
