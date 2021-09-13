import React from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../../Context'
import './style.css'
const Product = () => {
    React.useEffect(() => {
        window.scroll(0, 0)
    }, [])
    const { page } = (useParams())
    const { Data, addToCart, setSidebarOpen } = useGlobalContext()
    const details = Data.filter((item) => {
        if (item.name.replace(/\s+/g, '') === page.split('-')[0]) {
            return item
        }
    })[page.split('-')[1]]
    // console.log(details,page.split('-'));
    return (
        <div className="product-page">
            <div>
                <img src={details.image} />
                <div>
                    <h1>{page.split('-')[0].replaceAll('+', ' + ')}</h1>
                    <p>₹{details.price}.00</p>
                    <div className="job-overview">
                        <h2>Job Overview</h2>
                        The Entrepreneurship Network (TEN) is a community based Edu-Tech group whose objective is to provide quality learning<br />

                        and expertise. We are seeking to hire Audio Content Creators to join our team. If you're a passionate for your work, TEN Company is a great company for you. Don't hesitate to apply.This Internship is exclusively for the International applicants!!<br /><br />
                        Career Counselling: <br />

                        You will get an expert advice from an experienced person holding 10+ years of experienced in corporate industry and an alumni of IIT,Wharton and Delhi College Of Engineering.You will get 4-5 career counselling session in this program.
                    </div>
                    <button onClick={() => { addToCart({ name: details.name, price: details.price }); setSidebarOpen(true) }}>Add to cart </button>
                </div>
            </div>
        </div>
    )
}

export default Product
