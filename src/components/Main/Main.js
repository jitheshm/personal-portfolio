import React from 'react'

function Main() {
    return (
        <section className="hero-area bg-primary col-12" id="parallax">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mx-auto hero-area-left">
                        <h1 className="text-white font-tertiary text-center text-md-left">Hi! I’m <br /> <span style={{color:"red"}}>JITHESH</span> <br /> MERN DEVELOPER</h1>
                    </div>
                    <div className='col-lg-6 hero-area-right d-none d-lg-block'>
                        <img src='/images/robot.png' style={{ height: "50%" }} />
                    </div>
                </div>
            </div>







            {/* social icon */}
            {/* <ul className="list-unstyled ml-5 mt-3 position-relative zindex-1">
        <li className="mb-3"><a className="text-white" href="#"><i className="ti-facebook" /></a></li>
        <li className="mb-3"><a className="text-white" href="#"><i className="ti-instagram" /></a></li>
        <li className="mb-3"><a className="text-white" href="#"><i className="ti-dribbble" /></a></li>
        <li className="mb-3"><a className="text-white" href="#"><i className="ti-twitter" /></a></li>
    </ul> */}
            {/* /social icon */}
        </section>
    )
}

export default Main