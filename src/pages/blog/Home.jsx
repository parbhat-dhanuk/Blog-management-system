import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import Card from './components/card/Card'
import { useDispatch, useSelector } from 'react-redux'
import { blogFetch, setStatus } from '../../../STORE/blogSlice'
import STATUS from '../../status/status'

const Home = () => {
  // throw new Error('Error in page')
  const [blogs,setBlogs]=useState([])

   const dispatch = useDispatch('')       
   const {status,data} = useSelector((state)=>state.blog)
  




//Search feature

const [query,setQuery] = useState('')







useEffect(()=>{
 dispatch(blogFetch())
},[])

useEffect(()=>{
  if(status===STATUS.SUCCESS){
    setBlogs(data)
    dispatch(setStatus(null))
  }
},[status])


  return (

   
    
   <Layout setQuery={setQuery} >
    
   
  <div className='flex flex-wrap justify-center space-x-5 mt-6'>
   
   
       {
       
       blogs.filter((blog)=>blog.title.includes(query)).map((blog)=>{
            return  <Card bdata={blog}  />
          })
           
       }

  </div>
   </Layout>
 
  )
}

export default Home