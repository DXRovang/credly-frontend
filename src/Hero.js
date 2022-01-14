const Hero = ({dogs}) => {

const addBadge = (e) =>{
  e.preventDefault();
  console.log("added!")
  fetch('https://sandbox-api.youracclaim.com/organizations/65a43bec-523b-46f7-ac8d-d9b4866784a3/badges', {
    method: 'POST',
    headers: {
      "Accept": "application/json",
      "Authorization": "Basic RWBe7l3ns9qtBffId1jHs_nsp8DHxHx8uV--",
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      "badge_template_id": "3f148d26-5610-4c1b-a624-40bad8dd68e9",
      "issued_to_first_name": "Bella",
      "issued_to_last_name": "the Doberman",
    })})
    .then(r=>r.json())
    .then(data=>console.log(data))
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