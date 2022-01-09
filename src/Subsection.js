import React, { useState, useEffect } from 'react';
import './style.css';
import svgTwo from './wave-2.svg';
import svgOne from './wave-1.svg';



const Subsection = ()  => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', checkSize);
    return () => {
      window.removeEventListener('resize', checkSize);
    }
  })
  
  return (
      <div className='about-class'>
        <img src = {svgTwo} width={size - 17} />
         <div className='container-class'>
           
              <div className='text-class'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum feugiat magna sagittis nibh interdum malesuada. Proin sed condimentum purus. Aliquam erat volutpat.
              </div>
              <div className='text-class'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum feugiat magna sagittis nibh interdum malesuada. Proin sed condimentum purus. Aliquam erat volutpat.
              </div>
              <div className='text-class'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum feugiat magna sagittis nibh interdum malesuada. Proin sed condimentum purus. Aliquam erat volutpat.
              </div>
          </div>
          <img src = {svgOne} width={size - 17}/>
         
         
      </div>
      
  )
}

// i need to do responsivity for this section

export default Subsection;
