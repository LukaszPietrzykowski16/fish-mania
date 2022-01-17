import React, { useState}  from 'react';
import './style.css';
import image1 from './fishstore.jpg';
import image2 from './texture.jpg';

const Gallery = () => {
    const imageList = [
        {id: 0,
        imageUrl: image1}, 
        {id: 1,
            imageUrl: image2},
        {id: 2,
            imageUrl: image1}
    ]
    
    const [lightbox, setLightbox] = useState(false);
    const [tempingImgSrc, setTempImgSrc] = useState('')



    const showGallery = (imageUrl, id) => {
        setTempImgSrc(imageUrl)
        setLightbox(true)
        console.log(imageUrl)
        console.log(id)
        
    }

    const hideGallery = (lightbox) => {
        setLightbox(false)
    }
    
  
   
    
    return (
        <>
            <div className={lightbox ? "gallery-open": "gallery-close"}  >
                <div className='exit' onClick={() => hideGallery(lightbox)}> x </div>
                <div className='left-arrow' onClick={() =>  hideGallery(lightbox)}> LEWO </div>
                <div className='right-arrow' onClick={() => hideGallery(lightbox)}> PRAWO </div>
                <img src={tempingImgSrc}/>
            </div>
            <div className='gallery'>
            {
            imageList.map((singleImage) => {
                return ( 
                    <div className='pic' onClick={() => showGallery(singleImage.imageUrl, singleImage.id)}>
                    <img src={singleImage.imageUrl}/>
                    </div>
                )
            })
            }
            </div>
            </>
        )
    
}


export default Gallery; 