import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../../apiUrl"

const signin = createAsyncThunk(
    'signin',
    async(obj)=>{
        try {
            let data = await axios.post(apiUrl+'auth/signin',obj.data)
            console.log(data);
            localStorage.setItem('token',data.data.response.token)
            return {
                user: data.data.response.user,
                token: data.data.response.token,
                messages: []
            }
        } catch (error) {
            console.log(error);
            return {
                user: {},
                token: '',
                messages: error.response.data.messages || [error.response.data.message]
            }
        }
    }
)

const signin_token = createAsyncThunk(
    'signin_token',
    async()=> {
        try {
            let token = localStorage.getItem('token')
            let authorization = { headers:{ 'Authorization':`Bearer ${token}` } }
            let data = await axios.post(apiUrl+'auth/token',null,authorization)
            console.log(data);
            localStorage.setItem('token',data.data.response.token)
            return {
                user: data.data.response.user,
                token: data.data.response.token
            }
        } catch (error) {
            console.log(error);
            return {
                user: {},
                token: ''
            }
        }
    }
)

const signout_token = createAsyncThunk(
    'signout_token',
    async()=> {
        try {
            let token = localStorage.getItem('token')
            let authorization = { headers:{ 'Authorization':`Bearer ${token}` } }
            let data = await axios.post(apiUrl+'auth/signout',null,authorization)
            console.log(data);
            localStorage.removeItem('token')
            return {
                user: {},
                token: ''
            }
        } catch (error) {
            console.log(error);
            return {
                user: {},
                token: ''
            }
        }
    }
)

const update_user = createAsyncThunk(
    'update_user',
    async(obj)=> {
        try {
            let token = localStorage.getItem('token')
            let authorization = { headers:{ 'Authorization':`Bearer ${token}` } }
            let data = await axios.put(apiUrl+'users', obj.data, authorization)
            return {
                user: data.data.response
            }
        } catch (error) {
            console.log(error);
            return {
                user: {}
            }
        }

    }
)

const user_actions = {signin, signin_token, signout_token, update_user}
export default user_actions