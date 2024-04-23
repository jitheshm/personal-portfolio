import React from 'react'

function About() {
    return (
        <section className="about-area section_gap gray-bg mt-5" id='about'>
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-lg-5 about-left">
                        <img className="img-fluid about-img" src="/images/about.jpeg" alt />
                    </div>
                    <div className="col-lg-6 col-md-12 about-right mt-4">
                        <div className="main-title text-left">
                            <h3>about me</h3>
                        </div>
                        <div className="mb-50 wow fadeIn" data-wow-duration=".8s">
                            <p>
                                Self-taught MERN stack developer with a passion for developing dynamic and interactive systems using Node.js, Express.js, React.js and MongoDB. In addition to MERN stack skills, I am also proficient in Next.js, a powerful React framework .I am excited to contribute my skills to a team that values innovation and continuous learning.
                            </p>

                        </div>
                        {/* <a href="#" className="primary-btn">More Info</a> */}
                    </div>
                </div>
            </div>
        </section>

    )
}

export default About