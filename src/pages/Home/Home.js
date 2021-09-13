import React, { useEffect } from 'react'
import './style.css'
import img2 from '../../images/2.webp'
import img8 from '../../images/8.webp'
import digitalMarketing from '../../images/4.webp'
import digitalMarketing2 from '../../images/3.webp'
import productManagement from '../../images/5.webp'
import Slider from '../../Components/slider/Slider'
import symbol1 from '../../images/Capture.PNG'
import symbol2 from '../../images/Capture1.PNG'
import symbol3 from '../../images/Capture2.PNG'
import video from '../../images/video.mp4'
import { useHistory } from 'react-router'
import './media.query.css'
const Home = () => {
    const history=useHistory()
    React.useEffect(() => {
        window.scroll(0,0)
    }, [])
    return (
        <>
            <div className="container-home">
                <div className="part1">
                    <div>A World of Knowledge at Your Fingertips</div>
                </div>
                <div className="part2">
                    <h2>About Us</h2>
                    <section>
                        <div>
                            <div className="part2-text">Learning Together From the Comfort of Your Home</div>
                            <button onClick={()=>{history.push('/about')}}>Learn More</button>
                        </div>
                        <img src={img2} className='img2' />
                    </section>
                </div>
                <div className="part3">
                    <p className="part-3-1">Welcome to</p>
                    <p className="part-3-2">The next big thing</p>
                    <span></span>
                    <a href="https://discord.gg/A8zBusy" target="_blank">Join TEN Virtual Campus</a>
                </div>
                <div className="part-4">
                    <div className="part-4-img">
                        <img src={img8} />
                        <div>
                            <p>Our Courses</p>
                            <p >Your New<br /> Journey Begins Here,<br /> Today</p>
                        </div>
                    </div>
                    <div className="part-4-right">
                        <p onClick={()=>{history.push('/product/Intraprenuer:Internship+Training+CarrerCounselling+Resume&LinkedInProfile-0')}}>Entrepreneurship<br /> made fun</p>
                        <button className="explore-here" onClick={()=>{history.push('/product/Intraprenuer:Internship+Training+CarrerCounselling+Resume&LinkedInProfile-0')}}>Explore Here</button>
                    </div>
                </div>
                <div className="part-5">
                    <img src={digitalMarketing} />
                    <div>
                        <p onClick={()=>{history.push('/courses')}}>Digital Marketing</p>
                        <button className="explore-here" onClick={()=>{history.push('/courses')}}>Explore Here</button>

                    </div>
                    <img src={digitalMarketing2} />
                </div>
                <div className="part-6">
                    <div>
                        <p onClick={()=>{history.push('/Sales:Internship+Training+CarrerCounselling+Resume&LinkedInProfile-1')}}>Product Management like a pro</p>
                        <button className="explore-here" onClick={()=>{history.push('/Sales:Internship+Training+CarrerCounselling+Resume&LinkedInProfile-1')}}>Explore Here</button>
                    </div>
                    <img src={productManagement} />
                </div>
                <div className="part-7">
                    <div className="part-7-title">Our Course Benifits</div>
                </div>
                <div className="part-8">
                    <div className="part-8-1">
                        <img src={symbol1} />
                        <section>

                            <h3>Expert Teachers<hr /></h3>

                            <p>Our instructors are more adept at monitoring student problems and assessing their level of understanding and progress, and they provide much more relevant, useful feedback.
                                We are experts in developing and testing hypotheses about learning difficulties or instructional strategies.</p>
                        </section>
                    </div>
                    <div className="part-8-2">
                        <img src={symbol2} />
                        <section>
                            <h3>Online Community<hr /></h3>
                            <p>Feel like home, with a "family of invisible friends".</p>
                        </section>


                    </div>
                    <div className="part-8-3">
                        <img src={symbol3} />
                        <section>
                            <h3>Flexible Curriculum<hr /></h3>


                            <p>Our expert teachers design and curate the curriculum using best practices and careful consideration of how people learn and retain information with the ongoing tech trends in the professional domain. We've debated every facet of our methodology, from the order in which to teach concepts, the analogies used to clarify them and how exercises should be structured to deliver the maximum educational punch.</p>
                        </section>
                    </div>
                </div>
                
                <Slider />
                <div className="part-9">
                    <video src={video} autoPlay loop muted width="400px" />
                    <div>
                    <p>Power of <span>TEN</span> Consulting</p>
                    <a href="https://www.consulting.entrepreneurshipnetwork.net/">Explore Here {'>'}</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home