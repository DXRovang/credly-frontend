import { useState } from 'react'

const Hero = ({dogs}) => {

const [color, setColor] = useState(false)

const addBadge = (dog_id) =>{
  fetch(`https://credly-backend.herokuapp.com/heros/${dog_id}`)
  .then(r=>r.json())
  .then(data=>console.log(data))
}
const changeColor = () => {
  setColor(!color)
}

  return ( 
    <div>
      {dogs.map((dog)=>(
        <div className={color ? "dog": "cat"}>
          <div>Name: {dog.name}</div>
          <div>Temperament: {dog.temperament}</div>
          <div>Lifespan: {dog.life_span}</div>
          <div>Origin: {dog.origin}</div>
          <div>Bred for: {dog.bred_for}</div>
          <div>Breed group: {dog.breed_group}</div>
          <img className="imgSize" src={dog.image_url} alt="dog"/>
          <div><button onClick={()=> addBadge(dog.id) }>Badge</button></div>
          <div><button onClick={()=> changeColor(dog.id) }>Color</button></div>
        </div>
      ))}
    </div>
   );
}
 
export default Hero;

  // fetch('https://sandbox-api.youracclaim.com/organizations/65a43bec-523b-46f7-ac8d-d9b4866784a3/badges', {
  //   method: 'POST',
  //   headers: {
  //     "Accept": "application/json",
  //     "Authorization": "Basic RWBe7l3ns9qtBffId1jHs_nsp8DHxHx8uV--",
  //     "Content-type": "application/json"
  //   },
  //   body: JSON.stringify({
  //     "badge_template_id": "3f148d26-5610-4c1b-a624-40bad8dd68e9",
  //     "issued_to_first_name": "Bella",
  //     "issued_to_last_name": "the Doberman",
  //   })})
  //   .then(r=>r.json())
  //   .then(data=>console.log(data))