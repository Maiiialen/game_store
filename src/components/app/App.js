// import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../home/Home"
import Store from "../store/Store"
import Details from "../details/Details"
import Cart from "../cart/Cart"
import Navbar from "../navbar/Navbar"
import './App.scss';

function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/store" element={<Store />} />
                    <Route path="/store/:id" element={<Details />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
