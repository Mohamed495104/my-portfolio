import React from "react";

function About() {
    return (
        <section id="about" className="about-section py-5">
            <div className="container">
                <div className="row align-items-center">
                    {/* Profile Photo */}
                    <div className="col-lg-5 text-center mb-5 mb-lg-0">
                        <div className="about-image-wrapper">
                            <img
                                src="/images/profile.jpg"
                                alt="Ijas - Profile"
                                className="about-profile-img img-fluid"
                            />
                            <div className="about-image-glow"></div>
                        </div>
                    </div>

                    {/* About Text */}
                    <div className="col-lg-7 text-center text-lg-start">
                        <div className="about-content">
                            <div className="about-title-wrapper mb-4">
                                <h2 className="about-title display-4 fw-bold mb-3">
                                    About Me
                                </h2>

                            </div>

                            <div className="about-text-wrapper">
                                <p className="about-description fs-5 mb-0">
                                    Hi, I'm Mohamed Ijas, a Systems Engineer turned Full-Stack Developer.
                                    I spent over 3 years at Infosys supporting enterprise applications
                                    for global clients like Mercedes-Benz Japan, where I gained strong
                                    skills in problem-solving, application support, and collaboration.
                                    <br /><br />
                                    Now, I'm pursuing a Postgraduate Degree in Web Development at Conestoga
                                    College, specializing in the MERN stack (MongoDB, Express.js, React.js,
                                    Node.js) along with REST APIs, AWS, and Firebase. My focus is on building
                                    scalable, user-focused applications and growing as a software engineer.
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
