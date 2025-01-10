import React from "react";
import { useNavigate } from 'react-router-dom';
import VideoCarousel from "../components/VideoCarousel";
import "../styles/Home.css";
const HomePage = () => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/about');
    };
    return (React.createElement("div", { className: "Home" },
        React.createElement("h1", null, "Welcome!"),
        React.createElement("button", { onClick: handleButtonClick }, "Learn about me!"),
        React.createElement("div", { className: "carousel-container" },
            React.createElement(VideoCarousel, null)),
        React.createElement("div", { className: "video-text-container" },
            React.createElement("h4", null, "Each video has sound. Please adjust your volume before unmuting."))));
};
export default HomePage;
