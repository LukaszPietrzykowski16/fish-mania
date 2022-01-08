import React from 'react';
import './style.css';



const Opinion = ()  => {
  const clients = [
      {
      id: 0,
      name: 'Adam Bruh', 
      opinion: 'loreem ipsum loreem ipsum loreem ipsum loreem ipsum loreem ipsum loreem ipsum loreem ipsum loreem ipsum loreem ipsum loreem ipsum loreem ipsum'},
      {
        id: 1,
        name: 'Adam Bruh 2', 
        opinion: 'loreem ipsum loreem ipsum loreem ipsum loreem ipsum loreem ipsum loreem ipsum loreem ipsum loreem ipsum loreem ipsum loreem ipsum loreem ipsum'
      }, 
      {
        id: 2,
        name: 'Adam Bruh 3', 
        opinion: 'loreem ipsum loreem ipsum loreem ipsum loreem ipsum loreem ipsum loreem ipsum loreem ipsum loreem ipsum loreem ipsum loreem ipsum loreem ipsum'
      },
      {
        id: 3,
        name: 'Adam Bruh', 
        opinion: 'loreem ipsum loreem ipsum loreem ipsum loreem ipsum loreem ipsum loreem ipsum loreem ipsum loreem ipsum loreem ipsum loreem ipsum loreem ipsum'
      }
  ]


return (
      
      <div className='opinion-class'>
          
          <div className='left'>
              left
          </div>
          <div className='clients-opinion'>
              <h5> Adam Bruh </h5>
              
              <p>loreem ipsum loreem ipsum loreem ipsum loreem ipsum loreem ipsum loreem ipsum loreem ipsum loreem ipsum loreem ipsum loreem ipsum loreem ipsum </p>
              
          </div>
          <div className='left'>
              left
          </div>
      </div>
  )
}



export default Opinion;
