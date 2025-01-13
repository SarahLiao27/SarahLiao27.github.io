import React from "react";
import { useNavigate } from 'react-router-dom';
import "../styles/About.css";

const About = () => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/projects'); 
    };

    return (
        <div className="About">
            {/* <h1>about page</h1>  */}

            <div className="image-and-text-container">
                <div className="image-container">
                    <img src="/images/Sarah.jpeg"/>
                </div>
                <div className="text-container">
                    <h1>Hi! I'm Sarah, a current sophomore at Brown University studying computer science. I'm interested in software engineering and UI/UX. I have experience using Java, Python, TypeScript, React and CSS.</h1>
                    
                    <h1>Outside of school, I'm a part of three performance groups: Moli East Asian Dance Company, Brown Lion Dance, and AVGE (Anime & Video Game Ensemble)!</h1>

                    <div className="icon-container">
                        <a href="mailto:sarah_liao@brown.edu" target="_blank">
                            <div className="gmail-container">
                                <img src="/images/gmail.jpg"/>
                            </div>
                        </a>

                        <a href="https://www.linkedin.com/in/sarah-liao-472770334/" target="_blank">
                            <div className="linkedin-container">
                                <img src="/images/linkedin.jpg"/>
                            </div>
                        </a>
                     
                    </div>

                    
                    <button 
                        onClick={handleButtonClick}>Check out my projects!
                    </button>


                </div>
            </div>
        </div> 
    );
};

export default About;