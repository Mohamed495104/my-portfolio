import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectCard({ id, title, description, screenshots, codeLink }) {
    const navigate = useNavigate();

    const openDetails = () => {
        navigate(`/projects/${id}`);
    };

    return (
        <div className="project-card-wrapper">
            <div
                className="card project-card border-0 h-100"
                onClick={openDetails}
            >
                {/* Card Glow Effect */}
                <div className="project-card-glow"></div>

                {/* Thumbnail */}
                {screenshots && screenshots.length > 0 && (
                    <div className="project-image-wrapper">
                        <img
                            src={screenshots[0]}
                            alt={`${title} preview`}
                            className="project-image"
                        />
                        <div className="project-image-overlay">
                            <div className="project-view-icon">
                                <i className="bi bi-eye"></i>
                            </div>
                        </div>
                    </div>
                )}

                {/* Card Body */}
                <div className="card-body project-card-body d-flex flex-column text-center">
                    <h5 className="project-card-title fw-bold mb-3">{title}</h5>
                    <p className="project-card-description flex-grow-1 mb-4">
                        {description.length > 90 ? description.substring(0, 90) + "..." : description}
                    </p>

                    {codeLink && (
                        <div className="project-card-actions">
                            <a
                                href={codeLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-source-btn"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <i className="bi bi-github me-2"></i>
                                <span>Source Code</span>
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;