import React from "react";

function About() {
    return (
        <section id="about" className="about-section py-5">
            <div className="container">
                <div className="row align-items-center g-5">
                    {/* Profile Photo */}
                    <div className="col-lg-4 text-center">
                        <div className="about-image-wrapper position-relative">
                            <img
                                src="/images/profile.jpg"
                                alt="Ijas - Profile"
                                className="about-profile-img img-fluid rounded-4 shadow-lg"
                                style={{
                                    maxWidth: '320px',
                                    aspectRatio: '4/5',
                                    objectFit: 'cover'
                                }}
                            />
                            <div className="about-image-glow"></div>
                        </div>
                    </div>

                    {/* About Text */}
                    <div className="col-lg-8">
                        <div className="about-content">
                            <div className="about-title-wrapper mb-4">
                                <h2 className="about-title display-5 fw-bold mb-3 text-white">
                                    About <span className="text-primary">Me</span>
                                </h2>
                            </div>

                            <div className="about-text-wrapper">
                                <p className="about-description lh-lg mb-4" style={{
                                    fontSize: '1.125rem',
                                    color: 'rgba(255, 255, 255, 0.9)',
                                    fontWeight: '400',
                                    lineHeight: '1.7'
                                }}>
                                    Hi, I'm a <strong className="text-white">Full Stack Developer</strong> with prior experience as a Systems Engineer at Infosys, where I gained foundational experience in system troubleshooting, performance optimization,customer engagement and client-focused IT solutions.
                                </p>

                                <p className="about-description lh-lg mb-4" style={{
                                    fontSize: '1.125rem',
                                    color: 'rgba(255, 255, 255, 0.9)',
                                    fontWeight: '400',
                                    lineHeight: '1.7'
                                }}>
                                    Skilled in Agile SDLC, Scrum workflows, and cross-team collaboration, I bring combining enterprise experience with modern web development to build applications that are scalable, functional, and user-friendly.
                                </p>

                                <p className="about-description lh-lg mb-0" style={{
                                    fontSize: '1.125rem',
                                    color: 'rgba(255, 255, 255, 0.9)',
                                    fontWeight: '400',
                                    lineHeight: '1.7'
                                }}>
                                    Currently, I'm pursuing a <strong className="text-white">Postgraduate Degree in Web Development</strong> at Conestoga College, specializing in the <span className="text-info fw-semibold">MERN stack</span> (MongoDB, Express.js, React.js, Node.js) along with REST APIs, AWS, and Firebase, with a strong focus on creating user-focused, high-performing applications.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background Elements */}
            <div className="about-bg-elements">
                <div className="about-bg-circle about-bg-circle-1"></div>
                <div className="about-bg-circle about-bg-circle-2"></div>
            </div>
        </section>
    );
}

export default About;