import { Link } from "react-router-dom";
import Button from "./Button";

function ShoppingCart() {
    return (
      <div className="ShoppingCart">
        Cart Placeholder
        <Button as={Link} to="/" text="Return to Home">
        </Button>
      </div>
    );
  }
  
  export default ShoppingCart;