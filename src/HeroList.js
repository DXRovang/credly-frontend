import Hero from "./Hero"
import { useState, useEffect } from 'react'
const HeroList = () => {
  const [dogs, setDogs] = useState([])
  useEffect(() => {
    fetch("http://127.0.0.1:3000/heros")
    .then((r) => r.json())
    .then((data) =>{
      console.log(data)
      setDogs(data)
    })
  }, [])
  
  
  return ( 
    <div>
      In HeroList.js
  {dogs && <Hero dogs={dogs}/> }
    </div>
   );
}
 
export default HeroList;