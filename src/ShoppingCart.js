import { Link } from "react-router-dom";
import Button from "./Button";
import './styles/ShoppingCart.css';
import { useState } from "react";

function ShoppingCart() {
    const [items, setItems] = useState([]);

    const addItemToCart = (event) => {
        setItems(items => [...items, event.target.value]);
    }

    return (
      <div className="ShoppingCart">
        <div className="page-header">
            Cart Placeholder
        </div>
        <div className="cart-info">
            <div className="item-count">
                Total Items in Cart: {items.length}
            </div>
            <button onClick={addItemToCart} value={"test"}>+</button>
            <Button as={Link} to="/checkout" text="Go to Checkout" />
        </div>
        <div className="cart-items">
            <li>
                {items.map((item, key) => {
                    return <ol key={key}>{key}: {item}</ol>
                })}
            </li>
        </div>
        <footer>
            <Button as={Link} to="/" text="Return to Home">
            </Button>
        </footer>
      </div>
    );
  }
  
  export default ShoppingCart;