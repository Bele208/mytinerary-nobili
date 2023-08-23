import { useEffect, useState } from "react"
import Text_home from "../components/Text_home"
import Btn_more from "../components/btn-more"
import Carrusel from "../components/Carrusel"
import axios from "axios"
import apiUrl from "../apiUrl.js"

export default function Home() {
const [data, setData] = useState ([])

    useEffect(
      () => {
        axios(apiUrl+'cities/carrusel')
        .then(res=>setData(res.data.data_carrusel))
        .catch(err=>console.log(err))
      },
      []
    )
  return (
    <>
    <div className="text-phrase">
      <h1>Find your perfect trip, designed by insiders
      who know and love their cities!</h1>
    </div>

    <div className="cont-carrusel">

      <div className="cont-index">
        <Text_home/>
        <Btn_more/>
      </div>
     <Carrusel data={data} />
    </div>
    </>
  )
}


