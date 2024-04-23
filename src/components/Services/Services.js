import React from 'react'

function Services() {
    return (
        <section className="section" id='services'>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h3 className="section-title">Services</h3>
                    </div>
                    <div className="col-md-4 mb-4 mb-md-0">
                        <div className="card active-bg-primary ">
                            <div className="card-body text-center px-4 py-5">
                                <i className="ti-palette icon mb-5 d-inline-block" />
                                <h4 className="mb-4">Web application development</h4>
                                <p>I specialize in crafting dynamic MERN stack web applications that drive growth and streamline operations for businesses in the digital age, leveraging MongoDB, Express.js, React.js, and Node.js.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4 mb-md-0">
                        <div className="card active-bg-primary ">
                            <div className="card-body text-center px-4 py-5">
                                <i className="ti-vector icon mb-5 d-inline-block" />
                                <h4 className="mb-4">React application development</h4>
                                <p>Specializing in React.js development, I craft lightning-fast and immersive web applications that drive engagement and deliver results in today's digital landscape.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4 mb-md-0">
                        <div className="card active-bg-primary ">
                            <div className="card-body text-center px-4 py-5">
                                <i className="ti-panel icon mb-5 d-inline-block" />
                                <h4 className="mb-4">Static websites</h4>
                                <p>Offering expertly crafted static website development and seamless deployment services, ensuring your online presence is polished, professional, and ready to impress.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services