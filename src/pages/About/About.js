import React from 'react'
import './style.css'
const About = () => {
    React.useEffect(() => {
        window.scroll(0,0)
    }, [])
    return (
        <div className="about-page">
            <h2>About Us</h2>
            <hr/>
            <p id="about-heading">Quality Teaching<br />
                Any Time, Everywhere</p>
            <p>
                The Entrepreneurship Network (TEN) is a community-based Edu-Tech group whose objective is to provide quality learning and expertise.<br/>
                Our current customer segment, at present, stands at 200 plus colleges and 10000 plus students, with new institutions coming in all the time.<br/>
                This organization would enable you to accelerate your aspirations by providing an opportunity to master the most desired skill-sets in today's market.<br/>
                With hands-on guidance provided by our richly experienced faculty, you would be having  the best possible training at your disposal.</p>
        </div>
    )
}

export default About
