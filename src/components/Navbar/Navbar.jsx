import React from 'react'
import assets from '../../assets/assets'


export default function Navbar() {
  return (
    <div className='bg-white px-[32px] py-[16px] flex items-center justify-between shadow-sm'>

            <div className="logo">
                <img src={assets.logo} alt="logo" />
            </div>

            <div className="p-2">
                <div className="flex space-x-7 text-[#717275] ">
                    <a href="#beranda" className='active:text-[#FF7300]'>Beranda</a>
                    <a href="#tentangKami" className='active:text-[#FF7300]'>Tentang Kami</a>
                    <a href="#fitur" className='active:text-[#FF7300]'>Fitur</a>
                    <a href="#testimoni" className='active:text-[#FF7300]'>Testimoni</a>
                    <a href="#faq" className='active:text-[#FF7300]'>FAQ</a>
                </div>
            </div>

            <div className="button">
                <button className='px-[24px] py-[10px] bg-[#0080FF] rounded-lg text-white font-[600]'>Unduh Aplikasi</button>
            </div>
      
    </div>
  )
}
