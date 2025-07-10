import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Collection from './pages/collection'
import Product from './pages/product'
import About from './pages/About'
import Contact from './pages/contact'
import Cart from './pages/cart'
import PlaceOrder from './pages/placeorder' 
import Login from './pages/login'
import Order from './pages/Order'
import NavBar from './components/navBar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer/>
      <NavBar/>
      <SearchBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/collection' element={<Collection/>}/>
        <Route path='/product/:productId' element={<Product/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/place-order' element={<PlaceOrder/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/orders' element={<Order/>}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App