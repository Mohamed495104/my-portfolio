import React from "react";
import { Link } from "react-scroll";

function Intro() {
    return (
        <section
            id="intro"
            className="hero-section d-flex align-items-center text-center text-white"
        >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10 col-xl-9">
                        {/* Hero Content Wrapper */}
                        <div className="hero-content">

                            {/* Greeting Badge */}
                            <div className="hero-greeting-badge mb-4">
                                <span className="greeting-icon">👋</span>
                                <span className="greeting-text">Hello, I'm</span>
                            </div>

                            {/* Name */}
                            <h1 className="hero-name mb-3">
                                Mohamed Ijas
                            </h1>

                            {/* Role */}
                            <h2 className="hero-role mb-5">
                                <span className="role-text">Full-Stack Developer</span>
                                <div className="role-underline"></div>
                            </h2>

                            {/* Description */}
                            <div className="hero-description mb-4">
                                <p className="description-text">
                                    Full-Stack Developer specializing in the <span className="text-info fw-semibold">MERN stack</span> — building <span className="text-info fw-semibold">scalable</span>,
                                    <span className="text-success fw-semibold"> user-focused</span> Web & Mobile applications. Currently advancing cloud & modern development skills at <span className="fw-semibold">Conestoga College</span>,
                                    while creating projects that combine performance, clean code, and real-world impact.
                                </p>
                            </div>

                            {/* Quick Stats */}
                            <div className="hero-stats mb-5">
                                <div className="row g-3 justify-content-center">
                                    <div className="col-auto">
                                        <div className="hero-stat-item">
                                            <div className="stat-value">8+</div>
                                            <div className="stat-label">Projects</div>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="hero-stat-divider"></div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="hero-stat-item">
                                            <div className="stat-value">Full-Stack</div>
                                            <div className="stat-label">MERN Developer</div>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="hero-stat-divider"></div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="hero-stat-item">
                                            <div className="stat-value">Open</div>
                                            <div className="stat-label">To Opportunities</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* CTA Buttons */}
                            <div className="hero-actions">
                                <Link
                                    to="projects"
                                    smooth={true}
                                    duration={500}
                                    offset={-80}
                                    className="btn hero-btn-primary"
                                >
                                    <span>View My Projects</span>
                                    <i className="bi bi-arrow-right"></i>
                                </Link>
                                <a
                                    href="/MohamedResume.pdf"
                                    download
                                    className="btn hero-btn-secondary"
                                >
                                    <span>Download Resume</span>
                                    <i className="bi bi-download"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background Elements */}
            <div className="hero-bg-elements">
                <div className="bg-circle bg-circle-1"></div>
                <div className="bg-circle bg-circle-2"></div>
                <div className="bg-circle bg-circle-3"></div>
            </div>
        </section>
    );
}

export default Intro;