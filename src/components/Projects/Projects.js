import React from 'react'
import ProjectCard from './ProjectCard'
import styles from '../../styles/Projects.module.css'

function Projects({projectData}) {
    return (
        <div className={`container-fluid ${styles.projectContainer}`}>
            <div className={`col-md-8 ${styles.projectCardContainer} mb-5`}>
                {
                    projectData.map((project)=>{
                        return(
                            <ProjectCard project={project}/>
                        )
                    })
                }
                
                
            </div>
        </div>

  )
}

export default Projects