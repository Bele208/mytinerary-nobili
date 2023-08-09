import { useParams } from "react-router-dom"

export default function Details() {
    const {city_id} = useParams
  return (
    <div>Details {city_id} coming soon</div>
  )
}
