import React, { useEffect } from 'react'
import Layout from '../../components/layout/Layout'
import Form from './components/form/Form'
import { useDispatch, useSelector } from 'react-redux'
import { edit, setStatus } from '../../../STORE/blogSlice'
import { useNavigate, useParams } from 'react-router-dom'
import STATUS from '../../status/status'

const EditBlog = () => {
 const dispatch = useDispatch()
 const {status,data} = useSelector((state)=>state.blog)
 const {id} = useParams()
 const navigate=useNavigate()

  const handleEdit = (data)=>{

    dispatch(edit({id},data))
  }



  useEffect(()=>{
   if(status===STATUS.SUCCESS){
    navigate("/")
    dispatch(setStatus(null))
   }
  },[status])

  
  return (
    

    <Layout>
        <Form type='Edit' onSubmit={handleEdit}  />
    </Layout>
  )
}

export default EditBlog