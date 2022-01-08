import './style.css';
import svgTwo from './wave-2.svg';
import svgOne from './wave-1.svg';



const Subsection = ()  => {
  return (
      <div className='about-class'>
        <img src = {svgTwo} width="1900px" />
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
          <img src = {svgOne} width="1900px" />
         
         
      </div>
      
  )
}

// i need to do responsivity for this section 

export default Subsection;
