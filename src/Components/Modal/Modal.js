import React from 'react'
import { useGlobalContext } from '../../Context'
import './style.css'
import './media-query.css'
const Modal = (props) => {
    const { addToCart,setSidebarOpen } = useGlobalContext()

    return (
        <div className="modal">
            <div className="modal-data">
                <img src={props.image} />
                <div><p>{props.name}</p><p className="modal-price"> ₹{props.price}.00</p>
                    <button onClick={() => { addToCart({ name: props.name, price: props.price });setSidebarOpen(true);props.closeModal() }}>Add to cart </button></div>
                <div className="close-modal" onClick={props.closeModal}>x</div>
            </div>
        </div>
    )
}

export default Modal
