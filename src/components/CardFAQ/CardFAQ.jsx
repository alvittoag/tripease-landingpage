import React from 'react'
import assets from '../../assets/assets'

export default function CardFAQ(props) {
  const {text}=props
  return (
    <div className="pb-[32px] ">
      <div className='bg-white py-[23px] max-w-[910px] border border-[#D2D7E0] px-[32px] flex justify-between gap-[100px] items-center cursor-pointer hover:bg-[#faf9f9]'>
          <p className='text-[#262627] font-[600] text-[20px]'>{text}</p>
          <button>
            <img src={assets.buttonFAQ} alt="" />
          </button>
      </div>
    </div>
  )
}
