import { useEffect, useState } from "react";
import { Link as Anchor, useParams } from "react-router-dom";
import Card_details from "../components/Card_details";
import Itineraries_details from "../components/Itineraries_details";
import city_actions from "../store/actions/cities";
import { useDispatch, useSelector } from "react-redux";
const { read_city } = city_actions;

export default function Details() {
  const { city_id } = useParams();
  const dispatch = useDispatch();
  const [showAdditionalSection, setShowAdditionalSection] = useState(false);
  const city = useSelector(store => store.cities.city);
  console.log(city_id)
 

  useEffect(
    () => {
      dispatch(read_city({id: city_id}));
    }, []);
    
    return (
    <div className="details-cont">
      {city_id && (
        <Card_details
          key={city_id}
          src={city.photo}
          alt={city.city}
          text={city.city}
          description={city.description}
          id={city_id}
        />
      )}

      <Anchor to={'/allcities/'}>Back to cities</Anchor>

      <button className="view-itineraries" onClick={() => setShowAdditionalSection(!showAdditionalSection)}>{showAdditionalSection ? ('Close Itineraries ↑') : ('View Itineraries ↓')}</button>

      {showAdditionalSection && (
        <div>
          <Itineraries_details/>
        </div>
      )}
    </div>
  );
}
