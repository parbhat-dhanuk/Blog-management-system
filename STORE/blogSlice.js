import { createSlice } from "@reduxjs/toolkit"
import API from "../src/http"
import STATUS from "../src/status/status"

const blogSlice = createSlice({

    name:"blog",

    initialState:{

        data:null,
        status:null
    },

    reducers:{

        setData(state,action){
            state.data=action.payload
        },

       
        setStatus(state,action){
            state.status=action.payload
        }
    }
})

export const {setData,setStatus} = blogSlice.actions

export default blogSlice.reducer


//ADD BLOG //

export function add(data){
    return async function addThunk(dispatch){
        dispatch(setStatus(STATUS.LOADING))
        const response = await API.post("/blog",data,{
            headers:{
                "Content-Type":"multipart/form-data",
                "Authorization":localStorage.getItem("token")
            }
        }) 

        if(response.status===201){
            dispatch(setStatus(STATUS.SUCCESS))
            dispatch(setData(response.data.data))
        }
    }
}

//GET BLOGS //

export function blogFetch(){
    return async function blogFetchThunk(dispatch){
        dispatch(setStatus(STATUS.LOADING))
        const response = await API.get("/blog")
        if(response.status===200){
            dispatch(setStatus(STATUS.SUCCESS))
            dispatch(setData(response.data.data))
        }
    }
}

//GET SINGLE BLOG //


export function fetchSingle({id}){
    return async function fetchSingleThunk(dispatch){
        dispatch(setStatus(STATUS.LOADING))
    const response = await API.get(`/blog/${id}`)
    if(response.status===200){
        dispatch(setData(response.data.data))
        dispatch(setStatus(STATUS.SUCCESS))
        dispatch(setData(response.data.data))
    }
    }
}




//EDIT BLOG //

export function edit({id},data){
    return async function editThunk(dispatch){
        dispatch(setStatus(STATUS.LOADING))
        const response = await API.patch(`/blog/${id}`,data,{
            headers:{
                "Authorization":localStorage.getItem("token"),
                "Content-Type":"multipart/form-data"
            }
        })

        if(response.status===200){
            dispatch(setStatus(STATUS.SUCCESS))
        }
    }
}


//DELETE BLOG //

export function blogDelete({id}){
    return async function blogDeleteThunk(dispatch){
        dispatch(setStatus(STATUS.LOADING))
        const response = await API.delete(`/blog/${id}`,{
            headers:{
                "Authorization":localStorage.getItem("token")
            }
        })
        dispatch(setStatus(STATUS.DELETED))
    }
}