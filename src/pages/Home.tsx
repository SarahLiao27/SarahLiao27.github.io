import React from "react";
import { useNavigate } from 'react-router-dom';
import VideoCarousel from "../components/VideoCarousel";
import "../styles/Home.css";
import Vid1 from "/videos/vid1.mp4";
import Vid2 from "/videos/vid2.mp4";
import Vid3 from "/videos/vid3.mp4";

const HomePage = () => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/about'); 
    };

    const videos = [
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

    return (
        <div className="Home">
  
            <h1>
                Welcome!
            </h1>

            <button 
                onClick={handleButtonClick}>Learn about me!
            </button>
         
            <div className="carousel-container">
                <VideoCarousel videos={videos}/>
            </div>
            <div className="video-text-container"> 
                <h4>
                    Each video has sound. Please adjust your volume before unmuting. 
                </h4>
            </div>
            
        </div> 
    );
};

export default HomePage;