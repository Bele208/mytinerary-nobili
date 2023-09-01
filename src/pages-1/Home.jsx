import { useEffect, useState } from "react"
import Text_home from "../components/Text_home"
import Btn_more from "../components/btn-more"
import Carrusel from "../components/Carrusel"
import { useSelector, useDispatch } from "react-redux"
import city_actions from "../store/actions/cities"
const { read_carrusel } = city_actions

export default function Home() {

const carrusel = useSelector(store=>store.cities.carrusel)
const dispatch = useDispatch()

    useEffect(
      () => {
        if (carrusel.length===0){
          dispatch (read_carrusel())
        }
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
     <Carrusel data={carrusel} />
    </div>
    </>
  )
}


