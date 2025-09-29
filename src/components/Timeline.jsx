import React from 'react';

const Timeline = () => {
    const timelineData = [
        {
            type: 'education',
            title: 'Postgraduate Degree in Web Development',
            company: 'Conestoga College',
            period: 'Sept 2024 - Dec 2025',
            location: 'Kitchener, ON',
            description: [
                'Specializing in MERN stack development with focus on building scalable, user-focused applications using modern technologies.'
            ],
            skills: ['MongoDB', 'Express.js', 'Node.js','MySQL', 'AWS', 'Firebase', 'React.js','Bootstrap','REST API','Flutter','Figma'],
            icon: '🎓'
        },
        {
            type: 'work',
            title: 'Senior Systems Engineer',
            company: 'Infosys',
            period: 'Oct 2023 - Aug 2024',
            location: 'Chennai, India',
            description: [
                'Led 2nd-level support and proactive monitoring for enterprise applications, ensuring high system performance and reliability.',
                'Resolved complex incidents by collaborating with development teams to deliver permanent fixes, bug resolutions, and production deployments.',
                'Conducted root cause analysis (RCA) for recurring issues and validated business fixes via UAT.',
                'Mentored junior team members, fostering knowledge sharing and Agile/Scrum best practices.',
                'Maintained detailed incident/change documentation, driving continuous system improvement.'
            ],
            skills: ['Problem Solving', 'Mentorship', 'Leadership','User Acceptance Test','Root Cause Analysis','Bug Fixes','Cross-Team Collaboration','Agile Workflow'],
            icon: '💼'
        },
        {
            type: 'work',
            title: 'Systems Engineer',
            company: 'Infosys',
            period: 'Sept 2021 - Aug 2023',
            location: 'Chennai, India',
            description: [
                'Monitored application performance and ensured stable day-to-day operations.',
                'Managed full incident lifecycle: triage, prioritization, communication, and resolution.',
                'Provided end-user support, improving adoption of application features.',
                'Maintained documentation of incidents, changes, and fixes for transparency.',
                'Assisted in bug fixes, production deployments, and release documentation.'
            ],
            skills: ['Problem Solving', 'Enterprise Systems', 'Application Support','User Acceptance Test','Team Collaboration','Agile','ServiceNow'],
            icon: '💼'
        },
        {
            type: 'education',
            title: 'Bachelor of Technology - Information Technology',
            company: 'SRM University',
            period: 'Aug 2017 - Apr 2021',
            location: 'Chennai',
            description: [
                'Foundation in engineering principles, software development, and problem-solving methodologies.'
            ],
            skills: ['Engineering Fundamentals', 'Mathematics', 'Problem Solving'],
            icon: '🎓'
        }
    ];

    return (
        <section id="timeline" className="py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="text-center mb-5">
                            <h2 className="section-title">
                                <span className="brand-text">My Journey</span>
                            </h2>
                            <p className="section-subtitle mt-3">
                                From Systems Engineer to Full-Stack Developer
                            </p>
                        </div>

                        <div className="timeline-container">
                            {timelineData.map((item, index) => (
                                <div key={index} className={`timeline-item ${item.type}`}>
                                    <div className="timeline-marker">
                                        <div className="timeline-dot">
                                            <span className="timeline-icon">{item.icon}</span>
                                        </div>
                                        {index !== timelineData.length - 1 && <div className="timeline-line"></div>}
                                    </div>

                                    <div className="timeline-content">
                                        <div className="timeline-header">
                                            <div className="timeline-badge">
                                                {item.type === 'work' ? 'Work Experience' : 'Education'}
                                            </div>
                                            <div className="timeline-period">{item.period}</div>
                                        </div>

                                        <h4 className="timeline-title">{item.title}</h4>
                                        <div className="timeline-company">
                                            <i className="bi bi-building me-2"></i>
                                            {item.company}
                                        </div>
                                        <div className="timeline-location mb-3">
                                            <i className="bi bi-geo-alt me-2"></i>
                                            {item.location}
                                        </div>

                                        {/* Description as list */}
                                        <ul className="timeline-description-list">
                                            {item.description.map((point, i) => (
                                                <li key={i} className="timeline-description">{point}</li>
                                            ))}
                                        </ul>

                                        <div className="timeline-skills mt-3">
                                            {item.skills.map((skill, skillIndex) => (
                                                <span key={skillIndex} className="skill-tag">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
