import React, { useState}  from 'react';
import './style.css';
import image1 from './fish1.jpg';
import image2 from './fish2.jpg';
import image3 from './fish3.jpg';
import image4 from './fish4.jpg';
import image5 from './fish5.jpg';
import image6 from './fish6.jpg';

const Galery = () => {
    const imageList = [
        {id: 0,
        imageUrl: image1}, 
        {id: 1,
            imageUrl: image2},
        {id: 2,
            imageUrl: image3},
        {id: 3,
            imageUrl: image4},
        {id: 4,
            imageUrl: image5},
        {id: 5,
            imageUrl: image6}
            
    ]

    const [lightbox, setLightbox] = useState(false);
    
    const showGallery = (index) => {
        setValue(index)
        console.log(index)
        setLightbox(true)
    }

    const image = imageList.map((singleImage) => {
        return singleImage.imageUrl
      })
    
    let [index, setValue] = useState(0);
    
    
    const hideGallery = (lightbox) => {
        setLightbox(false)
    }
    
    const leftSlide = (index) => {
        if (index === 0) {
            index = image.length;
          }
          setValue(index - 1)  
    }

    const rightSlide = (index) => {
        if (index === 0) {
            index = image.length;
          }
          setValue(index - 1)  
    }


    return (
        <>
         <div className={lightbox ? "gallery-open": "gallery-close"} >
            <img src={image[index]}/>
            <div className='exit' onClick={() => hideGallery(lightbox)}> x </div>
            <div className='left-arrow' onClick={() =>  leftSlide(index)}> LEWO </div>
            <div className='right-arrow' onClick={() => rightSlide(index)}> PRAWO </div>
        </div>
        <div className='gallery'>
        {imageList.map((singlePhoto) => {
            return (
                <div className='pic' onClick={() => showGallery(singlePhoto.id)}>
                    <img src={singlePhoto.imageUrl}/>
                </div>
            )
        })}
        </div>
      
        </>
    )
}


export default Galery; 