import './Navbar.css'

const Navbar = () => {
    return ( 
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-black shadow navstyle">
            <div className="container-fluid">
            <img src={require(`../assets/img/logoFav.png`)}alt="logo" width="30" height="24" className="d-inline-block align-text-top justify-content-end"/>
                <a className="navbar-brand  text-light ms-2" href="#">Bulldog</a>
                        <button className="navbar-toggler botonmenu" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-light" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Nuestros productos
                            </a>
                            <ul className="dropdown-menu menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a className="dropdown-item" href="#buscadas">Las más buscadas</a></li>
                                    <li><a className="dropdown-item" href="#premium">Premium</a></li>
                                    <li><a className="dropdown-item" href="#armado">Armá la tuya</a></li>
                            </ul>
                        </li>
                </ul>
                </div>
            </div>
        </nav>
        </>
     );
}
 
export default Navbar;


{/* <nav className="navbar navbar-light navstyle">
<div className="container-fluid d-flex">
    <div className='row d-flex'>
        <div className='col-8'>
            <a className="navbar-brand  ms-1 text-light" href="#">
            <img src={require(`../assets/img/logoFav.png`)}alt="logo" width="30" height="24" className="d-inline-block align-text-top justify-content-end"/>
            Bulldog
            </a>
    </div>
        <div className='col-4'>
            <img src={require(`../assets/img/instagramNavbar.png`)}alt="logo" width="30" height="24" className="d-inline-block align-text-top justify-content-end"/>
            <img src={require(`../assets/img/facebookNavbar.png`)}alt="logo" width="30" height="24" className="d-inline-block align-text-top justify-content-end"/>
         </div>

    </div>
</div>
</nav> */}