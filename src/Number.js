import './style.css';



const Number = ()  => {
    const numberOne = 654;
    return (
      <div className='number'>
          <div className='numbers-counter'>
              <div className='inc-number'>
                {numberOne}
              </div>
              <div className='number-text'>
                  Some text
              </div>
          </div>
      </div>
  )
}



export default Number;