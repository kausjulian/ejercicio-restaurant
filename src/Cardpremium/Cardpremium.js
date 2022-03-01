import './Cardpremium.css'

const Cardpremium = ({id,nombre,ingredientes,precio,imagen}) => {
    return ( 
     
     <div className='col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3   justify-content-evenly cartapremium'>
         <h5 className='text-center text-warning mt-5 '>{nombre}</h5>
         <p className='text-center text-light'>{ingredientes[0]},<br></br>{ingredientes[1]},<br></br>{ingredientes[2]},<br></br>{ingredientes[3]}</p>
          <img src={require(`../assets/img/premium/${imagen}.png`)} className="card-img-top imagen" alt="imagenpremium"/>
            
      </div>
       
      
     );
}
 
export default Cardpremium;

{/* <img src={require(`../assets/img/premium/${imagen}.png`)} className="card-img-top" alt="imagenpremium"/> */}