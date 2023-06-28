import "./styles/Product.css";

function Product(props) {
    const addItemToCart = (event) => {
        let selectedItem = event.target.value;
        for (let i = 0; i < props.cartItems.length; i++) {
            if (props.cartItems[i]["product"] === selectedItem) {
                let newCart = [...props.cartItems];
                newCart[i] = {
                    product: selectedItem,
                    quantity: props.cartItems[i]["quantity"] + 1,
                }
                props.setCartItems(newCart);
                return;
            }
        }
        props.setCartItems(cartItems => [...cartItems, {product: event.target.value, quantity: 1}]);
    }

    return (
        <div className="Product">
            <div className="product-image">{props.productName} Placeholder</div>
            <button className="add-button" value={props.productName} onClick={addItemToCart}>Add to Cart</button>
        </div>
    )
}

export default Product;