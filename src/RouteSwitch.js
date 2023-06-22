import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ShoppingCart from "./ShoppingCart";
import { Link } from "react-router-dom";
import Button from "./Button";
import Checkout from "./Checkout";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <nav>
                <Button as={Link} to="/" text="Home"></Button>
                <Button as={Link} to="/shopping-cart" text="Shopping Cart"></Button>
            </nav>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/shopping-cart" element={<ShoppingCart />} />
                <Route path="/checkout" element={<Checkout />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;