import React from "react";
import VideoCarousel from "../components/VideoCarousel";
import "../styles/HomePage.css";

const HomePage = () => {
    return (
        <div className="HomePage">
            <h1>
                Welcome!
            </h1>
            <div className="image-and-text-container">
                <div className="image-container">
                    <img src="src/components/images/Sarah.jpeg"/>
                </div>
                <div className="text-container">
                    <h4>Hi! I'm Sarah, a current sophomore at Brown University studying computer science. I'm interested in software engineering and UI/UX. My hobbies include drawing, writing, and dancing (see the videos below)!</h4>
                </div>
            </div>
            
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