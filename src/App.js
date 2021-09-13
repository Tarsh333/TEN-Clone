import React from 'react'
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import Home from './pages/Home/Home'
import Header from './Components/Header/Header'
import Hiring from './pages/Hiring/Hiring'
import Footer from './Components/Footer/Footer'
import About from './pages/About/About'
import Page from './pages/Other Pages/Page'
import Courses from './pages/Courses/Courses'
import Contact from './pages/Contact/Contact'
import Cart from './pages/Cart/Cart'
import Product from './pages/Product Page/Product'
import Sidebar from './Components/Sidebar.js/Sidebar'
const App = () => {
    return (
        <Router>
            <Header/>
            <Switch>
                <Route exact path="/"><Home/></Route>
                <Route exact path="/hiring"><Hiring/></Route>
                <Route exact path="/about"><About/></Route>
                <Route exact path="/courses"><Courses/></Route>
                <Route exact path="/contact"><Contact/></Route>
                <Route exact path="/cart-page"><Cart/></Route>
                <Route exact path="/product/:page" children={<Product />}></Route>
                <Route exact path="/:page" children={<Page />}></Route>
            </Switch>
            <Sidebar/>
            <Footer/>
        </Router>
    )
}

export default App

