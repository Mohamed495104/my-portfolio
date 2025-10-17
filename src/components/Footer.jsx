import React from "react";
import { HashLink } from "react-router-hash-link";


function Footer() {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const quickLinks = [
        { name: "About", href: "/#about" },
        { name: "Timeline", href: "/#timeline" },
        { name: "Projects", href: "/#projects" },
        { name: "Skills", href: "/#skills" },
        { name: "Contact", href: "/#contact" }
    ];

    return (
        <footer className="footer-section">
            <div className="container">
                <div className="footer-main py-2">
                    <div className="row g-4">
                        {/* Brand Section */}
                        <div className="col-lg-4 col-md-6">
                            <div className="footer-brand mb-4">
                                <h3 className="footer-logo fw-bold text-white mb-3">Mohamed Ijas</h3>
                                <div className="footer-contact">
                                    <a
                                        href="mailto:your.email@example.com"
                                        className="text-light opacity-75 text-decoration-none footer-email"
                                    >
                                        Email: mdijas555@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="col-lg-4 col-md-6">
                            <div className="footer-links">
                                <h4 className="footer-links-title fw-bold text-white mb-3">Quick Links</h4>
                                <ul className="footer-links-list list-unstyled">
                                    {quickLinks.map((link, index) => (
                                        <li key={index} className="mb-2">
                                            <HashLink smooth to={link.href} className="footer-link text-light opacity-75">
                                                <i className="bi bi-arrow-right me-2 footer-link-icon"></i>
                                                {link.name}
                                            </HashLink>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Back to Top */}
                        <div className="col-lg-4 col-md-6 text-lg-end">
                            <button
                                onClick={scrollToTop}
                                className="footer-scroll-top btn btn-outline-light btn-sm"
                                aria-label="Back to top"
                            >
                                <i className="bi bi-arrow-up me-2"></i>
                                Back to Top
                            </button>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom py-1">
                    <div className="footer-bottom-divider mb-4"></div>
                    <div className="row align-items-center">
                        <div className="col-md-6 text-center text-md-start">
                            <p className="footer-copyright text-light opacity-75 mb-0">
                                &copy; {currentYear} Mohamed Ijas. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bg-effect"></div>
        </footer>
    );
}

export default Footer;
