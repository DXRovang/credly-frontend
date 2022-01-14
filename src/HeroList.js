import Hero from "./Hero"
import { useState, useEffect } from 'react'
const HeroList = () => {
  const [dogs, setDogs] = useState([])
  useEffect(() => {
    fetch('https://credly-backend.herokuapp.com/heros')
    .then((r) => r.json())
    .then((data) =>{
      setDogs(data)
    })
    .catch((err) => console.log(err))
  }, [])
  
  
  return ( 
    <div>
  {dogs && <Hero dogs={dogs}/> }
    </div>
   );
}
 
export default HeroList;