import React from 'react'

const Title = () => {
    console.log("i am from title")
  return (
    <div>Learning useCallback</div>
  )
}

export default React.memo(Title)