import './Navbar.css'

const Navbar = () => {
    return ( 
        <>
        <nav className="navbar navbar-light navstyle">
            <div className="container-fluid">
                <a className="navbar-brand  ms-1 text-light" href="#">
                <img src={require(`../assets/img/logoFav.png`)}alt="logo" width="30" height="24" className="d-inline-block align-text-top"/>
                Bulldog
                </a>
                <img src={require(`../assets/img/instagramNavbar.png`)}alt="logo" width="30" height="24" className="d-inline-block align-text-top"/>
                <img src={require(`../assets/img/facebookNavbar.png`)}alt="logo" width="30" height="24" className="d-inline-block align-text-top"/>
                
            </div>
        </nav>
        </>
     );
}
 
export default Navbar;
