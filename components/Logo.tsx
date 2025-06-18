import React from 'react'
import { AlignEndVertical } from 'lucide-react'

export default function Logo() {
  return (
    <div className='flex items-center space-x-1'>
      <AlignEndVertical className="fill-[var(--main)] text-[var(--main)] size-5 " />
      <h1 className='font-bold  md:text-xl text-[var(--main)]'>Hulo<span className=''>finance</span></h1>
      
 
    </div>
  )
}
