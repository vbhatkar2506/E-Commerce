import React from "react";
import "./ProductImages.css";

// const ProductImages = (props) => {
// 	console.log(props);
// 	return (
// 		<>
// 			<div className="image-left">
// 				<div className="content-image">
// 					<img className="image-detailed" src={props.imgMain} alt="" />
// 				</div>
// 				<div className="content-image">
// 					<img className="image-detailed" src={props.img2} alt="" />
// 				</div>
// 				<div className="content-image">
// 					<img className="image-detailed" src={props.img3} alt="" />
// 				</div>
// 				<div className="content-image">
// 					<img className="image-detailed" src={props.img4} alt="" />
// 				</div>
// 			</div>
// 		</>
// 	);
// };

// export default ProductImages;



// import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
// import './ImageSlider.css';

const ImageSlider2 = ({ images }) => {
  return (
    <div className="image-left">
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

const ProductImages = (props) => {
  const images = [
    props.imgMain,
	props.img2,
	props.img3,
	props.img4,
    // Add more image URLs as needed
  ];

  return (
    <div className="content-image">
      <ImageSlider2 className="image-detailed" images={images} />
    </div>
  );
};

export default ProductImages;
