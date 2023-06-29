import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Shop from "./Shop";
import { Link } from "react-router-dom";
import Button from "./Button";
import Checkout from "./Checkout";

const RouteSwitch = () => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <nav>
                <Button as={Link} to="/" text="Home"></Button>
                <Button as={Link} to="/shop" text="Shop"></Button>
            </nav>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/checkout" element={<Checkout />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;
