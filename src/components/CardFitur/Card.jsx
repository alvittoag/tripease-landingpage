import React from 'react'
import assets from '../../assets/assets'

export default function Card(props) {
    const { img, title, description } = props
  return (
    <div className='max-w-[300px]'>
      <img src={img} alt="" />
      <div className="flex flex-col text-center">
        <p className='text-[#262627] font-[700] text-[16px] pt-[48px]'>{title}</p>
        <p className='text-[#4B4C4E] font-[400] text-[14px] pt-[12px]'>{description}.</p>
      </div>
    </div>
  )
}
