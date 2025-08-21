import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";

function Header() {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Check if we're on a project details page
    const isProjectDetailsPage = location.pathname.startsWith('/projects/');

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            setScrolled(isScrolled);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`navbar navbar-expand-lg fixed-top navbar-dark ${
                scrolled ? "navbar-scrolled" : "navbar-transparent"
            }`}
        >
            <div className="container">
                {/* Brand */}
                {isProjectDetailsPage ? (
                    <RouterLink
                        to="/"
                        className="navbar-brand"
                    >
                        <span className="brand-text">Mohamed Ijas</span>
                        <div className="brand-underline"></div>
                    </RouterLink>
                ) : (
                    <Link
                        to="intro"
                        smooth={true}
                        duration={500}
                        spy={true}
                        offset={-80}
                        activeClass="active"
                        className="navbar-brand"
                    >
                        <span className="brand-text">Mohamed Ijas</span>
                        <div className="brand-underline"></div>
                    </Link>
                )}

                {/* Mobile toggle */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-line"></span>
                    <span className="navbar-toggler-line"></span>
                    <span className="navbar-toggler-line"></span>
                </button>

                {/* Navigation */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto align-items-center">
                        {isProjectDetailsPage ? (
                            // Show Back to Projects when on project details page
                            <li className="nav-item">
                                <RouterLink
                                    to="/#projects"
                                    className="nav-link back-to-projects"
                                >
                                    <i className="bi bi-arrow-left me-2"></i>
                                    Back to Projects
                                </RouterLink>
                            </li>
                        ) : (
                            // Show normal navigation when on home page
                            ["intro", "about", "timeline", "projects", "skills", "contact"].map((section) => (
                                <li className="nav-item" key={section}>
                                    <Link
                                        to={section}
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        offset={-80}
                                        activeClass="nav-active"
                                        className="nav-link"
                                    >
                                        <span className="nav-text">
                                            {section.charAt(0).toUpperCase() + section.slice(1)}
                                        </span>
                                        <div className="nav-indicator"></div>
                                    </Link>
                                </li>
                            ))
                        )}
                        <li className="nav-item">
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                className="btn nav-resume-btn"
                            >
                                <span>Resume</span>
                                <i className="bi bi-eye ms-2"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;