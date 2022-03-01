import axios from 'axios';
import { useEffect, useState } from 'react';
import Cardpremium from '../Cardpremium';
import './Premium.css'

const Premium = () => {
    const [premiumList, setPremiumList] = useState([])
    const getPremium = async () =>{
        const results = await axios.get('https://apipdtc.herokuapp.com/bulldog/premium')
        setPremiumList(results.data)
    }
    
    
    useEffect(()=> {
        getPremium()
    },[])
    
    return ( 
        <div className='row d-flex align-items-between bg-black'>
            <h2 className='text-center text-light mt-3 mb-4 p-3' id='premium'>Premium</h2>
            
                    {premiumList.length > 0 ?
                    premiumList.map((premium)=>
                    <Cardpremium key={premium.id} {...premium}>
                        
                    </Cardpremium>
                    )
                    :
                    <h4 className='text-center mt-3 p-3'>Cargando</h4>}
           
        </div>
        );
}
 
export default Premium;

