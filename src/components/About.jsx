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
                                src="/images/profile.jpeg"
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
                                    Hi, I'm a <strong className="text-white">Full Stack Engineer</strong> with prior experience as a Systems Engineer at Infosys working on real world projects, focused on building clear, reliable, and user-focused software solutions.    </p>

                                <p className="about-description lh-lg mb-4" style={{
                                    fontSize: '1.125rem',
                                    color: 'rgba(255, 255, 255, 0.9)',
                                    fontWeight: '400',
                                    lineHeight: '1.7'
                                }}>
                                    With a strong foundation in Agile development and cross-team collaboration, I bring enterprise experience into modern software engineering-building scalable, high-quality solutions using modern web and AI tools thoughtfully. I’m driven by creating software that delivers real value and stands the test of time.
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