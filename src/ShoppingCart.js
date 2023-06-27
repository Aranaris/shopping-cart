import { Link } from "react-router-dom";
import Button from "./Button";
import './styles/ShoppingCart.css';

function ShoppingCart(props) {

    return (
      <div className="ShoppingCart">
        <div className="section-header">
            Cart Placeholder
        </div>
        <div className="cart-info">
            <div className="item-count">
                Total Items in Cart: {props.cartItems.length}
            </div>
            <Button as={Link} to="/checkout" text="Go to Checkout" />
        </div>
        <div className="cart-items">
            <li>
                {props.cartItems.map((item, key) => {
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