import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Shop from "./Shop";
import ShoppingCart from "./ShoppingCart";
import { Link } from "react-router-dom";
import Button from "./Button";
import Checkout from "./Checkout";

const RouteSwitch = () => {
    return (
        <HashRouter>
            <nav>
                <Button as={Link} to="/" text="Home"></Button>
                <Button as={Link} to="/shop" text="Shop"></Button>
            </nav>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/shopping-cart" element={<ShoppingCart />} />
                <Route path="/checkout" element={<Checkout />} />
            </Routes>
        </HashRouter>
    )
}

export default RouteSwitch;