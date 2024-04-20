import React from 'react'
import ProjectCard from './ProjectCard'


function Projects({ projectData }) {
    return (

        <section className="section" id='projects'>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h3 className="section-title">My Projects</h3>
                    </div>
                </div>
                <div className="row shuffle-wrapper">

                    {
                        projectData.map((project) => {
                            return (
                                <ProjectCard project={project} />
                            )
                        })
                    }
                </div>
            </div>
        </section>

    )
}

export default Projects