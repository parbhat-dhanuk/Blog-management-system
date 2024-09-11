import { createSlice } from "@reduxjs/toolkit"
import API from "../src/http"
import STATUS from "../src/status/status"

const authSlice = createSlice({

    name:"auth",

    initialState:{

        user:"",
        token:null,
        status:null
    },

    reducers:{

        setUser(state,action){
            state.user=action.payload
        },

        setToken(state,action){
            state.token=action.payload
        },
        setStatus(state,action){
            state.status=action.payload
        }
    }
})

export const {setUser,setToken,setStatus} = authSlice.actions

export default authSlice.reducer


//REGISTER//

export function register(data){
    return async function registerThunk(dispatch){
        dispatch(setStatus(STATUS.LOADING))
     try {
        const response = await API.post("/register",data)
        if(response.status===201){
         dispatch(setUser(data.username))
         dispatch(setStatus(STATUS.SUCCESS))
        }else{
         dispatch(setStatus(STATUS.ERROR))
        }
     } catch (error) {
        alert(error.response.data.message)
     }
    }
}

//LOGIN//

export function login(data){
    return async function loginThunk(dispatch){
        dispatch(setStatus(STATUS.LOADING))
     try {
        const response = await API.post("/login",data)
        if(response.status===200){
         dispatch(setToken(response.data.token))
         dispatch(setStatus(STATUS.SUCCESS))
        }else{
         dispatch(setStatus(STATUS.ERROR))
        }
     } catch (error) {
        alert(error.response.data.message)
     }
    }
}