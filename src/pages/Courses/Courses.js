import React, { useEffect, useState } from 'react'
import './style.css'
import { useGlobalContext } from '../../Context'
import { HiDownload } from 'react-icons/hi'
import Modal from '../../Components/Modal/Modal'
import { Link, useHistory } from 'react-router-dom'
import './media-query.css'
const Courses = () => {
    const [minPrice, setMinPrice] = useState(199)
    const [maxPrice, setMaxPrice] = useState(7244)
    const [open, setOpen] = useState(true)
    React.useEffect(() => {
        window.scroll(0, 0)
    }, [])
    const [props, setProps] = useState()
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const { Data } = useGlobalContext()
    const closeModal = () => {
        setModalIsOpen(false)
    }
    const quickView = (a, b, c) => {
        setProps({ price: a, name: b, image: c })
    }
    const history = useHistory()
    return (
        <div className="course-page">
            <div className="courses-filter">
                <h2>Filter By</h2>
                <hr />
                <span className="price-btn"> Price <button onClick={() => { setOpen((prev) => !prev) }}>{open ? '-' : '+'}</button></span>
                <div className={open ? "ranges" : "height-0"} id="ranges">
                    <span>Min Price<br /><input type="range" min="199" max={maxPrice} value={minPrice} onChange={(e) => { setMinPrice(e.target.value) }} className="slider" /> ₹{minPrice}.00</span>
                    <span>Max Price<br /><input type="range" min={minPrice} max="7244" className="slider" value={maxPrice} onChange={(e) => { setMaxPrice(e.target.value) }} /> ₹{maxPrice}.00</span>
                </div>
                <hr />
            </div>
            <div className="courses-courses">
                <div className="sort-courses">
                    <select>
                        <option value="Sort By">Sort By</option>
                        <option value="newest">Newest</option>
                        <option value="lth">Price (low to high)</option>
                        <option value="htl">Price (high to low)</option>
                        <option value="htl">Name A - Z</option>
                        <option value="htl">Name Z - A</option>
                    </select>
                </div>
                <div className="course-list">
                    {Data.map((item) => {
                        return (
                            <div className="courses-single-item">
                                <img onClick={() => { history.push(`/product/${item.name.replace(/\s+/g, '')}-${item.sno}`) }} src={item.image} height="180px" width="300px" />
                                <div onClick={() => { history.push(`/product/${item.name.replace(/\s+/g, '')}-${item.sno}`) }}>{item.name}
                                    <br />
                                    <span onClick={() => { history.push(`/product/${item.name.replace(/\s+/g, '')}-${item.sno}`) }} className="item-price">
                                        ₹{item.price}</span>
                                    <span onClick={() => { history.push(`/product/${item.name.replace(/\s+/g, '')}-${item.sno}`) }} className="download-icon">
                                        <HiDownload />
                                    </span>
                                </div>
                                <div id="quick-view" onClick={() => { quickView(item.price, item.name, item.image); setModalIsOpen((prev) => !prev) }}>
                                    Quick View
                                </div>
                            </div>)
                    })}
                    {modalIsOpen && <Modal {...props} closeModal={closeModal} />}
                </div>
            </div>
        </div >
    )
}

export default Courses
