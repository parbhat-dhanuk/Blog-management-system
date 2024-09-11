import React, { useState } from 'react'
import Navbar from '../navbar/Navbar'

const Layout = ({children,setQuery}) => {

  
  return (
   <>
   <Navbar setQuery={setQuery} /> 
   {children}
   
   </>
  )
}

export default Layout