const Hero = ({dogs}) => {
  return ( 
    <div>
      In Hero.js
      {dogs.map((dog)=>(
        <div>
        {dog.name}
        </div>
      ))}
    </div>
   );
}
 
export default Hero;