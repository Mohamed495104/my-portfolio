import React from "react";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
    return (
        <section id="projects" className="projects-section py-5">
            <div className="container text-center">
                {/* Section Heading */}
                <div className="projects-header mb-5">
                    <div className="projects-title-wrapper mb-4">
                        <h2 className="projects-title display-4 fw-bold mb-3">
                            Projects
                        </h2>
                        <div className="projects-title-underline"></div>
                    </div>

                    <div className="projects-subtitle-wrapper">
                        <p className="projects-subtitle fs-5 mb-0">
                            A collection of my featured work — showcasing design, functionality, and creativity.
                        </p>
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="row projects-grid">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="col-md-6 col-lg-4 mb-4 project-col"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <ProjectCard {...project} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Background Elements */}
            <div className="projects-bg-elements">
                <div className="projects-bg-circle projects-bg-circle-1"></div>
                <div className="projects-bg-circle projects-bg-circle-2"></div>
                <div className="projects-bg-circle projects-bg-circle-3"></div>
            </div>
        </section>
    );
}

export default Projects;