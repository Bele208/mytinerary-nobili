import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
import apiUrl from "../../../apiUrl";

const read_carrusel = createAsyncThunk(
    'read_carrusel',
    async() => {
        try {
            let data = await axios(apiUrl+'cities/carrusel')
            return {
                carrusel: data.data.data_carrusel
            }
        } catch (error) {
            console.log(error)
            return {
                carrusel: []
            }
        }
    }       
)

const read_cities = createAsyncThunk(
    'read_cities',
    async(obj)=> {
        try {
            let data = await axios(apiUrl+'cities?city='+obj.text)
            //console.log(data);
            return { cities: data.data.response }
        } catch (error) {
            console.log(error);
            return { cities: [] }
        }
    }
)

const read_city = createAsyncThunk(
    'read_city',
    async(obj)=> {
        try {
            let data = await axios(apiUrl+'cities/'+obj.id)
            //console.log(data);
            return { city: data.data.response }
        } catch (error) {
            console.log(error);
            return { city: {} }
        }
    }
)

const city_actions = { read_carrusel, read_cities, read_city }
export default city_actions