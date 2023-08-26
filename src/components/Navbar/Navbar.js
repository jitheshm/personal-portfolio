import React from 'react'
import styles from '../../styles/Navbar.module.css'
function Navbar() {
  return (
    <div className={`${styles.navbar} navbar px-3`}>
      <div className={styles.iconContainer}>
        <div className={styles.icon}><i className="fas fa-home" /><span className={styles.iconName}>Home</span></div>
        <div className={styles.icon}><i className="fas fa-user" /><span className={styles.iconName}>Personal</span></div>
        <div className={styles.icon}><i className="fas fa-lightbulb" /><span className={styles.iconName}>Skills</span></div>
        <div className={styles.icon}><i className="fas fa-book-open" /><span className={styles.iconName}>Education</span></div>
        <div className={styles.icon}><i className="fas fa-desktop" /><span className={styles.iconName}>Projects</span></div>
      </div>
    </div>

  )
}

export default Navbar