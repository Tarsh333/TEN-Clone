import React, { useEffect } from 'react'
import QRCode from '../../images/qr-code.webp'
import './style.css'
import './media-query.css'
const Hiring = () => {
    useEffect(() => {
        function scroll(event) {
            const animatedBoxes = document.getElementsByClassName("animated-box");
            const windowOffsetTop = window.innerHeight + window.scrollY;
    
            Array.prototype.forEach.call(animatedBoxes, (animatedBox) => {
                const animatedBoxOffsetTop = animatedBox.offsetTop;
    
                if (windowOffsetTop >= animatedBoxOffsetTop) {
                    addClass(animatedBox, "fade-in");
                }
            });
        }
        function fontChange(event) {
            const animatedBoxes = document.getElementsByClassName("animated-box-2");
            const windowOffsetTop = window.innerHeight + window.scrollY;
    
            Array.prototype.forEach.call(animatedBoxes, (animatedBox) => {
                const animatedBoxOffsetTop = animatedBox.offsetTop;
    
                if (windowOffsetTop >= animatedBoxOffsetTop) {
                    addClass(animatedBox, "font-change");
                }
            });
        }
        document.addEventListener("scroll",scroll );
        document.addEventListener("scroll",fontChange );
        
        function addClass(element, className) {
            const arrayClasses = element.className.split(" ");
            if (arrayClasses.indexOf(className) === -1) {
                element.className += " " + className;
            }
        }
        return () => {
            return function cleanupListener() {
                document.removeEventListener('scroll', scroll)
                document.removeEventListener('scroll', fontChange)
              }
        }
    }, [])
    React.useEffect(() => {
        window.scroll(0,0)
    }, [])
    return (
        <>
            <div className="hiring-page-part-1">
                <h2>We Are Hiring Interns</h2>
                <p>
                    The Student Intern program is a structured and guided work-based learning program for students currently enrolled in India.<br /><br />
                    There is a small registration fee, INR 400 /- (RUPEES Four HUNDRED ONLY) applicable to all incoming interns  as part of this One-of-a-Kind Point based Program.This is required not just to ensure a seamless on-boarding and exit process but also to supply the interns with relevant study material and make them aware of how a corporate setup works.
                    <div>
                        <p><b>Scan the QR code to complete your payment and submit the below
                            application form to start with your registration process.</b><br /><br />
                            Please keep the payment transaction ID handy for submitting
                            the form.<br /><br />
                            Note: This internship does not offer an opportunity to earn money,
                            rather helps an individual grow by working on the job and
                            earn a certificate upon successful completion.<br /><br />
                            Check out few of our open internship positions below
                            Refer the application form for more open positions<br /><br />
                            <b> <div className="bold">
                                Digital Marketing Interns
                            </div>
                                <div className="bold">
                                    General Management Interns
                                </div>
                                <div className="bold">
                                    Technical/Software Experts
                                </div>
                                <div className="bold">
                                    Product Management Interns
                                </div>
                                <div className="bold">
                                    Content Interns and more...
                                </div></b>

                        </p><img src={QRCode} />
                    </div>
                </p>
            </div>
            <div className="hiring-page-part-2 animated-box">
                <form>

                    <h2 className="animated-box-2">Application Form</h2>
                    <p id="hiring-page-part-2-p1">Registration Fee Rs.100/-</p>
                    <p>Choose relevent internship opening *</p>
                    <select required id="first-select">
                        <option value="" disabled=""></option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="Market Research">Market Research</option>
                        <option value="Sales">Sales</option>
                        <option value="Text Content Preparation">Text Content Preparation</option>
                        <option value="Graphic Content Preparation">Graphic Content Preparation</option>
                        <option value="Video Content Preparation">Video Content Preparation</option>
                        <option value="Audio Content Preparation">Audio Content Preparation</option>
                        <option value="Angular Developer">Angular Developer</option>
                        <option value="React Developer">React Developer</option>
                        <option value="Java Developer">Java Developer</option>
                        <option value="SpringBoot Developer">SpringBoot Developer</option>
                        <option value="WordPress Developer">WordPress Developer</option>
                        <option value="Product Management">Product Management</option>
                        <option value="Project Management">Project Management</option>
                        <option value="Program Management">Program Management</option>
                        <option value="Strategic Relationship Management">Strategic Relationship Management</option>
                        <option value="Entrepreneur in residence">Entrepreneur in residence</option>
                        <option value="Technical Program Management">Technical Program Management</option>
                    </select>
                    <p>What is your employement status? *</p>
                    <select required="">
                        <option value="" disabled="" ></option>
                        <option value="College Student" >College Student</option>
                        <option value="Employed" >Employed</option>
                        <option value="Unemployed" >Unemployed</option>
                        <option value="Other" >Other</option>
                    </select>
                    <p>Do you have previous experience? *</p>
                    <select  required id="last-select">
                        <option value="" disabled="" ></option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                        </select>
                    <p>Payment Transaction ID *</p>
                    <input type="text"/>
                    <button type="submit">Next</button>
                </form>
            </div>
        </>
    )
}

export default Hiring
