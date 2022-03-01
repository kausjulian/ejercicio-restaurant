import "./Slider.css"
import 'animate.css';

const Slider = () => {
    return ( 
        <div className="container-fluid">
            <div className="row slider pt-5">
                <div className="col-sm-12 col-md-7 pe-4">
                <img src={require(`../assets/img/hamburguesaPortada.png`)}alt="Foto Principal" className="d-inline-block align-text-top mt-3 image animate__animated animate__fadeIn"/>
                </div>
                <div className="col-md-5 d-none d-md-block titulos">
                    <h1 className="text-light mt-5 p-4 animate__animated animate__bounce ">Bulldog Restaurant</h1>
                    <h5 className="text-warning p-4 animate__animated animate__bounce ">Veni a probar las mejores hamburguesas</h5>
                </div>
            </div>
       
        </div>
    
     );
}
 
export default Slider;


// width="650" height="350" 