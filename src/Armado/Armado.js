import './Armado.css'
import { useContext, useEffect, useState } from "react"
// import axios from "axios"
import { RestoContext } from '../Store/appContext'
// import DeleteIcon from '@mui/icons-material/Delete';

const Armado = () => {
const {IngreList, setIngreList, IngreUser, setIngreUser, 
    Suma, setSuma, getIngre, obtenerIngre, borrarElemento, sumarIngre} = useContext(RestoContext)

    return ( 
        <div className='row pt-5 armado d-flex  justify-content-center'>
        <h4 className='text-center mt-3 mb-5' id='armado'>Armá la tuya!</h4>
        <div className="col-6 w-50">
            {IngreList.map((ingre)=> (
                <button className="btn btn-outline-warning  me-2 d-flex align-items-center justify-content-evenly boton mb-2" key={ingre.id} onClick={()=>obtenerIngre({...ingre})} disabled={IngreUser.find(item=> item.id===ingre.id)}>
                <img src={require(`../assets/img/ingredientes/${ingre.imagen}.png`)} className='imgingre'/>
                    {ingre.nombre}
                   <span > ${ingre.precio}</span>
                </button>
            
            ))}
        </div>
        {IngreUser.length > 0 ?
                <>               <div className='col-6'>
                        <button className="btn btn-warning me-2  d-flex align-items-center justify-content-between boton mb-2">
                        <img src={require(`../assets/img/ingredientes/Carne.png`)} className='imgingre'/>
                            Carne
                           <span> $350</span>
                            
                        </button>
                    <div className="">
                        {IngreUser.map((ingre)=> (
                            <button className="btn btn-warning  me-2 d-flex align-items-center justify-content-between boton mb-2" key={ingre.id}>
                            <img src={require(`../assets/img/ingredientes/${ingre.imagen}.png`)} className='imgingre'/>
                               <span> {ingre.nombre}</span>
                                <span > ${ingre.precio}</span>
                                <i className="bi bi-trash2 tacho" onClick={()=>borrarElemento(ingre.id)}></i>
                            </button>
                        ))}
                    
                               
                    </div>
                    
                </div>
                <div className='mb-2 text-center'> Precio total ${Suma}</div>
                <button className='btn btn-warning botoncomprar ms-2'>Comprar</button>
                </>
 
            :
           <div className='col-6 d-flex justify-content-center'>
                <h4>Selecciona tus ingredientes!</h4>
           </div>
        }
        
        </div>
        );
}
 
export default Armado;

