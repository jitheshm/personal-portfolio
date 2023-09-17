import React from 'react'
import styles from '../../styles/ProjectCard.module.css'

function ProjectCard() {
    return (
        <div className={`col-8 col-md-5 col-lg-3 ${styles.projectCard} mt-5 px-2 pt-3`}>
            <div className={styles.projectImage}><img src="assets/img/Screenshot%20from%202023-09-02%2023-42-56.png" width="100%" /></div>
            <div className={`col-12 ${styles.projectCardBody} py-2`}>
                <h6 className="mt-2">Personal Website</h6>
                <h6 className="my-3">Web Application</h6><button className="btn" type="button">Read More</button>
            </div>
        </div>)
}

export default ProjectCard