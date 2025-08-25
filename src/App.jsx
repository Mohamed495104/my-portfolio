import React, { useEffect } from "react";
import { inject } from "@vercel/analytics";
import { SpeedInsights } from '@vercel/speed-insights/react';
import "bootstrap-icons/font/bootstrap-icons.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
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

inject();

// Wrapper to handle scrollTo state when navigating back
function ScrollHandler({ children }) {
    const location = useLocation();

    useEffect(() => {
        if (location.state?.scrollTo) {
            scroller.scrollTo(location.state.scrollTo, {
                smooth: true,
                duration: 500,
                offset: -80,
            });
        }
    }, [location]);

    return children;
}

function App() {
    return (
        <Router>
            <Header />
            <ScrollToTop />
            <ScrollHandler>
                <Routes>
                    {/* Homepage */}
                    <Route
                        path="/"
                        element={
                            <>
                                <Hero />
                                <About />
                                <Timeline />
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
            </ScrollHandler>
            <SpeedInsights />
        </Router>
    );
}

export default App;
