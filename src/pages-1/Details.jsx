import { useParams } from "react-router-dom"
import Img_construction from "../components/Img_construction";

export default function Details() {
    const {city_id} = useParams
  return (
    <div>
      < Img_construction />
      <p>{city_id}</p>
    </div>
  )
}
