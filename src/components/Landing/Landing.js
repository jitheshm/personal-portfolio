import Image from 'next/image'
import React from 'react'
import Projects from '../Projects/Projects'
import About from '../About/About'
import Skills from '../Skills/Skills'
import Education from '../Education/Education'
import Services from '../Services/Services'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import Main from '../Main/Main'

function Landing({ projectData }) {
    return (
        <>
            <Main />
            <About />
            <Skills />
            <Education />
            <Services />
            <Projects projectData={projectData} />
            <Contact />
            <Footer />
        </>

    )
}

export default Landing