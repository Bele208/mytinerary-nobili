import { createReducer } from "@reduxjs/toolkit";
import user_actions from "../actions/users";
const { signin, signin_token} = user_actions

const initial_state = {
    users: [],
    user: {},
    token: ''
}

const user_reducer = createReducer(
    initial_state,
    build => build.addCase(
        signin.fulfilled,
        (state,action)=>{
            let new_state = {
                ...state,
                user: action.payload.user,
                token: action.payload.token
            }
            return new_state
        }
    ).addCase(
        signin_token.fulfilled,
        (state,action)=> {
            let new_state = {
                ...state,
                user: action.payload.user,
                token: action.payload.token
            }
            return new_state
        }
    )
)

export default user_reducer