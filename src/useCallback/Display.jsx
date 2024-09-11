import React from 'react'

const Display = ({text,displayValue}) => {
    console.log("i am from display")
  return (
    <p>From Display Component:{text},{displayValue}</p>
  )
}

export default React.memo(Display)