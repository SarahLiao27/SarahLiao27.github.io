import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import "./styles/App.css";
const App = () => {
    return (_jsx("div", { children: _jsx(Router, { children: _jsxs("div", Object.assign({ className: "App" }, { children: [_jsx("nav", Object.assign({ className: "navbar navbar-expand-lg navbar-custom", "aria-label": "Main Navigation" }, { children: _jsxs("div", Object.assign({ className: "container-fluid navbar-container", "aria-label": "Navigation Container" }, { children: [_jsx("a", Object.assign({ href: "/", className: "navbar-brand", "aria-label": "Sarah Liao's Website Home Page Link" }, { children: "\u2727 Sarah Liao \u2727" })), _jsxs("div", Object.assign({ className: "page-links", "aria-label": "Page Links" }, { children: [_jsx("a", Object.assign({ href: "/about", className: "about", "aria-label": "About Page Link" }, { children: "About" })), _jsx("a", Object.assign({ href: "/projects", className: "projects", "aria-label": "Projects Page Link" }, { children: "Projects" })), _jsx("a", Object.assign({ href: "/resume", className: "resume", "aria-label": "Resume Page Link" }, { children: "Resume" }))] }))] })) })), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(HomePage, { "aria-label": "Home Page" }) }), _jsx(Route, { path: "/about", element: _jsx(About, { "aria-label": "About Page" }) }), _jsx(Route, { path: "/projects", element: _jsx(Projects, { "aria-label": "Projects Page" }) }), _jsx(Route, { path: "/resume", element: _jsx(Resume, { "aria-label": "Resume Page" }) })] })] })) }) }));
};
export default App;
