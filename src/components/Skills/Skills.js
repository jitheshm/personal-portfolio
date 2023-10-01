import Image from 'next/image'
import React from 'react'
import styles from '../../styles/Skills.module.css'

function Skills() {
  return (
   <div className={`container-fluid ${styles.skillContainer} mt-5`}>
  <div className={`col-sm-9 col-md-8 ${styles.skillBox} px-4`}>
    <div className={`${styles.skillCard} col-5 col-md-3 col-lg-2 mt-4`}>
      <div><Image   className={styles.skillImg} src="/skills/HTML5_Badge_512.png" width={45} height={40}/></div><span>HTML</span>
    </div>
    <div className={`${styles.skillCard} col-5 col-md-3 col-lg-2 mt-4`}>
      <div><Image  className={styles.skillImg} src="/skills/CSS3_logo.svg.png" width={45} height={40}/></div><span>CSS</span>
    </div>
    <div className={`${styles.skillCard} col-5 col-md-3 col-lg-2 mt-4`}>
      <div><Image  className={styles.skillImg} src="/skills/JavaScript-logo.png" width={45} height={40}/></div><span>JAVASCRIPT</span>
    </div>
    <div className={`${styles.skillCard} col-5 col-md-3 col-lg-2 mt-4`}>
      <div><Image  className={styles.skillImg} src="/skills/Bootstrap_logo.svg.png" width={45} height={40}/></div><span>BOOTSTRAP</span>
    </div>
    <div className={`${styles.skillCard} col-5 col-md-3 col-lg-2 mt-4`}>
      <div><Image  className={styles.skillImg} src="/skills/React-icon.svg.png" width={45} height={40}/></div><span>REACT</span>
    </div>
    <div className={`${styles.skillCard} col-5 col-md-3 col-lg-2 mt-4`}>
      <div><Image  className={styles.skillImg} src="/skills/2560px-Node.js_logo.svg.png" width={45} height={40}/></div><span>NODE JS</span>
    </div>
    <div className={`${styles.skillCard} col-5 col-md-3 col-lg-2 mt-4`}>
      <div><Image  className={styles.skillImg} src="/skills/download.png" width={45} height={40} /></div><span>NEXT JS</span>
    </div>
    <div className={`${styles.skillCard} col-5 col-md-3 col-lg-2 mt-4`}>
      <div><Image  className={styles.skillImg} src="/skills/MongoDB_SpringGreen.png" width={45} height={15} /></div><span>MongoDB</span>
    </div>
    <div className={`${styles.skillCard} col-5 col-md-3 col-lg-2 mt-4`}>
      <div><Image  className={styles.skillImg} src="/skills/expressjs.png" width={45} height={40} /></div><span>EXPRESS JS</span>
    </div>
    <div className={`${styles.skillCard} col-5 col-md-3 col-lg-2 mt-4`}>
      <div><Image  className={styles.skillImg} src="/skills/Git-Icon.png" width={45} height={40} /></div><span>GIT</span>
    </div>
  </div>
</div>

  )
}

export default Skills