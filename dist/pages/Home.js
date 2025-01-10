import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from 'react-router-dom';
import VideoCarousel from "../components/VideoCarousel";
import "../styles/Home.css";
const HomePage = () => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/about');
    };
    return (_jsxs("div", Object.assign({ className: "Home" }, { children: [_jsx("h1", { children: "Welcome!" }), _jsx("button", Object.assign({ onClick: handleButtonClick }, { children: "Learn about me!" })), _jsx("div", Object.assign({ className: "carousel-container" }, { children: _jsx(VideoCarousel, {}) })), _jsx("div", Object.assign({ className: "video-text-container" }, { children: _jsx("h4", { children: "Each video has sound. Please adjust your volume before unmuting." }) }))] })));
};
export default HomePage;
