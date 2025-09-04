import React from 'react';

const Timeline = () => {
    const timelineData = [

        {
            type: 'education',
            title: 'Postgraduate Degree in Web Development',
            company: 'Conestoga College',
            period: ' Sept 2024 - Dec 2025',
            location: 'Kitchener, ON',
            description: 'Specializing in MERN stack development with focus on building scalable, user-focused applications using modern technologies.',
            skills: ['MongoDB', 'Express.js', 'Node.js','MySQL', 'AWS', 'Firebase', 'React.js','Bootstrap','RESTAPI','Flutter','Figma'],
            icon: '🎓'
        },
        {
            type: 'work',
            title: 'Systems Engineer',
            company: 'Infosys',
            period: 'Sept 2021 - Aug 2024',
            location: 'Chennai, India',
            description: 'Supported enterprise applications for global clients, progressing from Systems Engineer to Senior Systems Engineer. Focused on L2 application support, where I managed end-to-end incident resolution, performed root cause analysis, and implemented permanent fixes to ensure stability of critical business platforms. I worked closely with L1 teams, developers, and other stakeholders to resolve complex issues, while also providing direct customer support to maintain smooth operations. Additionally, I mentored junior engineers, strengthened client relationships through proactive communication, and promoted knowledge sharing with clear documentation.',
            skills: ['Problem Solving', 'Application Support', 'Client Management', 'Enterprise Systems','User Acceptance Test','Root Cause Analysis','Bug Fixes','Team Collaboration','Agile','ServiceNow'],
            icon: '💼'
        },
        {
            type: 'education',
            title: 'Bachelor of Technology - Information Technology',
            company: 'SRM University',
            period: 'Aug 2017 - Apr 2021',
            location: 'Chennai',
            description: 'Foundation in engineering principles and problem-solving methodologies.',
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
                                        <div className="timeline-location">
                                            <i className="bi bi-geo-alt me-2"></i>
                                            {item.location}
                                        </div>

                                        <p className="timeline-description">{item.description}</p>

                                        <div className="timeline-skills">
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