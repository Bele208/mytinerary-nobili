import Flecha_izquierda from "./Flecha_izquierda"
import Flecha_derecha from "./Flecha_derecha"
import Cards from "./Cards"
import { useState } from "react"

export default function Carrusel({ data }) {
  let [counter, setCounter] = useState(0)
  let [counterTo, setCounterTo] = useState(4)
  function next_page() {
    if (data.length <= counterTo) {
    setCounter(0)
    setCounterTo(4)
    }else{
    setCounter(counter+4)
    setCounterTo(counterTo+4)
    }

  }
      function prev_page (){
      if (counter <= 0) {
          setCounter(data.length-4)
          setCounterTo(data.length)        
      } else{
          setCounter(counter-4)
          setCounterTo(counterTo-4)
      }
  }
  return (
    <>
      <Flecha_izquierda onClick={prev_page}/>
      <div className="cont-father">
        <div>
          <h2>Popular Mytineraries</h2>
        </div>
        <div className="carrusel-img">
          {data.slice(counter, counterTo).map((each, index) => (
            <Cards key={index} src={each.photo} alt={each.city} text={each.city} />
          ))}

        </div>

      </div>

      <Flecha_derecha onClick={next_page} />
    </>
  )
}