import { useEffect, useState, useRef } from "react"
import Cards_cities from "../components/Cards_cities"
import axios from "axios"
import apiUrl from "../apiUrl"


export default function Cities() {
  const [cities, setCities] = useState ([])
  const [reEffect, setReEffect] = useState(true)
  const text = useRef()

    useEffect(
      () => {
        axios(apiUrl+'/cities?city='+text.current.value)
        .then(res=>setCities(res.data.response))
        .catch(err=>console.log(err))
      },
      [reEffect]
    )
    function handleFilter(){
      setReEffect(!reEffect)
    }
    return (
      <>
      
      <div className="input">
          <h2>Cities</h2>
          <h3>Collection of the most beautiful places and experience</h3>
          <input ref={text} type="text" name="text" id="text" onKeyUp={handleFilter} placeholder="Search your city"/>
      </div>

        <div className="cont-cards">
        {cities.map(each => 
          <Cards_cities key={each.id} src={each.photo} alt={each.city} text={each.city} id={each._id} />
        )}
      </div>
      </>
      
    );
  
}

