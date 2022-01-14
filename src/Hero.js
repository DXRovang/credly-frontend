const Hero = ({dogs}) => {
  return ( 
    <div>
      In Hero.js
      {dogs.map((dog)=>(
        <div className="dog">
        {dog.name}
        {dog.temperament}
        {dog.life_span}
        {dog.origin}
        {dog.bred_for}
        {dog.breed_group}
        {dog.image_url}
        <button>Badge</button>
        </div>
      ))}
    </div>
   );
}
 
export default Hero;