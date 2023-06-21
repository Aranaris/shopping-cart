import { Link } from "react-router-dom";
import Button from "./Button";
import './styles/ShoppingCart.css';

function ShoppingCart() {
    return (
      <div className="ShoppingCart">
        Cart Placeholder
        <footer>
            <Button as={Link} to="/" text="Return to Home">
            </Button>
        </footer>
      </div>
    );
  }
  
  export default ShoppingCart;