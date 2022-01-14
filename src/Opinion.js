import React, { useState, useEffect } from 'react';
import './style.css';



const Opinion = ()  => {
  const clients = [
      {
      id: 0,
      name: 'Adam Bruh 1', 
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
        name: 'Adam Bruh4', 
        opinion: 'loreem ipsum loreem ipsum loreem ipsum loreem ipsum loreem ipsum loreem ipsum loreem ipsum loreem ipsum loreem ipsum loreem ipsum loreem ipsum'
      },
      {
        id: 4,
        name: 'heheheeheh', 
        opinion: 'loreem ipsum loreem ipsum loreem ipsum loreem ipsum loreem ipsum loreem ipsum loreem ipsum loreem ipsum loreem ipsum loreem ipsum loreem ipsum'
      }
  ]

  const clientName = clients.map((client) => {
    return client.name
  }

  )

  const opinion = clients.map((client) => {
    return client.opinion
  }

  )

  


  let [value, setValue] = useState(0);

  const checkValueLeft = () => {
  
    if (value === 0) {
      value = clientName.length;
    }
    setValue(value - 1)  
  }

  const checkValueRight = () => {
   
    if (value === clientName.length - 1) {
      value = -1;
    }
    setValue(value + 1)
 
   
  }
 
return (
      
      <div className='opinion-class'>
          
          <div className='left' onClick={() => checkValueLeft()}>
              left
          </div>
          <div className='clients-opinion'>
              <h5> {clientName[value]} </h5> 
              <p>{opinion[value]}  </p> 
          </div>
          <div className='left' onClick={() => checkValueRight()}>
              right
          </div>
      </div>
  )
}



export default Opinion;
