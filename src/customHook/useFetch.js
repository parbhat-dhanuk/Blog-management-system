import axios from "axios"
import { useEffect } from "react"
import {useState} from "react"

const useFetch = (url)=>{
    const [data,setdata] = useState(null)
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(null)

    const fetchData = async()=>{
        try {
            const response = await axios.get(url)
            if(response.status===200){
                setdata(response.data.data)
            }else{
                setError("Something went wrong")
            }
        } catch (error) {
            setError(error)
        }finally{
            setLoading(false)
        }
    }
    
useEffect(()=>{
    fetchData()
    },[])

    return{
        data,
        loading,
        error
    }
}

export default useFetch