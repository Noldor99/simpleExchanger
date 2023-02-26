import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'

import Header from "./components/Header";
 

const App = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(`/p24api/pubinfo?json&exchange&coursid=5`).then((res) => {
      const users = res.data;
      setUsers(users)
      console.log(users);
    });
 
  }, []);

  return (
    <>
      <Header/>
      {users.map((item)=>
        <p>{item.buy}</p>
      )}
    </>

  )
}

export default App