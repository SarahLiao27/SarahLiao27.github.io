import React from "react";
import { useNavigate } from 'react-router-dom';
import "../styles/About.css";
const About = () => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/projects');
    };
    return (React.createElement("div", { className: "About" },
        React.createElement("div", { className: "image-and-text-container" },
            React.createElement("div", { className: "image-container" },
                React.createElement("img", { src: "src/components/images/Sarah.jpeg" })),
            React.createElement("div", { className: "text-container" },
                React.createElement("h4", null, "Hi! I'm Sarah, a current sophomore at Brown University studying computer science. I'm interested in software engineering and UI/UX. I have experience using Java, Python, TypeScript, React and CSS."),
                React.createElement("h4", null, "Outside of school, I'm a part of three performance groups: Moli East Asian Dance Company, Brown Lion Dance, and AVGE (Anime & Video Game Ensemble)!"),
                React.createElement("div", { className: "icon-container" },
                    React.createElement("a", { href: "mailto:sarah_liao@brown.edu", target: "_blank" },
                        React.createElement("div", { className: "gmail-container" },
                            React.createElement("img", { src: "src/components/images/gmail.jpg" }))),
                    React.createElement("a", { href: "https://www.linkedin.com/in/sarah-liao-472770334/", target: "_blank" },
                        React.createElement("div", { className: "linkedin-container" },
                            React.createElement("img", { src: "src/components/images/linkedin.jpg" })))),
                React.createElement("button", { onClick: handleButtonClick }, "Check out my projects!")))));
};
export default About;
