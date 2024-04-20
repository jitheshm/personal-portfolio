import React from 'react'


function ProjectCard({ project }) {
    return (
        <div className="col-lg-4 col-6 mb-4 shuffle-item px-4">
            <div className="position-relative rounded hover-wrapper">
                <img src={project.imageUrl} alt="portfolio-image" className="img-fluid rounded w-100" />
                <div className="hover-overlay">
                    <div className="hover-content">
                        <a className="btn text-white" href="project-single.html">{project.name}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard