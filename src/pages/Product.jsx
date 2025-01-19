import React from 'react'
import ProductCard from '../components/ProductCard'

import { images } from '../data/Images'

export default function Product() {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center'>
        <div className='flex flex-wrap gap-8 md:gap-1 py-9 items-center justify-center'>
          {images.map((element,index)=>{
            return <ProductCard Element={element} index = {index}/>
          })}
          </div>
    </div>
  )
}
