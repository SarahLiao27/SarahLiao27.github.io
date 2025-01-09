import React from "react";
import { useNavigate } from 'react-router-dom';
import VideoCarousel from "../components/VideoCarousel";
import "../styles/Home.css";



const HomePage = () => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/about'); 
    };

    return (
        <div className="Home">
  
            <h1>
                Welcome!
            </h1>

            <button 
                onClick={handleButtonClick}>Learn about me!
            </button>
         
            <div className="carousel-container">
                <VideoCarousel/>
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