import ShoppingCart from "./ShoppingCart";
import ProductDisplay from "./ProductDisplay";
import "./styles/Shop.css";
import { useState } from "react";

function Shop() {
    const [cartItems, setCartItems] = useState([]);

    return (
        <div className="Shop">
            <div className="page-header">
                Shopping Page Placeholder
            </div>
            <ProductDisplay cartItems={cartItems} setCartItems={setCartItems} />
            <ShoppingCart cartItems={cartItems} setCartItems={setCartItems} />
        </div>
    )
}

export default Shop;