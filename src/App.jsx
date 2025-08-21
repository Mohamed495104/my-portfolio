import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import projectsData from "./data/projects.js";
import About from "./components/About.jsx";
import Timeline from "./components/Timeline.jsx";
import Contact from "./components/Contact.jsx";
import Skills from "./components/Skills";
import Footer from "./components/Footer.jsx";
import ProjectDetails from "./components/ProjectDetails.jsx";
function App() {
    return (
        <Router>
            <Header />
            <ScrollToTop></ScrollToTop>
            <Routes>
                {/* Homepage */}
                <Route
                    path="/"
                    element={
                        <>
                            <Hero />
                            <About />
                            <Timeline/>
                            <Projects projects={projectsData} />
                            <Skills />
                            <Contact />
                            <Footer />
                        </>
                    }
                />

                {/* Project Details Page */}
                <Route path="/projects/:id" element={<ProjectDetails />} />
            </Routes>
        </Router>
    );
}

export default App;
