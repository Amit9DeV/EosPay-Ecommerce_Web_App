import React from 'react'
import { useSelector } from 'react-redux'

export default function ProductDetails() {
  
  const index = useSelector((state)=>state.index)
  console.log(index)

  return (
    <div className='text-red-600'>ProductDetails {index}</div>
  )
}

