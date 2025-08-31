import React, { useState, useEffect } from "react";
import { Link, scroller } from "react-scroll";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";

function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false); // 👈 track mobile menu state
    const location = useLocation();
    const navigate = useNavigate();

    const isProjectDetailsPage = location.pathname.startsWith("/projects/");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Back to projects handler
    const handleBackToProjects = () => {
        navigate("/", { state: { scrollTo: "projects" } });
        setMenuOpen(false); // close menu if open
    };

    // Close menu helper
    const handleNavClick = (scrollTarget) => {
        if (scrollTarget) {
            scroller.scrollTo(scrollTarget, {
                smooth: true,
                duration: 200,
                offset: -80,
            });
        }
        setMenuOpen(false);
    };

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
                        onClick={() => setMenuOpen(false)}
                    >
                        <span className="brand-text">Mohamed Ijas</span>
                        <div className="brand-underline"></div>
                    </RouterLink>
                ) : (
                    <Link
                        to="intro"
                        smooth={true}
                        duration={200}
                        spy={true}
                        offset={-80}
                        activeClass="active"
                        className="navbar-brand"
                        onClick={() => handleNavClick("intro")}
                    >
                        <span className="brand-text">Mohamed Ijas</span>
                        <div className="brand-underline"></div>
                    </Link>
                )}

                {/* Mobile toggle */}
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-controls="navbarNav"
                    aria-expanded={menuOpen}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-line"></span>
                    <span className="navbar-toggler-line"></span>
                    <span className="navbar-toggler-line"></span>
                </button>

                {/* Navigation */}
                <div
                    className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}
                    id="navbarNav"
                >
                    <ul className="navbar-nav ms-auto align-items-center">
                        {isProjectDetailsPage ? (
                            <li className="nav-item">
                                <button
                                    onClick={handleBackToProjects}
                                    className="nav-link back-to-projects btn btn-link"
                                    style={{ cursor: "pointer" }}
                                >
                                    <i className="bi bi-arrow-left me-2"></i>
                                    Back to Projects
                                </button>
                            </li>
                        ) : (
                            ["intro", "about", "timeline", "projects", "skills", "contact"].map(
                                (section) => (
                                    <li className="nav-item" key={section}>
                                        <Link
                                            to={section}
                                            smooth={true}
                                            duration={200}
                                            spy={true}
                                            offset={-80}
                                            activeClass="nav-active"
                                            className="nav-link"
                                            onClick={() => handleNavClick(section)} // 👈 closes after click
                                        >
                                            <span className="nav-text">
                                                {section.charAt(0).toUpperCase() + section.slice(1)}
                                            </span>
                                            <div className="nav-indicator"></div>
                                        </Link>
                                    </li>
                                )
                            )
                        )}
                        <li className="nav-item">
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                className="btn nav-resume-btn"
                                onClick={() => setMenuOpen(false)}
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
