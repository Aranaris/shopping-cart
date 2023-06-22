import { Link } from "react-router-dom";
import Button from "./Button";
import "./styles/Checkout.css";

function Checkout() {
    return (
        <div className="Checkout">
            <div className="page-header">
                Checkout
            </div>
            <Button as={Link} to="/shopping-cart" text="Return to Cart">
            </Button>
            <footer>
                <Button as={Link} to="/" text="Return to Home">
                </Button>
            </footer>
        </div>
    )
}

export default Checkout;