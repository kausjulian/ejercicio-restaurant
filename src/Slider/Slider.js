import "./Slider.css"

const Slider = () => {
    return ( 
        <div className="container-fluid">
            <div className="row slider">
                <div className="col-6">
                <img src={require(`../assets/img/hamburguesaPortada.png`)}alt="Foto Principal" width="300" height="300" className="d-inline-block align-text-top"/>
                </div>
                <div className="col-6">
                    <h1 className="text-light">Bulldog Restaurant</h1>
                    <h5 className="text-warning">Veni a probar las mejores hamburguesas</h5>
                </div>
            </div>
       
        </div>
    
     );
}
 
export default Slider;