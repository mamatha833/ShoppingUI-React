import React from 'react'

const WomenCollection = (props) => {

    const {title,image1,image2,image3,image4,image5,image6} = props.ladiesFashion;
    return (
      <div className='collection-section'>
        <h2>{title}</h2>
        <div className="banner-box">
        <img src="assets/LadiesBanner.gif" alt="banner" />
        </div>
        
        <div className="men-images">
          <img src={image1} alt={title} />
          <img src={image2} alt={title} />
          <img src={image3} alt={title} />
          <img src={image4} alt={title} />
          <img src={image5} alt={title} />
          <img src={image6} alt={title} />
        </div>
      </div>
    )
}

export default WomenCollection
