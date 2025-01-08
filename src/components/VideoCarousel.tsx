import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import ReactPlayer from 'react-player'
import "../styles/VideoCarousel.css";
import Vid1 from "./videos/vid1.mp4";
import Vid2 from "./videos/vid2.mp4";
import Vid3 from "./videos/vid3.mp4";

const VideoCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const videoProperties = [
    {
      id: 1,
      title: "Video 1",
      src: Vid1
    },
    {
      id: 2,
      title: "Video 2",
      src: Vid2
    },
    {
      id: 3,
      title: "Video 3",
      src: Vid3
    }
  ]

  const handleCarouselChange = (newIndex: number) => {
    setActiveIndex(newIndex);
  };

  const handleVideoEnded = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % videoProperties.length);
  };


  return (
    <div>
      <Carousel 
        activeIndex={activeIndex} 
        onSelect={handleCarouselChange}
        interval={null} //prevent it from switching to new vid before current one finishes
      >
        {videoProperties.map((videoObj, idx) => {
          return (
            <Carousel.Item key={videoObj.id}>
              <ReactPlayer
                url={videoObj.src}
                pip={true}
                controls={true}
                playing={activeIndex === idx}
                onEnded={handleVideoEnded}
              />
            </Carousel.Item>
          )
        })}
      </Carousel>
    </div>


  );
};
export default VideoCarousel;
