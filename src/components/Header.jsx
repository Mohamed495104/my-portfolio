import React, { useState, useEffect } from "react";
import { Link, scroller } from "react-scroll";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";

function Header() {
    const [scrolled, setScrolled] = useState(false);
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

    const handleBackToProjects = () => {
        navigate("/", { state: { scrollTo: "projects" } });
    };

    const handleNavClick = (scrollTarget) => {
        if (scrollTarget) {
            scroller.scrollTo(scrollTarget, {
                smooth: true,
                duration: 200,
                offset: -80,
            });
        }
    };

    // Mobile navigation sections with icons
    const mobileNavSections = [
        { id: "intro", label: "Home", icon: "bi-house-door-fill" },
        { id: "about", label: "About", icon: "bi-person-fill" },
        { id: "projects", label: "Projects", icon: "bi-folder-fill" },
        { id: "skills", label: "Skills", icon: "bi-code-square" },
        { id: "contact", label: "Contact", icon: "bi-envelope-fill" },
    ];

    return (
        <>
            {/* Desktop Navbar */}
            <nav
                className={`navbar navbar-expand-lg fixed-top navbar-dark d-none d-lg-flex ${
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

                    {/* Desktop Navigation */}
                    <div className="navbar-collapse" id="navbarNav">
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
                                        <li
                                            className={`nav-item ${section === "contact" ? "dropdown-container" : ""}`}
                                            key={section}
                                        >
                                            <Link
                                                to={section}
                                                smooth={true}
                                                duration={200}
                                                spy={true}
                                                offset={-80}
                                                activeClass="nav-active"
                                                className="nav-link"
                                                onClick={() => handleNavClick(section)}
                                            >
                                                <span className="nav-text">
                                                    {section.charAt(0).toUpperCase() + section.slice(1)}
                                                </span>
                                                <div className="nav-indicator"></div>
                                            </Link>
                                            {section === "contact" && (
                                                <div className="contact-dropdown">
                                                    <a
                                                        href="https://www.linkedin.com/in/mohamedijas03/"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="dropdown-item"
                                                    >
                                                        <i className="bi bi-linkedin"></i>
                                                        <span>LinkedIn</span>
                                                    </a>
                                                    <a
                                                        href="https://github.com/Mohamed495104"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="dropdown-item"
                                                    >
                                                        <i className="bi bi-github"></i>
                                                        <span>GitHub</span>
                                                    </a>
                                                    <a
                                                        href="mailto:mdijas555@gmail.com"
                                                        className="dropdown-item"
                                                    >
                                                        <i className="bi bi-envelope"></i>
                                                        <span>Email</span>
                                                    </a>
                                                </div>
                                            )}
                                        </li>
                                    )
                                )
                            )}
                            <li className="nav-item">
                                <a
                                    href="/MohamedResume.pdf"
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

            {/* Mobile Top Navbar - Only Brand */}
            <nav
                className={`navbar fixed-top navbar-dark d-lg-none mobile-top-navbar ${
                    scrolled ? "navbar-scrolled" : "navbar-transparent"
                }`}
            >
                <div className="container">
                    {isProjectDetailsPage ? (
                        <RouterLink to="/" className="navbar-brand">
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
                            className="navbar-brand"
                            onClick={() => handleNavClick("intro")}
                        >
                            <span className="brand-text">Mohamed Ijas</span>
                            <div className="brand-underline"></div>
                        </Link>
                    )}
                </div>
            </nav>

            {/* Instagram-like Bottom Mobile Navigation */}
            {!isProjectDetailsPage && (
                <nav className="mobile-bottom-nav d-lg-none">
                    <div className="mobile-nav-container">
                        {mobileNavSections.map((section) => (
                            <Link
                                key={section.id}
                                to={section.id}
                                smooth={true}
                                duration={200}
                                spy={true}
                                offset={-80}
                                activeClass="active"
                                className="mobile-nav-item"
                                onClick={() => handleNavClick(section.id)}
                            >
                                <i className={`bi ${section.icon} mobile-nav-icon`}></i>
                                <span className="mobile-nav-label">{section.label}</span>
                            </Link>
                        ))}
                    </div>
                </nav>
            )}
        </>
    );
}

export default Header;