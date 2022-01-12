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
      if (value < 300) {
        setValue(value+1);
      } else {
        setValue(300);
      }
    }, 10 ) 
    return () => {
      clearInterval(interval);
    }
  })
  
 
  return (
      <div className='number'>
          <div className='numbers-counter'>
              <div className='inc-number'>
              {value + 100 }
              </div>
              <div className='number-text'>
                  Some text  
              </div>
              
          </div>
          <div className='numbers-counter'>
              <div className='inc-number'>
              {value + 20}
              </div>
              <div className='number-text'>
                  Some text  
              </div>
              
          </div>
          <div className='numbers-counter'>
              <div className='inc-number'>
              {value + 85}
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