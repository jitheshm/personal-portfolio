import React from 'react'

function Footer() {
    return (
        <footer className="bg-dark footer-section">
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h5 className="text-light">Email</h5>
                            <p className="text-white paragraph-lg font-secondary">jitheshmjithooz@gmail.com</p>
                        </div>
                        <div className="col-md-4">
                            <h5 className="text-light">Phone</h5>
                            <p className="text-white paragraph-lg font-secondary">+91 9072922178</p>
                        </div>
                        <div className="col-md-4">
                            <h5 className="text-light">Place</h5>
                            <p className="text-white paragraph-lg font-secondary">Palakkad,Kerala</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-top text-center border-dark py-5">
                <p className="mb-0 text-light">Copyright © a theme by Jithesh M</p>
            </div>
        </footer>
    )
}

export default Footer