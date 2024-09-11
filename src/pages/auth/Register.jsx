import React, { useEffect } from 'react'
import Form from './components/form/Form'
import { useDispatch, useSelector } from 'react-redux'
import { register, setStatus } from '../../../STORE/authSlice'
import { useNavigate } from 'react-router-dom'
import STATUS from '../../status/status'

const Register = () => {
  const dispatch=useDispatch()
  const {status}=useSelector((state)=>state.auth)
  const navigate=useNavigate()
  const handleRegister = (data)=>{
    dispatch(register(data))
  }
  useEffect(()=>{
  if(status===STATUS.SUCCESS){
    navigate("/login")
    dispatch(setStatus(null))
  }
  },[status])
  return (
    <Form type='Register' submit={handleRegister} />
  )
}

export default Register