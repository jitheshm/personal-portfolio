import React from 'react'

function Education() {
    return (
        <section className="section position-relative" id='education'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h3 className="section-title">Education</h3>
                    </div>
                    <div className="col-lg-6 col-md-6 mb-80">
                        <div className="d-flex">
                            <div className="mr-lg-5 mr-3">
                                <i className="ti-medall icon icon-light icon-bg bg-white shadow rounded-circle d-block" />
                            </div>
                            <div>
                                <p className="text-dark mb-1">2024</p>
                                <h4>Full Stack Developer</h4>
                                <p className="mb-0 text-light">Brototype</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 mb-80">
                        <div className="d-flex">
                            <div className="mr-lg-5 mr-3">
                                <i className="ti-medall icon icon-light icon-bg bg-white shadow rounded-circle d-block" />
                            </div>
                            <div>
                                <p className="text-dark mb-1">2023</p>
                                <h4>MSC Computer Science</h4>
                                <p className="mb-0 text-light">University of Calicut</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 mb-80">
                        <div className="d-flex">
                            <div className="mr-lg-5 mr-3">
                                <i className="ti-medall icon icon-light icon-bg bg-white shadow rounded-circle d-block" />
                            </div>
                            <div>
                                <p className="text-dark mb-1">2021</p>
                                <h4>BSC Mathematics</h4>
                                <p className="mb-0 text-light">University of Calicut</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 mb-80">
                        <div className="d-flex">
                            <div className="mr-lg-5 mr-3">
                                <i className="ti-medall icon icon-light icon-bg bg-white shadow rounded-circle d-block" />
                            </div>
                            <div>
                                <p className="text-dark mb-1">2018</p>
                                <h4>Higer Secondary</h4>
                                {/* <p className="mb-0 text-light">Cardiff School</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    )
}

export default Education