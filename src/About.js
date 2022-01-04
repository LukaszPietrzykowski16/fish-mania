import './style.css';
import image from './fishstore.jpg';


const About = ()  => {
    
    return (
    <main className='main-content'>
        <div className='main-content-class'>
            <img src={image}/>
        </div>
        <div className='main-content-class'>
            <h1> Some header </h1>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum feugiat magna sagittis nibh interdum malesuada. Proin sed condimentum purus. Aliquam erat volutpat. Praesent nec dolor eget erat condimentum rhoncus. Morbi feugiat scelerisque ligula, at hendrerit risus lacinia ut. Aenean purus mi, porttitor nec porta quis, fermentum quis magna. Fusce imperdiet lectus sit amet eros pharetra aliquam. Etiam tempor commodo tortor. 
        Nunc molestie lorem ac ante sagittis pharetra. Sed in tincidunt metus, ac vestibulum nisl. Curabitur tincidunt vestibulum nulla, eget ultrices metus iaculis quis. Etiam sit amet neque ac tortor dictum tempor. Maecenas auctor posuere purus non laoreet. Suspendisse semper tempor enim, sit amet tempor diam. Phasellus pulvinar nisi eget felis pulvinar dictum.
        <button> More </button>
        </div>
    </main>
      
  )
}

export default About;
