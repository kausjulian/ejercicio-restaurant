import { useEffect, useState } from 'react/cjs/react.development'
import './Buscadas.css'
import axios from 'axios'
import Card from '../Card'

const Buscadas = () => {
    const [buscadas , setBuscadas ] = useState([])
    
    //pedido de la apy
    const getBuscadas = async () =>{
        const results = await axios.get("https://apipdtc.herokuapp.com/bulldog/buscadas")
        console.log(results.data)
        setBuscadas(results.data)
    }
    

    useEffect(()=> {
        getBuscadas()
    },[])
    
    return ( 
        <div className='container-fluid buscadasBody' id='buscadas'>
            <div className='row justify-content-center pt-3'>
                <h2 className='text-center mt-3 p-3 pb-4'>Buscadas</h2>
                    {buscadas.length > 0 ?
                    buscadas.map((buscada) =>(
                        <Card key = {buscada.id} buscada={buscada} {...buscada}>

                        </Card>
                    ))
                    :
                    <h4 className='text-center mt-3 p-3'>Cargando</h4>}
            </div>
        </div>
            );
        }
 
export default Buscadas;
