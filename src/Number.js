import React, {useState, useEffect} from 'react';
import './style.css';
import  gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";



const Number = ()  => {
  gsap.registerPlugin(ScrollTrigger);

 /* useEffect(() => {
    gsap.from('.inc-number', {scrollTrigger:
    {trigger: '.inc-number', 
    toggleActions: 'restart pause restart pause'},
    
     }),
    bruh()
     
  })
  */
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (value < 100) {
        setValue(value+1);
      } else {
        setValue(100);
      }
    }, 50 ) 
    return () => {
      clearInterval(interval);
    }
  })
  
 
  return (
      <div className='number'>
          <div className='numbers-counter'>
              <div className='inc-number'>
              {value}
              </div>
              <div className='number-text'>
                  Some text  
              </div>
              
          </div>
          <div className='numbers-counter'>
              <div className='inc-number'>
              {value}
              </div>
              <div className='number-text'>
                  Some text  
              </div>
              
          </div>
          <div className='numbers-counter'>
              <div className='inc-number'>
              {value}
              </div>
              <div className='number-text'>
                  Some text  
              </div>
              
          </div>
          <div className='numbers-counter'>
              <div className='inc-number'>
              {value}
              </div>
              <div className='number-text'>
                  Some text  
              </div>
              
          </div>
      </div>
  )
}



export default Number;