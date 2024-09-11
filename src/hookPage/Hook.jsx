import React from 'react'
import useCounter from '../customHook/useCounter'
import useInput from '../customHook/useInput'
import useFetch from '../customHook/useFetch'

const Hook = () => {
   const {count,increment,decrement} = useCounter(0)
   const {value,onChange}  = useInput('rabel')
   const {data,loading,error} = useFetch("https://react30.onrender.com/api/user/blog")
   if(loading) return <p>Loading..</p>
   if(error)return <p>Error:(error)</p>
  return (
    <div>

    <p>Count:{count}</p>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>



    <input type="text" onChange={onChange} value={value} />
    <h1>{value}</h1>

    <ul>
      {
        data.map(post=>(
          <li key={post._id}>{post.title}</li>
        ))
      }
    </ul>
    </div>
  )
}

export default Hook