import React, { useState } from 'react'
import insta from '../../images/insta.webp'
import facebook from '../../images/facebook.webp'
import twitter from '../../images/twitter.webp'
import { Link } from 'react-router-dom'
import './style.css'
import './media-query.css'
const Footer = () => {
    const [inputs, setInputs] = useState({ name: '', email: '', phone: '', college: '' })
    const [checkbox, setCheckbox] = useState(true)
    const changeInput = (e) => {
        const { name, value } = e.target
        setInputs((prev) => { return ({ ...prev, [name]: value }) })
    }
    React.useEffect(() => {
        console.log(inputs);
    }, [inputs])

    return (
        <div className="footer">
            <div className="footer-upper">
                <div className="footer-upper-1">
                    <a href="https://www.facebook.com/The-Entrepreneurship-Network-105155667888383/">
                        <img src={facebook} />
                    </a>
                    <a href="https://twitter.com/We_Are_TEN?s=08">
                        <img src={twitter} />
                    </a>
                    <a href="https://www.instagram.com/theentrepreneurshipnetwork/">
                        <img src={insta} />
                    </a>
                </div>
                        <form>
                <div className="footer-upper-2">
                    <h3>Subscribe to our newsletter</h3>
                    <div id="footer-upper-2-inputs">
                        <input type ="text" placeholder="Full Name" name="name" onChange={changeInput} value={inputs.name} required/>
                        <input type ="text" placeholder="College Name" name="college" onChange={changeInput} value={inputs.college} required />
                        <input type ="text" placeholder="Mobile No." name="phone" onChange={changeInput} value={inputs.phone} required />
                        <input type ="text" placeholder="Email" name="email" onChange={changeInput} value={inputs.email} required />
                    </div>
                    <div className="footer-checkbox"><input type="checkbox" id="checkbox" checked={checkbox} onChange={(e)=>{setCheckbox(e.target.checked)}} /> <label for="checkbox">Join TEN's Discord Community</label></div>
                    <button type="submit">Submit</button>

                </div>
                </form>
                <div className="footer-upper-3">
                    <Link to="about">About Us</Link>
                    <Link to="contact">FAQ's</Link>
                    <Link to="contact">Contact Us</Link>
                </div>
            </div>
            <div className="footer-lower">
                © 2020 Limitless Technologies - The Entrepreneurship Network
            </div>
        </div>
    )
}

export default Footer
