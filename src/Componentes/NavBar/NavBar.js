import CartWidget from "../CartWigdet/CartWidget";
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
    return (
        <nav>
            <h3>Consolas Retro</h3>
            <div>
                <button className = 'btn btn-primary'>Consolas</button>
                <button className = 'btn btn-primary'>Juegos</button>
                <button className = 'btn btn-primary'>Accesorios</button>
            </div>
            <CartWidget />
        </nav>
    )
    }

export default NavBar;