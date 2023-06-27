import "./styles/Product.css";

function Product(props) {
    const addItemToCart = (event) => {
        props.setCartItems(cartItems => [...cartItems, event.target.value]);
    }

    return (
        <div className="Product">
            <div className="product-image">{props.productName} Placeholder</div>
            <button className="add-button" value={props.productName} onClick={addItemToCart}>Add to Cart</button>
        </div>
    )
}

export default Product;