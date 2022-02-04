import './Cardpremium.css'

const Cardpremium = ({id,nombre,ingredientes,precio,imagen}) => {
    return ( 
        <div className="card col-sm-12 col-md-4 mt-2 shadow border-0 carta me-2">
            <img src={require(`../assets/img/premium/${imagen}.png`)} className="card-img-top" alt="imagenpremium"/>
            <div className="card-img-overlay">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text">Last updated 3 mins ago</p>
            </div>
        </div>
     );
}
 
export default Cardpremium;