import axios from 'axios'
import React, { useState } from 'react'

function Contact() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const onSubmit = () => {
        
    }
    return (
        <section className="section section-on-footer bg-primary " id='contact'>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h3 className="section-title text-white">Contact Info</h3>
                    </div>
                    <div className="col-lg-8 mx-auto">
                        <div className="bg-white rounded text-center p-5 shadow-down">
                            <h4 className="mb-80">Contact Form</h4>
                            <form className="row" >
                                <div className="col-md-6">
                                    <input type="text" id="name" name="name" placeholder="Full Name" className="form-control px-0 mb-4" value={name} onChange={(e) => {
                                        setName(e.target.value)
                                    }} />
                                </div>
                                <div className="col-md-6">
                                    <input type="email" id="email" name="email" placeholder="Email Address" className="form-control px-0 mb-4" value={email} onChange={(e) => {
                                        setEmail(e.target.value)
                                    }} />
                                </div>
                                <div className="col-12">
                                    <textarea name="message" id="message" className="form-control px-0 mb-4" placeholder="Type Message Here" value={message} onChange={(e) => {
                                        setMessage(e.target.value)
                                    }} />
                                </div>
                                <div className="col-lg-6 col-10 mx-auto">
                                    <button className="btn btn-primary w-100" type='button' onClick={onSubmit}>send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact