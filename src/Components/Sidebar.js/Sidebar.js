import React, { useState } from 'react'
import './style.css'
import { useGlobalContext } from '../../Context'
import { Link } from 'react-router-dom'
const Sidebar = () => {
    const { Data, incCart, decCart, subtotal, sidebarOpen, setSidebarOpen } = useGlobalContext()
    return (
        <div className="sidebar" id={sidebarOpen&&'sidebar-open'}>
            <div className="sidebar-top">
                <button onClick={()=>{setSidebarOpen(false)}}>{'>'}</button>
                <h1>Cart</h1>
            </div>
            <div className="sidebar-items">
            {Data.map((item) => {
                if (item.qty > 0) {
                    return (<><div className="sidebar-item">
                        <img src={item.image} />
                        <div>
                        <div className="sidebar-item-name">{item.name}</div>
                        <div className="sidebar-item-price">₹{item.price * item.qty}.00</div>
                        <div className="sidebar-cart-item-btns">
                            <button onClick={() => { decCart({ name: item.name, price: item.price }) }}>-</button>
                            {item.qty}
                            <button onClick={() => { incCart({ name: item.name, price: item.price }) }}>+</button>
                        </div>
                        </div>
                    </div><hr /></>)
                }
            })}
            </div>
            <div className="sidebar-subtotal">Subtotal <br/>₹{subtotal}.00</div>
            <hr/>
            <Link to="/cart-page">View Cart</Link>
        </div>
    )
}

export default Sidebar
