import Link from 'next/link'
import React from 'react'
import styles from '../../styles/Navbar.module.css'
function Navbar() {
  return (
    <div className={`${styles.navbar} navbar px-3`}>
      <div className={styles.iconContainer}>
      <Link href="/"> <div className={styles.icon}><i className="fas fa-home" /><span className={styles.iconName}>Home</span></div></Link>
      <Link href="/about"> <div className={styles.icon}><i className="fas fa-user" /><span className={styles.iconName}>Personal</span></div></Link>
      <Link href="/skills"> <div className={styles.icon}><i className="fas fa-lightbulb" /><span className={styles.iconName}>Skills</span></div></Link>
      <Link href="/education"> <div className={styles.icon}><i className="fas fa-book-open" /><span className={styles.iconName}>Education</span></div></Link>
      <Link href="/projects"> <div className={styles.icon}><i className="fas fa-desktop" /><span className={styles.iconName}>Projects</span></div></Link>
      </div>
    </div>

  )
}

export default Navbar