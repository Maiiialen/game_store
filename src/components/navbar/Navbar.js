import './Navbar.scss';
import { Link } from "react-router-dom"


function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">LOGO</div>
            <div className="links">
                <Link to={"/"}>
                    <div>Home</div>
                </Link>
                <Link to="/store">
                    <div>Store</div>
                </Link>
                <Link to="/cart">
                    <div>Cart</div>
                </Link>
            </div>
        </div>
    );
}

export default Navbar;
