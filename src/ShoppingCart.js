import { Link } from "react-router-dom";
import Button from "./Button";
import './styles/ShoppingCart.css';

function ShoppingCart(props) {
    const removeItemFromCart = (event) => {
        let index = event.target.value;
        let newCart = [...props.cartItems];
        if (newCart[index]["quantity"] === 1) {
            newCart.splice(index, 1);
        } else {
            newCart[index] = {
                product: newCart[index]["product"],
                quantity: props.cartItems[index]["quantity"] - 1,
            }
        }
        props.setCartItems(newCart);
    }

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
                    return <ol key={key}>Product Name: {item["product"]} || Quantity: {item["quantity"]} <button onClick={removeItemFromCart} value={key}>-</button></ol>
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