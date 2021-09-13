import React, { useState } from 'react'
import './style.css'
import './media-query.css'
import { FaTwitter } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
const Contact = () => {
    const [inputs, setInputs] = useState({ name: '', email: '', message: '' })
    const changeInput = (e) => {
        const { name, value } = e.target
        setInputs((prev) => { return ({ ...prev, [name]: value }) })
    }
    React.useEffect(() => {
        window.scroll(0,0)
    }, [])
    return (
        <div className="contact-us">
            <h1>Contact Us</h1>
            <hr />
            <div className="contact-us-form">
                <form>
                    <input type="text" placeholder="Name" name="name" onChange={changeInput} value={inputs.name} required />
                    <input type="text" placeholder="Email" name="email" onChange={changeInput} value={inputs.email} required />
                    <textarea placeholder="Add a message" name="message" onChange={changeInput} value={inputs.message} required />
                    <button type="submit">Submit</button>

                </form>
                <div>
                    <div className="contact-form-side">

                        Email:<br />
                        hr.contact.ten@gmail.com<br />
                    </div>
                    <div className="contact-form-side">

                        Phone:<br />
                        +918595986120<br />
                    </div>
                    <div className="contact-form-side">

                        Address: Delhi<br />
                    </div>
                </div>
            </div>
            <div className="faq">
                <h1 id="faq-heading-1">FAQ</h1>
                <hr />
                <p className="faq-heading-2">Frequently asked questions</p>
                <div className="faq-scroll">
                    <p className="faq-question">
                        What is The Entrepreneurship Network (TEN) ?
                    </p>
                    <p className="faq-answer">
                        The Entrepreneurship Network (TEN) is a community based Edu-Tech group whose objective is to provide quality learning and expertise.<br />
                        Our current customer segment, at present, stands at 500+ colleges and 15000+ students, with new institutions coming in all the time.
                    </p>
                    <div className="faq-icons">
                        <FaFacebookF /><FaTwitter />
                    </div>
                    <p className="faq-question">
                        Why do I join TEN ? ?
                    </p>
                    <p className="faq-answer">
                        TEN would enable you to accelerate your aspirations by providing an opportunity to master the most desired skill-sets in today's market.
                    </p>
                    <div className="faq-icons">
                        <FaFacebookF /><FaTwitter />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Contact
