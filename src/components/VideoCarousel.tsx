import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import ReactPlayer from 'react-player'
import "../styles/Carousel.css";

interface Video {
  id: number;
  title: string;
  src: string;
}

interface VideoCarouselProps {
  videos: Video[];
}

const VideoCarousel: React.FC<VideoCarouselProps> = ({ videos }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleCarouselChange = (newIndex: number) => {
    setActiveIndex(newIndex);
  };

  const handleVideoEnded = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  return (
    <div className="video-carousel">
      <Carousel 
        activeIndex={activeIndex} 
        onSelect={handleCarouselChange}
        interval={null} //prevent it from switching to new vid before current one finishes
      >
        {videos.map((videoObj, idx) => {
          return (
            <Carousel.Item key={videoObj.id}>
              <ReactPlayer
                key={activeIndex}
                url={videoObj.src}
                alt={videoObj.title}
                pip={true}
                controls={true}
                muted={true}
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
