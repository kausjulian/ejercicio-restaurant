import './Card.css'

const Card = ({id,nombre,ingredientes,precio,imagen}) => {
    
    return (
        <div className="card col-12 col-xs-12  col-md-4 col-lg-2 shadow border-0 ms-2 me-2 mt-2 mb-4 carta">
            <img src={require(`../assets/img/buscadas/${imagen}.png`)} className="card-img-top pt-3 imagencarta" id="cardimg" alt="cancha"/>
            <div className="card-body">
                <h5 className="card-title text-warning">{nombre}</h5>
                <p className="card-text text-warning">{ingredientes[0]},<br></br>{ingredientes[1]},<br></br>{ingredientes[2]}</p>
                <p className='text-warning'>${precio}</p>
                <button className="btn btn-warning mb-3">Comprar</button>
            </div>
        </div>
      );
}
 
export default Card;
    
