import React from 'react'
import assets from '../../assets/assets'
import { Carousel, IconButton } from '@material-tailwind/react'
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline"

export default function CardTesti(props) {

  const { nama, tanggal, testimoni } = props
  return (
    <Carousel 
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="Blue"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 -translate-y-2/4 left-4"
        >
          <ArrowLeftIcon strokeWidth={2} className="w-6 h-6" />
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="Blue"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 -translate-y-2/4 !right-4"
        >
          <ArrowRightIcon strokeWidth={2} className="w-6 h-6" />
        </IconButton>
      )}
      className='bg-[#F9FAFB] max-w-[780px] border border-[#D2D7E0] rounded-xl'>
      <div className="p-[16px] mx-10 flex justify-center ">
        <img src={assets.profile} alt="" className=''/>
        <div className="flex flex-col ps-5">
          <h1 className='text-[#262627] font-[700] text-[20px]'>{nama}</h1>
          <p className='text-[14px] text-[#4B4C4E]'>{tanggal}</p>
          <p className='max-w-[500px] text-[#4B4C4E] mt-[16px] text-justify mb-[26px]'>{testimoni}</p>
        </div>
      </div>

      <div className="p-[16px] flex mx-10 justify-center">
        <img src={assets.profile} alt=""/>
        <div className="flex flex-col ps-5">
          <h1 className='text-[#262627] font-[700] text-[20px]'>{nama}</h1>
          <p className='text-[14px] text-[#4B4C4E]'>{tanggal}</p>
          <p className='max-w-[500px] text-[#4B4C4E] mt-[16px] text-justify mb-[26px]'>{testimoni}</p>
        </div>
      </div>
      
      <div className="p-[16px] flex mx-10 justify-center">
        <img src={assets.profile} alt=""/>
        <div className="flex flex-col ps-5">
          <h1 className='text-[#262627] font-[700] text-[20px]'>{nama}</h1>
          <p className='text-[14px] text-[#4B4C4E]'>{tanggal}</p>
          <p className='max-w-[500px] text-[#4B4C4E] mt-[16px] text-justify mb-[26px]'>{testimoni}</p>
        </div>
      </div>
    </Carousel>
  )
}
