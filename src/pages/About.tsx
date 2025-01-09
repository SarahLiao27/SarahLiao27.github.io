import React from "react";
import "../styles/About.css";

const About = () => {
    return (
        <div className="About">
            {/* <h1>about page</h1>  */}


            <div className="image-and-text-container">
                <div className="image-container">
                    <img src="src/components/images/Sarah.jpeg"/>
                </div>
                <div className="text-container">
                    <h4>Hi! I'm Sarah, a current sophomore at Brown University studying computer science. I'm interested in software engineering and UI/UX. I have experience using Java, Python, TypeScript, React and CSS.</h4>
                    
                    <h4>Outside of school, I'm a part of three performance groups: Moli East Asian Dance Company, Brown Lion Dance, and AVGE (Anime & Video Game Ensemble)!</h4>
                </div>
            </div>
        </div> 
    );
};

export default About;