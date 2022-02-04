import './Armado.css'
import { useContext, useEffect, useState } from "react"
// import axios from "axios"
import { RestoContext } from '../Store/appContext'

const Armado = () => {
const {IngreList, setIngreList, IngreUser, setIngreUser, 
    Suma, setSuma, getIngre, obtenerIngre, borrarElemento, sumarIngre} = useContext(RestoContext)

    return ( 
        <div className='row armado'>
        <h4 className='text-center' id='armado'>Armá la tuya!</h4>
        <div className="col-6 w-50">
            {IngreList.map((ingre)=> (
                <button className="btn btn-outline-warning bg-dark me-2 w-100 mb-2" key={ingre.id} onClick={()=>obtenerIngre({...ingre})} disabled={IngreUser.find(item=> item.id===ingre.id)}>
                <img src={require(`../assets/img/ingredientes/${ingre.imagen}.png`)} width={50}/>
                    {ingre.nombre}
                    {ingre.precio}
                </button>
            
            ))}
        </div>
        {IngreUser.length > 0 ?
                <div className='col-6'>
                        <button className="btn btn-outline-warning bg-dark me-2 w-100">
                        <img src={require(`../assets/img/ingredientes/Carne.png`)} width={50}/>
                            Carne
                            350
                            
                        </button>
                    <div className="w-50">
                        {IngreUser.map((ingre)=> (
                            <button className="btn btn-outline-warning bg-dark me-2 mb-2 w-100" key={ingre.id}>
                            <img src={require(`../assets/img/ingredientes/${ingre.imagen}.png`)} width={50}/>
                                {ingre.nombre}
                                {ingre.precio}
                                <span className="ms-1" onClick={()=>borrarElemento(ingre.id)}>Borrar</span>
                            </button>
                        ))}
                    {Suma}
                
                    </div>
                </div>
            :
           <div className='col-6 d-flex justify-content-center'>
                <h4>No hay nada seleccionado</h4>
           </div>
        }

        </div>
        );
}
 
export default Armado;

