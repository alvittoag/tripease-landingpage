import React from 'react'
import assets from '../../assets/assets'


export default function Navbar() {
  return (
    <div className='bg-white px-[32px] py-[16px] flex items-center justify-between shadow-sm'>

            <div className="logo">
                <img src={assets.logo} alt="logo" />
            </div>

            <div className="p-2">
                <div className="flex space-x-7 text-[#717275] active:text-[#FF7300]">
                    <a href="">Beranda</a>
                    <a href="">Tentang Kami</a>
                    <a href="">Fitur</a>
                    <a href="">Testimoni</a>
                    <a href="">FAQ</a>
                </div>
            </div>

            <div className="button">
                <button className='px-[24px] py-[10px] bg-[#0080FF] rounded-lg text-white font-[600]'>Unduh Aplikasi</button>
            </div>
      
    </div>
  )
}
