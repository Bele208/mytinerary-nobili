import { useEffect, useState } from "react";
import { Link as Anchor, useParams } from "react-router-dom";
import Card_details from "../components/Card_details";
import axios from "axios";
import apiUrl from "../apiUrl";

export default function Details() {
  const { city_id } = useParams();
  const [cityData, setCityData] = useState(null);

  useEffect(() => {
    axios.get(apiUrl + '/cities/' + city_id)
      .then(res => {
        const city = res.data.response;
        setCityData(city);
      })
      .catch(err => console.log(err));
  }, [city_id]);

  return (
    <div className="details-cont">
      {cityData && (
        <Card_details
          key={cityData._id}
          src={cityData.photo}
          alt={cityData.city}
          text={cityData.city}
          description={cityData.description}
          id={cityData._id}
        />
      )}

      <Anchor to={'/allcities/'}>Back to cities</Anchor>
    </div>
  );
}
