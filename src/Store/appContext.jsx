import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const RestoContext = createContext(null);

const RestoProvider = ({children}) => {
    const[IngreList, setIngreList] = useState([])
    const[IngreUser, setIngreUser] = useState([])
    const[Suma, setSuma] = useState(0)
    const [Burgers,setBurgers] = useState([])  
    
    //pedido de la apy
      const getBurgers = async (tipo) =>{
        const results = await axios.get(`https://apipdtc.herokuapp.com/bulldog/${tipo}`)
        // console.log(results.data)
        setBurgers(results.data)
    }
    
    
    
    //pedido de la apy
    const getIngre = async () =>{
        const results = await axios.get("https://apipdtc.herokuapp.com/bulldog/ingredientes")
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

    //useefect que ejecuta la suma cada vez que el usuario suma un elemento (x eso depende de IngreUser)
    useEffect(()=>{
        sumarIngre()
    },[IngreUser])
    
    return (
        <RestoContext.Provider value={{IngreList, setIngreList, IngreUser, setIngreUser, 
        Suma, setSuma, getIngre, obtenerIngre, borrarElemento, sumarIngre,getBurgers,Burgers}}>
            {children}
        </RestoContext.Provider>


      );
}
 
export default RestoProvider;