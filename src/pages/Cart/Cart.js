import React, { useState } from 'react'
import { useGlobalContext } from '../../Context'
import { FaLock,FaRegStickyNote } from 'react-icons/fa'
import {AiOutlineTag} from 'react-icons/ai'
import './style.css'
import './media-query.css'
import SSL from '../../images/SSL.webp'
const Cart = () => {
    const { Data, removeFromCart, incCart, decCart, subtotal } = useGlobalContext()
    React.useEffect(() => {
        window.scroll(0,0)
    }, [])
    return (
        <div className="cart-page">
            <div>
                <h3 className="cart-page-headings">My Cart</h3>
                <hr id="first-hr"/>
                <div className="sidebar-items">
                {Data.map((item) => {
                    if (item.qty > 0) {
                        return (<><div className="cart-page-item">
                            <img src={item.image} />
                            <div className="cartpage-item-name">{item.name}</div>
                            <div className="cart-item-btns">
                                <button onClick={() => { decCart({ name: item.name, price: item.price }) }}>-</button>
                                {item.qty}
                                <button onClick={() => { incCart({ name: item.name, price: item.price }) }}>+</button>
                            </div>
                            <div className="cartpage-item-price">₹{item.price * item.qty}.00</div>
                            <div className="remove-item-cart" onClick={() => { removeFromCart({ name: item.name, price: item.price }) }}>x</div>

                        </div><hr /></>)
                    }
                })}
                </div>
                <div className="code"> <AiOutlineTag/> Enter a promo code</div>
                <div className="code"><FaRegStickyNote/> Add a note</div>
                <img src={SSL} id="ssl"/>
            </div>
            <div className="orders-summary">
                <h3 className="cart-page-headings">Order Summary</h3>
                <hr />
                <div className="totals"><p>Subtotal</p><p>₹{subtotal}.00</p></div>
                <div className="totals"><p>Taxes</p><p>₹{(subtotal / 5.55).toFixed(2)}</p></div>
                <hr />
                <div className="totals"><p>Total</p><p>₹{(subtotal + subtotal / 5.55).toFixed(2)}</p></div>
                <p>No Refunds Are Issued</p>
                <button><FaLock /> Checkout</button>
            </div>

        </div>
    )
}

export default Cart
