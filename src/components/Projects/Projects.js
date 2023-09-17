import React from 'react'
import ProjectCard from './ProjectCard'
import styles from '../../styles/Projects.module.css'

function Projects() {
    return (
        <div className={`container-fluid ${styles.projectContainer}`}>
            <div className={`col-md-8 ${styles.projectCardContainer} mb-5`}>
                
                
                <ProjectCard/>
            </div>
        </div>

  )
}

export default Projects