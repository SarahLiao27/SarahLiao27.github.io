import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from 'react-router-dom';
import "../styles/About.css";
const About = () => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/projects');
    };
    return (_jsx("div", Object.assign({ className: "About" }, { children: _jsxs("div", Object.assign({ className: "image-and-text-container" }, { children: [_jsx("div", Object.assign({ className: "image-container" }, { children: _jsx("img", { src: "src/components/images/Sarah.jpeg" }) })), _jsxs("div", Object.assign({ className: "text-container" }, { children: [_jsx("h4", { children: "Hi! I'm Sarah, a current sophomore at Brown University studying computer science. I'm interested in software engineering and UI/UX. I have experience using Java, Python, TypeScript, React and CSS." }), _jsx("h4", { children: "Outside of school, I'm a part of three performance groups: Moli East Asian Dance Company, Brown Lion Dance, and AVGE (Anime & Video Game Ensemble)!" }), _jsxs("div", Object.assign({ className: "icon-container" }, { children: [_jsx("a", Object.assign({ href: "mailto:sarah_liao@brown.edu", target: "_blank" }, { children: _jsx("div", Object.assign({ className: "gmail-container" }, { children: _jsx("img", { src: "src/components/images/gmail.jpg" }) })) })), _jsx("a", Object.assign({ href: "https://www.linkedin.com/in/sarah-liao-472770334/", target: "_blank" }, { children: _jsx("div", Object.assign({ className: "linkedin-container" }, { children: _jsx("img", { src: "src/components/images/linkedin.jpg" }) })) }))] })), _jsx("button", Object.assign({ onClick: handleButtonClick }, { children: "Check out my projects!" }))] }))] })) })));
};
export default About;
