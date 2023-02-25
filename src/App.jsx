import axios from 'axios';
import { useEffect } from 'react';
import { useSelector } from 'react-redux'

import Header from "./components/Header";
import { useGetRatesQuery, useLazyGetRatesQuery } from "./store/redusers/rateApi";
 

const App = () => {

  const {allRates} = useSelector(state => state.rates);

  console.log(allRates)
  
  const [fetchRats] = useLazyGetRatesQuery( )
  
  const {data} = useGetRatesQuery()

  console.log(data)

 

 
  
  useEffect(() => {
   
    fetchRats() 
 
  }, []);

  return (
    <>
      <Header/> 
    </>

  )
}

export default App