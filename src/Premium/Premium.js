import axios from 'axios';
import { useEffect, useState } from 'react';
import Cardpremium from '../Cardpremium';
import './Premium.css'

const Premium = () => {
    const [premiumList, setPremiumList] = useState([])
    
    const getPremium = async () =>{
        const results = await axios.get('https://apipdtc.herokuapp.com/bulldog/premium')
        console.log(results.data)
        setPremiumList(results.data)
    }
    
    
    useEffect(()=> {
        getPremium()
    },[])
    
    return ( 
        <div className='row d-flex bg-black'>
            <h2 className='text-center text-light mt-3 p-3' id='premium'>Premium</h2>
                    {premiumList.length > 0 ?
                    premiumList.map((premium)=>
                    <Cardpremium key={premium.id} premium={premium} {...premium}>
                        
                    </Cardpremium>
                    )
                    :
                    <h4 className='text-center mt-3 p-3'>Cargando</h4>}
            
        </div>
        );
}
 
export default Premium;

