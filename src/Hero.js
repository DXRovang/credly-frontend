const Hero = ({dogs}) => {

const addBadge = () =>{
  console.log("added!")
}

  return ( 
    <div>
      {dogs.map((dog)=>(
        <div className="dog">
        <div>Name: {dog.name}</div>
        <div>Temperament: {dog.temperament}</div>
        <div>Lifespan: {dog.life_span}</div>
        <div>Origin: {dog.origin}</div>
        <div>Bred for: {dog.bred_for}</div>
        <div>Breed group: {dog.breed_group}</div>
        <img className="imgSize" src={dog.image_url} alt="dog"/>
        <div><button onClick={addBadge}>Badge</button></div>
        </div>
      ))}
    </div>
   );
}
 
export default Hero;