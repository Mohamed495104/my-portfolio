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
                    <div className="col-lg-10 col-xl-8">
                        {/* Hero Content Wrapper */}
                        <div className="hero-content">

                            {/* Name */}
                            <h1 className="hero-name mb-4">
                                Mohamed Ijas
                            </h1>

                            {/* Role */}
                            <h2 className="hero-role mb-5">
                                <span className="role-text">Full-Stack Engineer | Software Developer</span>
                                <div className="role-underline"></div>
                            </h2>

                            {/* Description */}
                            <div className="hero-description mb-5">
                                <p className="description-text">
                                    A <span className="text-info fw-semibold">Full-stack Engineer</span> - With experience working on real-world projects, building software with clarity and care using modern <span className="text-success fw-semibold">Full-stack and AI tools</span> thoughtfully to create software with real, long term value.
                                </p>
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
                                    href="/Mohamed%20Ijas%20-%20Software%20Developer.pdf"
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
        </section>
    );
}

export default Intro;