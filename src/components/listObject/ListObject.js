import useStore from "../../store/Store";
import { shallow } from 'zustand/shallow'
import './ListObject.scss';


function ListObject({ id, product }) {
    const { number, removeFromCart, increaseNumber, decreaseNumber } = useStore((state) => ({
        number: state.cart[state.cart.findIndex((prod) => prod.game === product.game)].number,
        removeFromCart: state.removeFromCart,
        increaseNumber: state.increaseNumber,
        decreaseNumber: state.decreaseNumber
    }),
        shallow
    )

    function handlePlus() {
        increaseNumber(product.game)
        console.log(number)
    }

    function handleMinus() {
        console.log(number)
        decreaseNumber(product.game)
    }

    function handleRemove(){
        console.log(number)
        removeFromCart(product.game)
    }


    return (
        <div key={id} className="listObjectBox">
            <div className="box">
                <img className="productImage" src={require(`../imgs/${product.game.image}`)} alt={product.game.name} />
                <div className="detail">
                    <div>{product.game.name}</div>
                    <div className="amount">
                        {/* <img src={require("../imgs/minus.png")} alt="minus" onClick={() => product.number > 1 ? console.log("handleMinus") : console.log("handleRemove")} /> */}
                        <img src={require("../imgs/minus.png")} alt="minus" onClick={() => product.number > 1 ? handleMinus() : handleRemove()} />
                        <div className="value">{number}</div>
                        <img src={require("../imgs/plus.png")} alt="plus" onClick={handlePlus} />
                    </div>
                    <div className="value">€{product.game.price} each</div>
                </div>
            </div>
        </div>
    );
}

export default ListObject;
