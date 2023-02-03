import useStore from "../../store/Store";
import './Cart.scss';

function Cart() {
    const cart = useStore((state) => state.cart)

  return (
    <div className="page cart-page">
        <div className="cart">
            <div className="name">Shopping Cart</div>
            <div className="list">
                {cart.map(product => <div>{product.game.name}</div>)}
            </div>
            <div className="sum">Total</div>
            <div className="empty"></div>
        </div>
    </div>
  );
}

export default Cart;
