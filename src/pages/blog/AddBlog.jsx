import React, { useEffect } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Layout from '../../components/layout/Layout'
import Form from './components/form/Form'
import { useDispatch, useSelector } from 'react-redux'
import { add, setStatus } from '../../../STORE/blogSlice'
import STATUS from '../../status/status'
import { useNavigate } from 'react-router-dom'

const AddBlog = () => {
 
  const dispatch = useDispatch()
  const navigate= useNavigate()
  const {status} = useSelector((state)=>state.blog)
  const handleAddBlog = (data)=>{
     dispatch(add(data))
  }


  useEffect(()=>{
   if(status===STATUS.SUCCESS){
   navigate("/")
   dispatch(setStatus(null))
   }
  },[status])
  

 
  return (
  <Layout>
	<Form type='Create' onSubmit={handleAddBlog} />
  </Layout>
  )
}

export default AddBlog