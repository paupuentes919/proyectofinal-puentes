import CartWidget from './CartWidget'

const NavBar = () => {
    return(
        <div>
            <nav className="PackMan-NavBar">
                <div className="order-items-NavBar">
                    <div className="navbar-items">
                        <h3 className='title-navbar'>PacFoodie Company</h3>
                        <img className="PackMan-Photo" src={require('../components/pacman.png')} />
                        <button>
                            <h5 className='title-navbar-2'>Home</h5>
                        </button>
                        <button>
                            <h5 className='title-navbar-2'>Menu</h5>
                        </button>
                        <button>
                            <h5 className='title-navbar-2'>Nosotros</h5>
                        </button>
                        <button>
                            <h5 className='title-navbar-2'>Contacto</h5>
                        </button>
                    </div>
                    <CartWidget/>
                </div>
            </nav>  
        </div>
    )
}
export default NavBar