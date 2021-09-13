import React, { useEffect, useState } from 'react'
import './style.css'
import logo from '../.././images/logo.webp'
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineShoppingCart, AiOutlineSearch } from 'react-icons/ai'
import { Link,useHistory ,useLocation} from 'react-router-dom';
import './media-queries.css'
const Header = () => {
    const [headerOpen, setHeaderOpen] = useState(false)
    const history=useHistory()
    const [search, setSearch] = useState('')
    // const currentLocation = useLocation();
    // useEffect(() => {
    //     if (currentLocation=='/') {
    //         console.log('home page');
    //     }
    //     else if (currentLocation=='/courses') {
    //         console.log('courses page');
    //     }
    //     if (currentLocation=='/') {
    //         console.log('home page');
    //     }
    // }, [currentLocation])
    const dropdown=['Blog','Certification','Alumni Team','Forum','Hackathon','Membership Registration']
    return (
        <header>
            <div className="header-upper-half">
                <div className="title" onClick={()=>{history.push('/')}}>
                    <div>
                        <span className="title-black">T</span>
                        <span className="title-red">he</span>
                    </div>
                    <div>
                        <span className="title-black">E</span>
                        <span className="title-red">ntrepreneurship</span>
                    </div>
                    <div>
                        <span className="title-black">N</span>
                        <span className="title-red">etwork</span>
                    </div>
                </div>
                <div className="btns-and-search">
                    <div className="cart-and-login">
                        <div className="cart-btn" onClick={()=>{history.push('/cart-page')}}>
                            <AiOutlineShoppingCart className="cart-icon" />
                        </div>
                        <div className="login-btn">
                            <FaUserCircle className="user-icon" />
                            <span>Log In</span>

                        </div>
                    </div>
                    <div className="search-bar">
                        <input placeholder="Search here..." value={search} onChange={(e) => { setSearch(e.target.value) }} />
                        {search.length>0&&<button className="clear-search" onClick={() => { setSearch('') }}>x</button>}
                        <AiOutlineSearch className="search-icon" />
                    </div>
                </div>
            </div>
            <div className="header-lower-half">
                <div className="logo-div">
                <img src={logo} alt="Logo" className="logo" />
                </div>
                <Link to="/" id="active-link">Home</Link>
                <span className="divider">|</span>
                <Link to="/courses">Online Courses</Link>
                <span className="divider">|</span>
                <Link to="/hiring">We're Hiring </Link>
                <span className="divider">|</span>
                <div className="more-dropdown">More <div className="dropdowns">{dropdown.map((item)=>{return(<div><Link to={`/${item.replace(/\s+/g, '-')}`}>{item}<hr/></Link></div>)})} </div></div>
            </div>
            <div className="header-lower-half-media">
                <div className="logo-div">
                <img src={logo} alt="Logo" className="logo" />
                </div>
                <Link to="/" id="active-link">Home</Link>
                <span className="divider">|</span>
                <Link to="/courses">Online Courses</Link>
                <span className="divider">|</span>
                <Link to="/hiring">We're Hiring </Link>
                <span className="divider">|</span>
                <div className="more-dropdown">More <div className="dropdowns">{dropdown.map((item)=>{return(<div><Link to={`/${item.replace(/\s+/g, '-')}`}>{item}<hr/></Link></div>)})} </div></div>
            </div>
        </header>

    )
}

export default Header
