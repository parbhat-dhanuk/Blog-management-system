import React, { useCallback, useState } from 'react'
import Title from './Title'
import Display from './Display'
import Button from './Button'

const Parent = () => {
    const [salary,setSalary] = useState(2000)
    const [age,setAge] =useState(25)

    const incrementAge = useCallback(()=>{
            setAge(age+5)
    },[age])

    const incrementSalary = useCallback(()=>{
        setSalary(salary+1000)
    },[salary])
  return (
    <div>
        <Title/>
        <Display text="Age" displayValue={age} />
        <Button content="Increase Age" handleClick={incrementAge} />
        <Display text="Salary" displayValue={salary} />
        <Button content="Increase Salary" handleClick={incrementSalary} />
    </div>
  )
}

export default Parent