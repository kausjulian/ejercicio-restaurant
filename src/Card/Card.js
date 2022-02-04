import './Card.css'

const Card = ({id,nombre,ingredientes,precio,imagen}) => {
    return (
        <div className="card  col-sm-12 col-md-4 mt-2  shadow border-0 ms-2 me-2 mb-4 carta">
            <img src={require(`../assets/img/buscadas/${imagen}.png`)} className="card-img-top pt-3 imagencarta" id="cardimg" alt="cancha"/>
            <div className="card-body">
                <h5 className="card-title">{nombre}</h5>
                <p className="card-text pt-3 pb-2">{ingredientes}</p>
                <p>{precio}</p>
                <button className="btn btn-warning">Comprar</button>
            </div>
        </div>
      );
}
 
export default Card;
    
