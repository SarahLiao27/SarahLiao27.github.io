import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "../styles/Carousel.css";

interface Image {
    id: number;
    title: string;
    src: string;
}

interface ImageCarouselProps {
    images: Image[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {  
  const [activeIndex, setActiveIndex] = useState(0);

  const handleCarouselChange = (newIndex: number) => {
    setActiveIndex(newIndex);
  };

  return (
    <div className="image-carousel">
      <Carousel 
        activeIndex={activeIndex} 
        onSelect={handleCarouselChange}
      >
        {images.map((imageObj, idx) => {
          return (
            <Carousel.Item key={imageObj.id}>
                <img
                    src={imageObj.src} alt={imageObj.title}
                />
            </Carousel.Item>
          )
        })}
      </Carousel>
    </div>


  );
};
export default ImageCarousel;
