import { Link as Anchor } from "react-router-dom"

import { useParams } from "react-router-dom"
import Img_construction from "../components/Img_construction";

export default function Details() {
  const { city_id } = useParams()
 return (
    <div className="details-cont">
      <Img_construction />
      <Anchor to={'/cities/'} >Back to cities</Anchor>
      <p>CityDetail of city {city_id} under construction</p>
    </div>
  );
}
