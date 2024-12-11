import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Brewery from './Brewery';

function App() {
const [breweriesData, setBreweriesData] = useState([])
useEffect(()=>{
  console.log(breweriesData)
  if (breweriesData.length === 0){
    axios.get ('https://api.openbrewerydb.org/v1/breweries')
    .then(res => {
      console.log(res.data);
    setBreweriesData(res.data)

    })
    .catch(error =>{
      console.log(error);
    })
  }
}, [breweriesData])

  
  return (
    <div className="App">
      {breweriesData.map((brewery)=>{
        return < Brewery key={brewery.id} brewery={brewery} />
      })}

    </div>
  );
}




export default App;
