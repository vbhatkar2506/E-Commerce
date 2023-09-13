
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import './ImageSlider.css';

const ImageSlider1 = ({ images }) => {
  return (
    <div className="slider-container">
      <Carousel showArrows={true}>
        {images.map((imageUrl, index) => (
          <div className='slider-Image' key={index}>
            <img src={imageUrl} alt={`Slide ${index}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};





/* ImageSlider.css */



/* Add any additional styles as needed */



// App.js



const ImageSlider = () => {
  const images = [
    'https://cdn.flipshope.com/blog/wp-content/uploads/2023/05/Myntra-upcoming-sale.jpg',
    'https://cdn.flipshope.com/blog/wp-content/uploads/2023/05/Myntra-End-of-Reason-sale.jpg',
    'https://cdn.flipshope.com/blog/wp-content/uploads/2022/09/Myntra-Big-Fashion-Festival-2nd-Oct.jpg',
    'https://cdn.flipshope.com/blog/wp-content/uploads/2023/05/Myntra-Fashion-Carnival.jpg',
    'https://cdn.flipshope.com/blog/wp-content/uploads/2023/01/Myntra-New-Year-Sale-2023.jpg',
    'https://cdn.flipshope.com/blog/wp-content/uploads/2022/12/Myntra-Year-End-Bash.jpg',
    // Add more image URLs as needed
  ];

  return (
    <div className="App">
      <h1>Image Slider Example</h1>
      <ImageSlider1 images={images} />
    </div>
  );
};

export default ImageSlider;
