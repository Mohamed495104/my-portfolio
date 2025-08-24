import React, { useState, useEffect } from "react";
import { fullStackProjects, frontEndProjects } from "../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
    const [activeTab, setActiveTab] = useState('fullstack');

    // Get current projects based on active tab
    const currentProjects = activeTab === 'fullstack' ? fullStackProjects : frontEndProjects;

    // Group projects into slides (3 cards per slide)
    const projectsPerSlide = 3;
    const slideGroups = [];

    for (let i = 0; i < currentProjects.length; i += projectsPerSlide) {
        slideGroups.push(currentProjects.slice(i, i + projectsPerSlide));
    }

    // Handle tab switching
    const handleTabSwitch = (tab) => {
        setActiveTab(tab);
    };

    // Reset carousel to first slide when tab changes
    useEffect(() => {
        const carouselElement = document.getElementById(`projectsCarousel-${activeTab}`);
        if (carouselElement && window.bootstrap) {
            const carousel = window.bootstrap.Carousel.getInstance(carouselElement) ||
                new window.bootstrap.Carousel(carouselElement);
            carousel.to(0);
        }
    }, [activeTab]);

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

                {/* Project Tabs */}
                <div className="project-tabs-wrapper mb-5">
                    <ul className="nav nav-pills project-tabs justify-content-center">
                        <li className="nav-item">
                            <button
                                className={`nav-link project-tab ${activeTab === 'fullstack' ? 'active' : ''}`}
                                onClick={() => handleTabSwitch('fullstack')}
                                type="button"
                            >
                                <i className="bi bi-stack me-2"></i>
                                Full Stack Projects
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link project-tab ${activeTab === 'frontend' ? 'active' : ''}`}
                                onClick={() => handleTabSwitch('frontend')}
                                type="button"
                            >
                                <i className="bi bi-palette me-2"></i>
                                Frontend Projects
                            </button>
                        </li>
                    </ul>
                </div>

                {/* Tab Content */}
                <div className="tab-content">
                    <div className="tab-pane fade show active">
                        {/* Bootstrap Carousel */}
                        <div className="position-relative">
                            <div
                                id={`projectsCarousel-${activeTab}`}
                                className="carousel slide"
                                data-bs-ride="false"
                                key={activeTab}
                            >
                                <div className="carousel-inner">
                                    {slideGroups.map((group, slideIndex) => (
                                        <div
                                            key={`${activeTab}-slide-${slideIndex}`}
                                            className={`carousel-item ${slideIndex === 0 ? 'active' : ''}`}
                                        >
                                            <div className="row projects-grid justify-content-center">
                                                {group.map((project, index) => (
                                                    <div
                                                        key={`${activeTab}-${project.id || slideIndex * projectsPerSlide + index}`}
                                                        className="col-md-6 col-lg-4 mb-4 project-col"
                                                        style={{ animationDelay: `${index * 0.1}s` }}
                                                    >
                                                        <ProjectCard {...project} />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Carousel Indicators */}
                                {slideGroups.length > 1 && (
                                    <div className="carousel-indicators">
                                        {slideGroups.map((_, slideIndex) => (
                                            <button
                                                key={`${activeTab}-indicator-${slideIndex}`}
                                                type="button"
                                                data-bs-target={`#projectsCarousel-${activeTab}`}
                                                data-bs-slide-to={slideIndex}
                                                className={slideIndex === 0 ? 'active' : ''}
                                                aria-current={slideIndex === 0 ? 'true' : 'false'}
                                                aria-label={`Slide ${slideIndex + 1}`}
                                            ></button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* External Carousel Controls */}
                            {slideGroups.length > 1 && (
                                <>
                                    <button
                                        className="btn btn-outline-light rounded-circle position-absolute top-50 translate-middle-y carousel-control-custom carousel-control-prev-custom"
                                        type="button"
                                        data-bs-target={`#projectsCarousel-${activeTab}`}
                                        data-bs-slide="prev"
                                    >
                                        <i className="bi bi-chevron-left text-white"></i>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button
                                        className="btn btn-outline-light rounded-circle position-absolute top-50 translate-middle-y carousel-control-custom carousel-control-next-custom"
                                        type="button"
                                        data-bs-target={`#projectsCarousel-${activeTab}`}
                                        data-bs-slide="next"
                                    >
                                        <i className="bi bi-chevron-right text-white"></i>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
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