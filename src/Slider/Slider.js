import "./Slider.css"

const Slider = () => {
    return ( 
        <div className="container-fluid">
            <div className="row slider pt-5">
                <div className="col-7">
                <img src={require(`../assets/img/hamburguesaPortada.png`)}alt="Foto Principal" width="650" height="350" className="d-inline-block align-text-top mt-3"/>
                </div>
                <div className="col-5">
                    <h1 className="text-light mt-5 p-4">Bulldog Restaurant</h1>
                    <h5 className="text-warning p-4">Veni a probar las mejores hamburguesas</h5>
                </div>
            </div>
       
        </div>
    
     );
}
 
export default Slider;