import React from 'react'
import assets from '../../assets/assets'

export default function Hero() {
  return (
    <div className='bg-gradient-to-b from-[#E5F2FF] to-[#FFFFFF] py-[40px] flex justify-center gap-5 flex-wrap'>

            <div className="text-[#262627] w-[40%]">
                <p className='font-[700] text-[64px]'>Temukan <br /> Dunia dengan</p>
                <p className='font-[700] text-[64px] text-[#0080FF]'>Tripease</p>
                <p className='text-[20px] pt-[24px]'>Jelajahi dunia dengan Tripease, aplikasi travelbooking yang akan mengubah cara Anda merencanakan perjalanan.</p>

                <div className="flex pt-[24px] gap-2">
                    <img src={assets.google} alt="" />
                    <img src={assets.ios} alt="" />
                </div>
            </div>

            <div className="">
                <img src={assets.imgHero} alt="" />
            </div>

    </div>
  )
}
