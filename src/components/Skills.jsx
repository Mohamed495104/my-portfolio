import React, { useState } from "react";
import skills from "../data/skills";
import { SiGraphql, SiFigma } from "react-icons/si";

function Skills() {
    const [activeCategory, setActiveCategory] = useState("frontend");

    const renderIcon = (skill) => {
        if (skill.icon === "graphql")
            return <SiGraphql size={40} color={skill.color} className="skill-icon" />;
        if (skill.icon === "figma")
            return <SiFigma size={40} color={skill.color} className="skill-icon" />;
        return (
            <i
                className={`${skill.icon} skill-icon`}
                style={{ color: skill.color }}
            ></i>
        );
    };

    const categories = [
        { key: "frontend", name: "Frontend", icon: "bi-code-slash", color: "#3b82f6" },
        { key: "backend", name: "Backend", icon: "bi-server", color: "#10b981" },
        { key: "database", name: "Database", icon: "bi-database", color: "#f59e0b" },
        { key: "tools", name: "Tools & Design", icon: "bi-tools", color: "#ef4444" },
        { key: "learning", name: "Upskilling", icon: "bi-mortarboard", color: "#8b5cf6" },
    ];

    const allSkills = Object.values(skills).flat();
    const totalTechnologies = allSkills.length;
    const totalCategories = Object.keys(skills).length;

    return (
        <section id="skills" className="skills-section py-5">
            <div className="container">
                {/* Section Header */}
                <div className="row justify-content-center mb-5">
                    <div className="col-12 col-lg-10 text-center">
                        <div className="skills-title-wrapper mb-4">
                            <h2 className="display-4 fw-bold text-white mb-3">
                                Skills & Technologies
                            </h2>
                        </div>
                        <p
                            className="lead text-white-50 mx-auto"
                            style={{ maxWidth: "600px" }}
                        >
                            A comprehensive overview of my technical expertise and tools I use
                            to craft exceptional digital experiences.
                        </p>
                    </div>
                </div>

                {/* Category Navigation */}
                <div className="row justify-content-center mb-5">
                    <div className="col-12 col-lg-11 col-xl-10">
                        <div className="skills-nav-container px-2 px-md-3">
                            <div className="skills-nav d-flex flex-wrap justify-content-center gap-2 p-3 p-md-4 rounded-pill">
                                {categories.map((category) => (
                                    <button
                                        key={category.key}
                                        className={`btn skills-nav-btn ${
                                            activeCategory === category.key ? "active" : ""
                                        }`}
                                        onClick={() => setActiveCategory(category.key)}
                                    >
                                        <i className={`${category.icon} me-2`}></i>
                                        <span>{category.name}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Skills Grid */}
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="skills-grid-wrapper">
                            {skills[activeCategory]?.length > 0 ? (
                                <div className="row g-4 justify-content-center">
                                    {skills[activeCategory].map((skill, index) => (
                                        <div
                                            key={index}
                                            className="col-sm-6 col-lg-4 col-xl-3"
                                        >
                                            <div
                                                className={`skill-card h-100 p-4 rounded-4 position-relative ${
                                                    activeCategory === "learning"
                                                        ? "learning-card"
                                                        : ""
                                                }`}
                                            >
                                                <div className="d-flex flex-column align-items-center text-center h-100">
                                                    {/* Learning Badge */}
                                                    {activeCategory === "learning" && (
                                                        <div className="learning-badge position-absolute top-0 end-0 m-2">
                                                            <span className="badge bg-gradient rounded-pill px-3 py-2">
                                                                <i className="bi bi-book-half me-1"></i>
                                                                Learning
                                                            </span>
                                                        </div>
                                                    )}

                                                    {/* Icon */}
                                                    <div className="skill-icon-wrapper mb-3 d-flex align-items-center justify-content-center">
                                                        {renderIcon(skill)}
                                                        {activeCategory === "learning" && (
                                                            <div className="learning-pulse position-absolute"></div>
                                                        )}
                                                    </div>

                                                    {/* Skill Name */}
                                                    <h5 className="skill-name fw-semibold text-white mb-3 flex-grow-1 d-flex align-items-center">
                                                        {skill.name}
                                                    </h5>

                                                    {/* Learning Status (only for learning category) */}
                                                    {activeCategory === "learning" && (
                                                        <div className="learning-status-wrapper w-100 mt-auto">
                                                            <div className="d-flex justify-content-between align-items-center mb-2">
                                                                <span className="learning-status-text small text-warning fw-medium">
                                                                    <i className="bi bi-lightning-charge-fill me-1"></i>
                                                                    {skill.status || "In Progress"}
                                                                </span>
                                                                <span className="learning-duration small text-info fw-semibold">
                                                                    {skill.duration || "2024"}
                                                                </span>
                                                            </div>
                                                            <div className="learning-progress-bar">
                                                                <div className="learning-progress-fill animated-progress"></div>
                                                            </div>
                                                            {skill.focus && (
                                                                <div className="learning-focus mt-2">
                                                                    <small className="text-white-50">
                                                                        <i className="bi bi-target me-1"></i>
                                                                        {skill.focus}
                                                                    </small>
                                                                </div>
                                                            )}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-5">
                                    <div className="text-white-50">
                                        <i className="bi bi-info-circle fs-1 mb-3 d-block"></i>
                                        <p className="fs-5">No skills found for this category.</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="row justify-content-center mt-5 pt-4">
                    <div className="col-12 col-lg-10">
                        <div className="skills-stats-wrapper p-4 rounded-4">
                            <div className="row text-center g-4">
                                <div className="col-12 col-md-4">
                                    <div className="skill-stat">
                                        <div className="skill-stat-icon mb-3">
                                            <i className="bi bi-collection text-info fs-1"></i>
                                        </div>
                                        <h3 className="skill-stat-number fw-bold mb-2">
                                            {totalTechnologies}+
                                        </h3>
                                        <p className="skill-stat-label text-white-50 mb-0">
                                            Technologies Mastered
                                        </p>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4">
                                    <div className="skill-stat">
                                        <div className="skill-stat-icon mb-3">
                                            <i className="bi bi-grid-3x3-gap text-warning fs-1"></i>
                                        </div>
                                        <h3 className="skill-stat-number fw-bold mb-2">
                                            {totalCategories}
                                        </h3>
                                        <p className="skill-stat-label text-white-50 mb-0">
                                            Skill Categories
                                        </p>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4">
                                    <div className="skill-stat">
                                        <div className="skill-stat-icon mb-3">
                                            <i className="bi bi-calendar-check text-success fs-1"></i>
                                        </div>
                                        <h3 className="skill-stat-number fw-bold mb-2">3+</h3>
                                        <p className="skill-stat-label text-white-50 mb-0">
                                            Years of Experience
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* How I Can Help You Block */}
                <div className="row justify-content-center mt-5">
                    <div className="col-12 col-lg-10">
                        <div className="how-i-can-help p-4 p-md-5 bg-dark text-light rounded-4 shadow-sm text-center">
                            <h3 className="fw-bold mb-3">How I Can Help You!</h3>
                            <p className="mb-0 text-white-50">
                                I create <strong>modern, high-performing web solutions</strong> that blend
                                clean design with powerful functionality. My focus is on building{" "}
                                <strong>websites that engage users</strong>, <strong>applications that scale</strong>,
                                and <strong>experiences that drive real results</strong>.
                                Whether it's a <em>portfolio </em>that stands out, an{" "}
                                <em>e-commerce platform </em>that boosts sales, or a{" "}
                                <em>custom app that solves business challenges</em>, I deliver value through
                                both technical expertise and creative problem-solving.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;