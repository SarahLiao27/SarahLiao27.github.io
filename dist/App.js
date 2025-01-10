import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import "./styles/App.css";
const App = () => {
    return (React.createElement("div", null,
        React.createElement(Router, null,
            React.createElement("div", { className: "App" },
                React.createElement("nav", { className: "navbar navbar-expand-lg navbar-custom", "aria-label": "Main Navigation" },
                    React.createElement("div", { className: "container-fluid navbar-container", "aria-label": "Navigation Container" },
                        React.createElement("a", { href: "/", className: "navbar-brand", "aria-label": "Sarah Liao's Website Home Page Link" }, "\u2727 Sarah Liao \u2727"),
                        React.createElement("div", { className: "page-links", "aria-label": "Page Links" },
                            React.createElement("a", { href: "/about", className: "about", "aria-label": "About Page Link" }, "About"),
                            React.createElement("a", { href: "/projects", className: "projects", "aria-label": "Projects Page Link" }, "Projects"),
                            React.createElement("a", { href: "/resume", className: "resume", "aria-label": "Resume Page Link" }, "Resume")))),
                React.createElement(Routes, null,
                    React.createElement(Route, { path: "/", element: React.createElement(HomePage, { "aria-label": "Home Page" }) }),
                    React.createElement(Route, { path: "/about", element: React.createElement(About, { "aria-label": "About Page" }) }),
                    React.createElement(Route, { path: "/projects", element: React.createElement(Projects, { "aria-label": "Projects Page" }) }),
                    React.createElement(Route, { path: "/resume", element: React.createElement(Resume, { "aria-label": "Resume Page" }) }))))));
};
export default App;
