import "./styles/Product.css";

function Product(props) {
    const addItemToCart = (event) => {
        let product = event.target.value;
        for (let i = 0; i < props.cartItems.length; i++) {
            if (props.cartItems[i]["product"] === product) {
                const newCart = [...props.cartItems];
                newCart[i] = {
                    product: product,
                    quantity: props.cartItems[i]["quantity"] + 1,
                }
                props.setCartItems(newCart);
                return;
            }
        }
        props.setCartItems(cartItems => [...cartItems, {product, quantity: 1}]);
    }

    return (
        <div className="Product">
            <div className="product-image">{props.productName} Placeholder</div>
            <button className="add-button" value={props.productName} onClick={addItemToCart}>Add to Cart</button>
        </div>
    )
}

export default Product;
