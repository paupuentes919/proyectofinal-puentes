import CartWidget from './CartWidget'
import pacman from '../images/pacman.png'
import fantasmitas from '../images/fantasmitas.png'

const NavBar = () => {
    return(
        <div className="navbar bg-base-100 navbar-background">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Menu</a></li>
                        <li><a>Sucursales</a></li>
                        <li><a>Contacto</a></li>
                    </ul>
                </div>
                <a className="packman-navbar">PacFoodie Company</a>
                <img className="packman-photo hidden lg:flex" src={pacman}/>
                <img className="ghosts-photo hidden lg:flex" src={fantasmitas}/>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 packman-navbar-2">
                    <li><a>Menu</a></li>
                    <li><a>Sucursales</a></li>
                    <li><a>Contacto</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <CartWidget/>
            </div>
        </div>
    )
}
export default NavBar