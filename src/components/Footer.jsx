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

    const socialLinks = [
        { 
            name: "GitHub", 
            icon: "bi-github", 
            url: "https://github.com/Mohamed495104",
            color: "#333"
        },
        { 
            name: "LinkedIn", 
            icon: "bi-linkedin", 
            url: "https://www.linkedin.com/in/mohamedijas03/",
            color: "#0077b5"
        },
        { 
            name: "Email", 
            icon: "bi-envelope-fill", 
            url: "mailto:mdijas555@gmail.com",
            color: "#ea4335"
        },
    ];

    return (
        <footer className="footer-section">
            <div className="container">
                {/* Main Footer Content */}
                <div className="footer-main py-5">
                    <div className="row g-4">
                        {/* Brand & Description Section */}
                        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                            <div className="footer-brand">
                                <h3 className="footer-logo fw-bold mb-3">
                                    Mohamed Ijas
                                </h3>
                                <p className="footer-description text-light mb-4">
                                    Full Stack Developer passionate about creating elegant solutions 
                                    to complex problems. Let's build something amazing together.
                                </p>
                                <div className="footer-social-links d-flex gap-3">
                                    {socialLinks.map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.url}
                                            target={social.name !== "Email" ? "_blank" : undefined}
                                            rel={social.name !== "Email" ? "noopener noreferrer" : undefined}
                                            className="footer-social-icon"
                                            aria-label={social.name}
                                            title={social.name}
                                        >
                                            <i className={`bi ${social.icon}`}></i>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                            <div className="footer-links">
                                <h4 className="footer-section-title fw-bold text-white mb-3">
                                    Quick Links
                                </h4>
                                <ul className="footer-links-list list-unstyled mb-0">
                                    {quickLinks.map((link, index) => (
                                        <li key={index} className="mb-2">
                                            <HashLink 
                                                smooth 
                                                to={link.href} 
                                                className="footer-link"
                                            >
                                                <i className="bi bi-chevron-right footer-link-icon"></i>
                                                {link.name}
                                            </HashLink>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                            <div className="footer-contact">
                                <h4 className="footer-section-title fw-bold text-white mb-3">
                                    Get in Touch
                                </h4>
                                <div className="footer-contact-info">
                                    <div className="footer-contact-item mb-3">
                                        <i className="bi bi-envelope-fill me-2"></i>
                                        <a 
                                            href="mailto:mdijas555@gmail.com" 
                                            className="footer-contact-link"
                                        >
                                            mdijas555@gmail.com
                                        </a>
                                    </div>
                                    <div className="footer-contact-item mb-3">
                                        <i className="bi bi-geo-alt-fill me-2"></i>
                                        <span className="footer-contact-text">
                                            Available for remote work
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Newsletter/CTA */}
                        <div className="col-lg-2 col-md-6">
                            <div className="footer-cta text-lg-end">
                                <button
                                    onClick={scrollToTop}
                                    className="footer-back-to-top"
                                    aria-label="Back to top"
                                >
                                    <i className="bi bi-arrow-up"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom - Copyright */}
                <div className="footer-bottom py-4">
                    <div className="footer-divider mb-4"></div>
                    <div className="row align-items-center">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            <p className="footer-copyright mb-0">
                                <i className="bi bi-c-circle me-1"></i>
                                {currentYear} <span className="fw-semibold">Mohamed Ijas</span>. All rights reserved.
                            </p>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <p className="footer-credits mb-0">
                                Crafted with <i className="bi bi-heart-fill text-danger"></i> and React
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Background Decorative Elements */}
            <div className="footer-bg-gradient"></div>
        </footer>
    );
}

export default Footer;
