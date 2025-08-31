import React from "react";
import { useParams, Link } from "react-router-dom";
import { fullStackProjects, frontEndProjects } from "../data/projects";
import { Carousel, Accordion, Card } from "react-bootstrap";
import {
    FaReact,
    FaNodeJs,
    FaGithub,
    FaDatabase,
    FaBootstrap,
    FaJs,
    FaCss3Alt,
} from "react-icons/fa";
import {
    SiExpress,
    SiMongodb,
    SiPostman,
    SiFlutter,
    SiDart,
    SiFirebase,
    SiDotnet,
} from "react-icons/si";
import Footer from "./Footer.jsx";

const techIcons = {
    React: <FaReact className="text-info me-2" />,
    "Node.js": <FaNodeJs className="text-success me-2" />,
    "Express.js": <SiExpress className="text-secondary me-2" />,
    MongoDB: <SiMongodb className="text-success me-2" />,
    Bootstrap: <FaBootstrap className="text-purple me-2" />,
    JavaScript: <FaJs className="text-warning me-2" />,
    CSS: <FaCss3Alt className="text-primary me-2" />,
    "Git & GitHub": <FaGithub className="text-light me-2" />,
    Postman: <SiPostman className="text-danger me-2" />,
    Flutter: <SiFlutter className="text-info me-2" />,
    Dart: <SiDart className="text-info me-2" />,
    "Firebase Auth": <SiFirebase className="text-warning me-2" />,
    "Firebase Database": <SiFirebase className="text-warning me-2" />,
    "Firebase Storage": <SiFirebase className="text-warning me-2" />,
    "ASP.NET Web Forms": <SiDotnet className="text-primary me-2" />,
    "ASP.NET C#": <SiDotnet className="text-primary me-2" />,
    "SQL Server": <FaDatabase className="text-danger me-2" />,
    HTML5: <i className="bi bi-filetype-html text-danger me-2"></i>,
    CSS3: <FaCss3Alt className="text-primary me-2" />,
};

function ProjectDetails() {
    const { id } = useParams();

    // merge full stack + frontend projects
    const allProjects = [...fullStackProjects, ...frontEndProjects];

    // find project
    const project = allProjects.find((p) => String(p.id) === String(id));

    if (!project) {
        return (
            <div
                className="container-fluid min-vh-100 d-flex align-items-center justify-content-center"
                style={{ paddingTop: "100px" }}
            >
                <div className="text-center">
                    <div className="mb-4">
                        <i
                            className="bi bi-exclamation-triangle-fill text-warning"
                            style={{ fontSize: "4rem" }}
                        ></i>
                    </div>
                    <h2 className="fw-bold text-light mb-3">Project Not Found</h2>
                    <p className="text-muted mb-4">
                        The project you're looking for doesn't exist or has been moved.
                    </p>
                    <Link to="/#projects" className="btn btn-primary px-4 py-2">
                        <i className="bi bi-arrow-left me-2"></i>Back to Projects
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="project-details-wrapper" style={{ paddingTop: "100px" }}>
            <div className="container py-5">
                {/* Project Header */}
                <header className="project-header text-center mb-5">
                    <h1 className="project-title display-4 fw-bold mb-3">
                        {project.title}
                    </h1>
                    <p
                        className="project-description lead text-secondary mx-auto"
                        style={{ maxWidth: "800px" }}
                    >
                        {project.description}
                    </p>
                </header>

                {/* Screenshots Carousel */}
                <section className="screenshots-section mb-5">
                    <div className="container-fluid px-0">
                        <div className="carousel-container">
                            <Carousel
                                className="project-carousel shadow-lg overflow-hidden"
                                indicators={true}
                                controls={true}
                                interval={null}
                            >
                                {project.screenshots.map((img, idx) => (
                                    <Carousel.Item key={idx}>
                                        <div className="carousel-image-wrapper">
                                            <img
                                                src={img}
                                                className="d-block w-100 carousel-image"
                                                alt={`${project.title} screenshot ${idx + 1}`}
                                            />
                                            <div className="carousel-overlay"></div>
                                        </div>
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </div>
                    </div>
                </section>

                {/* Tech Stack Section */}
                <section className="tech-stack-section mb-5">
                    <div className="section-header text-center mb-4">
                        <h2 className="section-title fw-bold">
                            <i className="bi bi-gear-fill me-3 text-primary"></i>
                            Technology Stack
                        </h2>
                    </div>

                    <div className="row g-4">
                        {Object.entries(project.techStack).map(([category, items], idx) => (
                            <div className="col-lg-4 col-md-6" key={idx}>
                                <Card className="tech-stack-card h-100 border-0 shadow">
                                    <Card.Body className="p-4">
                                        <h5 className="tech-category-title fw-bold mb-3 pb-2 border-bottom border-primary">
                                            {category}
                                        </h5>
                                        <ul className="tech-list list-unstyled">
                                            {items.map((tech, i) => (
                                                <li key={i} className="tech-item d-flex align-items-center mb-2">
                                                    {techIcons[tech] || (
                                                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                                                    )}
                                                    <span className="tech-name">{tech}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Setup Instructions */}
                <section className="setup-section mb-5">
                    <div className="section-header text-center mb-4">
                        <h2 className="section-title fw-bold">
                            <i className="bi bi-terminal-fill me-3 text-success"></i>
                            Setup Instructions
                        </h2>
                    </div>

                    <div className="setup-accordion-wrapper">
                        <Accordion defaultActiveKey="0" className="setup-accordion">
                            {project.setup.map((step, idx) => (
                                <Accordion.Item eventKey={idx.toString()} key={idx} className="setup-accordion-item">
                                    <Accordion.Header className="setup-accordion-header">
                                        <span className="step-number me-3">{idx + 1}</span>
                                        {step.title}
                                    </Accordion.Header>
                                    <Accordion.Body className="setup-accordion-body">
                                        <div className="code-block-wrapper">
                                            <pre className="code-block">
                                                <code>{step.commands}</code>
                                            </pre>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            ))}
                        </Accordion>
                    </div>
                </section>

                {/* Features Section */}
                <section className="features-section mb-5">
                    <div className="section-header text-center mb-4">
                        <h2 className="section-title fw-bold">
                            <i className="bi bi-star-fill me-3 text-warning"></i>
                            Key Features
                        </h2>
                    </div>

                    <div className="features-grid">
                        <div className="row g-3">
                            {project.features.map((feature, idx) => (
                                <div className="col-md-6" key={idx}>
                                    <div className="feature-item d-flex align-items-start p-3 rounded-3">
                                        <i className="bi bi-check-circle-fill text-success me-3 mt-1 flex-shrink-0"></i>
                                        <span className="feature-text">{feature}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Source Code CTA */}
                <section className="cta-section text-center">
                    <div className="cta-content p-5 rounded-4">
                        <h3 className="cta-title fw-bold mb-3 text-light">
                            Ready to Explore the Code?
                        </h3>
                        <p className="cta-description text-light-50 mb-4">
                            Check out the complete source code and contribute to the project on GitHub.
                        </p>
                        <a
                            href={project.codeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary btn-lg px-5 py-3"
                        >
                            <i className="bi bi-github me-2"></i>
                            View Source Code
                        </a>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
}

export default ProjectDetails;
