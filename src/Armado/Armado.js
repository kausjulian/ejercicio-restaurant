import './Armado.css'
import { useEffect, useState } from "react"
import axios from "axios"

const Armado = () => {
    const[IngreList, setIngreList] = useState([])
    const[IngreUser, setIngreUser] = useState([])
    const[Suma, setSuma] = useState(0)
    //pedido de la apy
    const getIngre = async () =>{
        const results = await axios.get("https://apipdtc.herokuapp.com/bulldog/ingredientes")
        console.log(results.data)
        setIngreList(results.data)
    }
    //obtengo ingredientes que seleciono usuario
    const obtenerIngre = (ingre)=>{
        setIngreUser([ ...IngreUser,ingre])
    }
// funcion para borrar cada elemento individual
const borrarElemento = id =>{
    setIngreUser(IngreUser.filter(ingre=>ingre.id!==id))
}
//funcion para sumar precios
    const sumarIngre = () =>{
        let suma = 350
        IngreUser.map((ingre)=> setSuma(suma+=ingre.precio))
    }

   //renderizado apy //renderizado ingredientes de usuario
     useEffect(()=>{
        getIngre()
        setIngreUser([])
    },[])


    useEffect(()=>{
        sumarIngre()
    },[IngreUser])

    
    return ( 
        <div className='armado'>
        <h4 className='text-center'>Armá la tuya!</h4>
        <div className="w-50">
            {IngreList.map((ingre)=> (
                <button className="btn btn-outline-warning bg-dark me-2" key={ingre.id} onClick={()=>obtenerIngre({...ingre})} disabled={IngreUser.find(item=> item.id===ingre.id)}>
                <img src={require(`../assets/img/ingredientes/${ingre.imagen}.png`)} width={50}/>
                    {ingre.nombre}
                    {ingre.precio}
                </button>
            
            ))}
        </div>
        {IngreUser.length > 0 ?
                <>
                        <button className="btn btn-outline-warning bg-dark me-2">
                        <img src={require(`../assets/img/ingredientes/Carne.png`)} width={50}/>
                            Carne
                            350
                            
                        </button>
                    <div className="w-50">
                        {IngreUser.map((ingre)=> (
                            <button className="btn btn-outline-warning bg-dark me-2"key={ingre.id}>
                            <img src={require(`../assets/img/ingredientes/${ingre.imagen}.png`)} width={50}/>
                                {ingre.nombre}
                                {ingre.precio}
                                <span className="ms-1" onClick={()=>borrarElemento(ingre.id)}>Borrar</span>
                            </button>
                        ))}
                    {Suma}
                
                </div>
                </>
            :
            <h4>No hay nada seleccionado</h4>
        }

        </div>
        );
}
 
export default Armado;

// disabled={reservas.find(reserva=>reserva.nombre ===cancha.nombre && reserva.hora.id===hora.id) ? true :false}