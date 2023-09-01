import { useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import itinerary_actions from "../store/actions/itineraries"
const { read_itineraries_from_city } = itinerary_actions


export default function Card_details({ src, alt, text, description, id }) {

    // const itineraries = useSelector(store=>store.itineraries.itineraries_from_city)
    const store = useSelector(store=>store)
    console.log(store)
    
    const dispatch = useDispatch()
    useEffect(
      ()=>{dispatch(read_itineraries_from_city({city_id:id }))
    }, []
    )
  
    return (
        <div className="cards-details">
            <img src={src} alt={alt} />
            <h3>{text}</h3>
            <p>{description} </p>
        </div>
    )
}
