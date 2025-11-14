import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectCard({ id, title, description, screenshots, codeLink, highlights }) {
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
                                <i className="bi bi-eye-fill"></i>
                            </div>
                        </div>
                    </div>
                )}

                {/* Card Body */}
                <div className="card-body project-card-body d-flex flex-column text-center">
                    <h5 className="project-card-title fw-bold mb-3">{title}</h5>
                    <p className="project-card-description flex-grow-1 mb-4">
                        {description.length > 100 ? description.substring(0, 100) + "..." : description}
                    </p>

                    {/* Show first highlight if available */}
                    {highlights && highlights.length > 0 && (
                        <div className="project-card-meta mb-3">
                            <span className="project-meta-badge">
                                <i className="bi bi-tag-fill me-2"></i>
                                {highlights[0].value}
                            </span>
                        </div>
                    )}

                    <div className="project-card-actions d-flex gap-2 justify-content-center">
                        <button className="btn btn-sm project-view-btn flex-grow-1">
                            <i className="bi bi-eye me-2"></i>
                            View Details
                        </button>
                        {codeLink && (
                            <a
                                href={codeLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-sm project-code-btn"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <i className="bi bi-github"></i>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;