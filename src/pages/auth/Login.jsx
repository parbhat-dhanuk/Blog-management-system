import React, { useEffect } from 'react'
import Form from './components/form/Form'
import { useDispatch, useSelector } from 'react-redux'
import { login, setStatus } from '../../../STORE/authSlice'
import { useNavigate } from 'react-router-dom'
import STATUS from '../../status/status'

const Login = () => {
const dispatch=useDispatch()
const navigate=useNavigate()
const {status,token,user} = useSelector((state)=>state.auth)
  const handleLogin = (data)=>{
       dispatch(login(data))
  }
  useEffect(()=>{
   if(status===STATUS.SUCCESS){
    localStorage.setItem("token",token)
    navigate("/")
    dispatch(setStatus(null))
   }
  },[status])
  return (
   
  <Form type='Login' submit={handleLogin} name={user} />
  )
}

export default Login