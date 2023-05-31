import React from 'react'
import assets from '../../assets/assets'

export default function CardTesti(props) {
    const { nama, tanggal, testimoni } = props
  return (
    <div className='bg-[#F9FAFB] border border-[#D2D7E0] rounded-xl max-w-[684px]'>
      <div className="flex gap-3 p-[16px]">
        <div className="">
            <img src={assets.profile} alt="" />
        </div>

        <div className="flex flex-col max-w-[500px]">
            <p className='text-[#262627] font-[700] text-[20px]'>{nama}</p>
            <p className='text-[14px] pb-[16px]'>{tanggal}</p>
            <p className='text-[#4B4C4E] font-[400]'>{testimoni}</p>
        </div>
      </div>
    </div>
  )
}
