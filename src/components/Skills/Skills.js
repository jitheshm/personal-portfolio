import Image from 'next/image'
import React from 'react'


function Skills() {
  return (
    <section className='container-fluid my-5 py-5' id='skills' style={{ backgroundColor: "#F8F9FA" }}>
      <div className="main-title text-center">
        <h3>My Skills</h3>
      </div>
      <div className='row col-9 m-auto py-5 px-5 gap-5'>
        <div className='skill-container'>
          <i className="fa-brands fa-js" style={{ color: '#FFD43B', fontSize: "90px" }} />

        </div>
        <div className='skill-container' style={{ backgroundColor: "#183153" }}>
          <i className="fa-brands fa-react" style={{ color: '#61d9fa', fontSize: "50px" }} />

        </div>
        <div className='skill-container' style={{ backgroundColor: "#183153" }}>
          <i className="fa-brands fa-node" style={{ color: "#5DAC46", fontSize: "40px" }} />

        </div>
        <div className='skill-container' style={{ backgroundColor: "#183153" }}>
          <i className="fa-brands fa-github" style={{ color: "#ffffff", fontSize: "40px" }} />

        </div>
        <div className='skill-container' style={{ backgroundColor: "#183153" }}>
          <i className="fa-brands fa-docker" style={{ color: "#ffffff", fontSize: "40px" }} />

        </div>
        <div className='skill-container'  >
          <img src='/images/typescript.png' style={{ width: "107px" }} />

        </div>
        <div className='skill-container' style={{ backgroundColor: "#ffffff" }}>
          <img src='/images/next.png' style={{ width: "90%" }} />
        </div>
        <div className='skill-container' style={{ backgroundColor: "#ffffff" }}>
          <i className="fa-brands fa-html5" style={{ color: '#e44f26', fontSize: "50px" }} />

        </div>
        <div className='skill-container' style={{ backgroundColor: "#ffffff" }}>
          <i className="fa-brands fa-css3-alt" style={{ color: '#264de4', fontSize: "50px" }} />

        </div>





      </div>
    </section>

  )
}

export default Skills