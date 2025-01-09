import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import "./styles/App.css";

const App: React.FC = () => {
  return (
    <div>
    <Router>
      <div className="App">
        <nav
            className="navbar navbar-expand-lg navbar-custom"
            aria-label="Main Navigation"
        >
            <div
                className="container-fluid navbar-container"
                aria-label="Navigation Container"
            >
                <a
                    href="/"
                    className="navbar-brand"
                    aria-label="Sarah Liao's Website Home Page Link"
                >
                    ✧ Sarah Liao ✧ 
                </a>
                <div
                    className="page-links"
                    aria-label="Page Links"
                >
                    <a
                        href="/about"
                        className="about"
                        aria-label="About Page Link"
                    >
                        About
                    </a>
                    <a
                      href="/projects"
                      className="projects"
                      aria-label="Projects Page Link"
                    >
                      Projects
                    </a>
                    <a
                      href="/resume"
                      className="resume"
                      aria-label="Resume Page Link"
                    >
                      Resume
                    </a>
                </div>
            </div>
        </nav>

      <Routes>
        <Route 
            path="/" 
            element={<HomePage aria-label="Home Page" />} />
        <Route 
            path="/about" 
            element={<About aria-label="About Page" />} />
        <Route 
            path="/projects" 
            element={<Projects aria-label="Projects Page" />} />
        <Route 
            path="/resume" 
            element={<Resume aria-label="Resume Page" />} />
      </Routes>
      </div>

    </Router>
    </div>
    
  );
};

export default App;
