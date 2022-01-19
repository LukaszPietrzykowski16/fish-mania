import React from 'react'
import './style.css';
import svgOne from './fish1.svg';
import svgTwo from './fish2.svg';

function Fishes() {
    return (
        <div className='fishes'>
            <div className='fish1'>
            <img src = {svgOne}  />
            </div>
            <div className='fish2'>
            <img src = {svgTwo}  />
            </div>
        </div>
    )
}

export default Fishes
