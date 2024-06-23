import React from 'react';

function ProjectCard({ imageUrl, title, roles, description, websiteLink, githubLink }) {
    return (
        <article className="projcard-container">
            <div className="projcard projcard-blue img-right">
                <div className="projcard-innerbox">
                    <img
                        src={imageUrl}
                        className="projcard-img"
                        alt={title}
                    />
                    <div className="projcard-textbox">
                        <div className="projcard-title">
                            <a href={websiteLink}>{title}</a>
                        </div>
                        <div className="project-roles">
                            {roles.map((role, index) => (
                                <a href="#" rel="tag" key={index}>{role}</a>
                            ))}
                        </div>
                        <div className="projcard-bar" ></div>
                        <div className="projcard-description">
                            <div>{description}</div>
                            <div className="project-links">
                                <a href={websiteLink}>Website</a>{' '}
                                {/* <a href={githubLink}>Github</a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default ProjectCard;
