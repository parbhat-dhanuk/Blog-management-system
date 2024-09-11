import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({bdata}) => {
  
  return (
  <Link to={`/blog/${bdata._id}`}>
      <div className="max-w-sm rounded overflow-hidden shadow-lg mb-4">
    <img className="w-full" src={bdata?.imageUrl} alt="Sunset in the mountains" />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{bdata?.title}</div>
      <p className="text-gray-700 text-base">
       {bdata?.description}
      </p>
    </div>
    <div className="px-6 pt-4 pb-2">
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{bdata?.subtitle}</span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{bdata?.category}</span>
 
    </div>
  </div>
  </Link>
  )
}

export default Card