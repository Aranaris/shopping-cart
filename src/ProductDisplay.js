import { useState } from "react";
import Product from "./Product";
import "./styles/ProductDisplay.css";

function ProductDisplay(props) {
    const [productList, setProductList] = useState([]);

    const generateProducts = () => {
        let products = [];
        for (let i = 0; i < 10; i++) {
            products.push(`Product ${i}`);
        }
        setProductList(products);
    }

    return (
        <div className="ProductDisplay">
            <div className="section-header">
                Product Display Placeholder
            </div>
            <button onClick={generateProducts}>Generate Products</button>
            <div className="product-container">
                {productList.map((product, key)=> {
                    return <Product productName={product} key={key} cartItems={props.cartItems} setCartItems={props.setCartItems} />
                })}
            </div>
            
        </div>
    )
}

export default ProductDisplay;