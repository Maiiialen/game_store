import ListObject from "../listObject/ListObject";
import useStore from "../../store/Store";
import './Cart.scss';

function Cart() {
    const cart = useStore((state) => state.cart)
    let sum = cart.reduce((accumulator, currentValue) => accumulator + (currentValue.number * currentValue.game.price), 0)
    console.log(sum)

    return (
        <div className="cart-page">
            <div className="cart">
                <div className="name">Shopping Cart</div>
                <div className="list">
                    {cart.map((product, id) => <ListObject key={id} id={id} product={product} />)}
                </div>
                <div className="line"></div>
                <div className="total">
                    <div className="name">Total</div>
                    <div className="name">€{sum}</div>
                </div>
                {cart.length === 0 ? <div className="name">Your cart is empty! Let's change it!</div> : ""}
            </div>
        </div>
    );
}

export default Cart;
