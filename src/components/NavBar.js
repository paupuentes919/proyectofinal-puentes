const NavBar = () => {
    return(
        <div>
            <nav className="PackMan-NavBar">
                <div className="navbar-items">
                    <h3>PacFoodie Company</h3>
                    <img className="PackMan-Photo" src={require('../components/pacman.png')} />
                </div>
            
            </nav>
            
        </div>
    )
}
export default NavBar