import { useState } from "react";
import { useLocation } from "react-router-dom";
import useStore from "../../store/Store";
import './Details.scss';


function Details() {
    let state = useLocation();
    let [amount, setAmount] = useState(1)
    let {games, addToCart} = useStore((state) => ({games: state.games, addToCart: state.addToCart}))
    let product = games[games.findIndex(i => i.name === state.state.name)]

    function handleAdd(e){
        addToCart(product, amount)
        e.target.textContent = "Added co cart!"
        setTimeout(()=>e.target.textContent = "Add to cart", 1000)
        
    }

    return (
        <div className="details">
            <div className="info">
                <div>{state.state.name}</div>
                <img src={require(`../imgs/${state.state.image}`)} alt={state.state.name} />
            </div>
            <div className="buy">
                <div>Add to cart:</div>
                <div className="amount">
                    <img className={amount<2 ? "disabled" : ""} src={require("../imgs/minus.png")} alt="minus" onClick={() => setAmount(amount>1 ? amount-1 : 1)} />
                    <div className="value">{amount}</div>
                    <img src={require("../imgs/plus.png")} alt="plus" onClick={() => {setAmount(amount+1)}} />
                </div>
                <button id="buttonToCart" className="toCart" onClick={handleAdd}>Add to cart</button>
            </div>
        </div>
    );
}

export default Details;
