import React from "react";
import VideoCarousel from "../components/VideoCarousel";
import "../styles/HomePage.css";

const HomePage = () => {
    return (
        <div className="HomePage">
            <h1>
                Welcome!
            </h1>
            <h4>
                Each video has sound. Please adjust your volume before unmuting. 
            </h4>
            <div className="carousel-container">
                <VideoCarousel/>
            </div>
        </div> 
    );
};

export default HomePage;