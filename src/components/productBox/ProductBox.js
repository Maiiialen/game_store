import { Link } from "react-router-dom"
import './ProductBox.scss';


function ProductBox({ id, image, game }) {

    return (
        <Link to={`${id}`} state={{ name: game.name, image: game.image }} key={id} className="box">
            {image}
            <div className="detail">
                <div>{game.name}</div>
                <div className="price">€{game.price}</div>
            </div>
        </Link>
    );
}

export default ProductBox;
