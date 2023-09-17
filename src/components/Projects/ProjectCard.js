import React from 'react'
import styles from '../../styles/ProjectCard.module.css'

function ProjectCard({project}) {
    return (
        <div className={`col-8 col-md-5 col-lg-3 ${styles.projectCard} mt-5 px-2 pt-3`}>
            <div className={styles.projectImage}><img src={project.imageUrl} width="100%" /></div>
            <div className={`col-12 ${styles.projectCardBody} py-2`}>
                <h6 className="mt-2">{project.name}</h6>
                <h6 className="my-3">{project.category}</h6><button className="btn" type="button">Read More</button>
            </div>
        </div>)
}

export default ProjectCard