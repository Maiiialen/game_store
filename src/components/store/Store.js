// import { useState } from 'react';
import useStore from "../../store/Store";
import ProductBox from '../productBox/ProductBox';
import './Store.scss';

function Store() {
    const games = useStore((state) => state.games)

    return (
        <div className="page">
            <div className="storeGrid">
                {games.map((game, id) => <ProductBox key={id} id={id} image={<img src={require(`../imgs/${game.image}`)} alt={game.name} />} game={game} /> )}

            </div>
        </div>
    );
}

export default Store;
