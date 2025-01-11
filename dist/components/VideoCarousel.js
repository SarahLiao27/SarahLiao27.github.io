import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
import { Carousel } from "react-bootstrap";
import ReactPlayer from 'react-player';
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
    ];
    const handleCarouselChange = (newIndex) => {
        setActiveIndex(newIndex);
    };
    const handleVideoEnded = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % videoProperties.length);
    };
    return (_jsx("div", { children: _jsx(Carousel, Object.assign({ activeIndex: activeIndex, onSelect: handleCarouselChange, interval: null }, { children: videoProperties.map((videoObj, idx) => {
                return (_jsx(Carousel.Item, { children: _jsx(ReactPlayer, { url: videoObj.src, pip: true, controls: true, muted: true, playing: activeIndex === idx, onEnded: handleVideoEnded }, activeIndex) }, videoObj.id));
            }) })) }));
};
export default VideoCarousel;
