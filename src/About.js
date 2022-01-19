import React, {useEffect, useState } from 'react';
import ReactDom from 'react-dom';
import './style.css';
import image from './fishstore.jpg';
import  gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = ()  => {
    gsap.registerPlugin(ScrollTrigger);
  

    useEffect(() => {
        gsap.from('.main-content-class-image', {scrollTrigger: 
            {trigger: '.main-content-class-image', 
            toggleActions: 'restart pause restart pause'}, 
            y: 80,
            opacity: 0,
            duration: 1.5,})
            
    })
    
    useEffect(() => {
        gsap.from('.main-content-class', {scrollTrigger: 
            {trigger: '.main-content-class', 
            toggleActions: 'restart pause restart pause'}, 
            x: 80,
            opacity: 0,
            duration: 1.5,})
            
    })

    const [popUp, SetPopUp] = useState(false)

    return  (
    <main className='main-content'>
        <div className='main-content-class-image'>
            <img src={image}/>
        </div>
        <div className='main-content-class'>
            <h1> Some header </h1>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum feugiat magna sagittis nibh interdum malesuada. Proin sed condimentum purus. Aliquam erat volutpat. Praesent nec dolor eget erat condimentum rhoncus. Morbi feugiat scelerisque ligula, at hendrerit risus lacinia ut. Aenean purus mi, porttitor nec porta quis, fermentum quis magna. Fusce imperdiet lectus sit amet eros pharetra aliquam. Etiam tempor commodo tortor. 
       
        <button onClick={() => SetPopUp(true)}> More </button>
        </div>
        <div className={popUp ? "gallery-open": "gallery-close"}>
        <div className='overlay'>
            <div className='some-class'>
            <div className='exit-button' onClick={() => SetPopUp(false)}> X </div>
            <h1> Some header </h1>
            <p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum feugiat magna sagittis nibh interdum malesuada.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum feugiat magna sagittis nibh interdum malesuada. </p>
            </div>
        </div>
        </div>
    </main>
      
   
    
  )
}

export default About;
