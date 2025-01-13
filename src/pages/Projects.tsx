import ImageCarousel from "../components/ImageCarousel";
import Img1 from "/images/signinpage.png";
import Img2 from "/images/homepage.png";
import Img3 from "/images/createlistingpopup.png";
import Img4 from "/images/listingpage.png";
import Img5 from "/images/ownlistingpage.png";
import Img6 from "/images/userprofilepage.png";
import Img7 from "/images/home.png";
import Img8 from "/images/about.png";
import Img10 from "/images/resume.png";
import "../styles/Projects.css";

const Projects = () => {
    const bearlyUsed = [
        {
            id: 1,
            title: "sign in page",
            src: Img1
        },
        {
            id: 2,
            title: "home page",
            src: Img2
        },
        { 
            id: 3,
            title: "create listing popup",
            src: Img3
        },
        {
            id: 4,
            title: "listing page",
            src: Img4
        },
        {
            id: 5,
            title: "own listing page",
            src: Img5
        },
        {
            id: 6,
            title: "user profile page",
            src: Img6
        },
    ]

    const personalWebsite = [
        {
            id: 1,
            title: "home page",
            src: Img7
        },
        {
            id: 2,
            title: "about page",
            src: Img8
        },
        { 
            id: 3,
            title: "resume page",
            src: Img10
        },
    ]

    return (
        <div className="Projects">
            
            <div className="bearly-used"> 
                <div className="carousel-container">
                    <ImageCarousel images={bearlyUsed}/>
                </div>

                <div className="text-container"> 
                    <a href="https://github.com/SarahLiao27/Bearly-Used.git" target="_blank">
                        <button>
                            Bearly Used
                        </button>
                    </a>

                    <h3>A website for Brown and RISD students to buy and sell barely used items. It was developed from scratch in a team of 4 for a final project. </h3>
                    <h4>Frontend: React.js, TypeScript, CSS, Bootstrap, Clerk Authorization, Playwright testing</h4>
                    <h4>Backend: Java, Supabase w/ PostgreSQL, API endpoint testing</h4>
                </div> 
            </div>

            <div className="personal-website"> 
                <div className="carousel-container">
                    <ImageCarousel images={personalWebsite}/>
                </div>

                <div className="text-container"> 
                    <a href="https://github.com/SarahLiao27/personal-website.git" target="_blank">
                        <button>
                            Personal Website
                        </button>
                    </a>

                    <h3>A cutely designed personal website to showcase myself!</h3>
                    <h4>Frontend: React.js, TypeScript, CSS</h4>
                </div>
            </div>
        </div> 
    );
};

export default Projects;