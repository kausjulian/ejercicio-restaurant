import { useEffect, useState } from 'react'
import './Buscadas.css'
import Card from '../Card'
import { useContext } from 'react'
import { RestoContext } from '../Store/appContext'

const Buscadas = () => {
    
    const {Burgers,setBurgers,getBurgers} = useContext(RestoContext)

     useEffect(()=> {
        getBurgers('buscadas')
    },[])
    
    return ( 
        <div className='container-fluid  buscadasBody' id='buscadas'>
            <div className='row d-flex justify-content-between ms-5 me-5 pt-3'>
                <h2 className='text-center mt-3 p-3 pb-4'>Buscadas</h2>
                    {Burgers.length > 0 ?
                    Burgers.map((burger) =>(
                        <Card key = {burger.id} {...burger}>

                        </Card>
                    ))
                    :
                    <h4 className='text-center mt-3 p-3'>Cargando</h4>}
            </div>
        </div>
            );
        }
 
export default Buscadas;
