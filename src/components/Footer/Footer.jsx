import React from 'react'
import assets from '../../assets/assets'

export default function Footer() {
  return (
    <div className="">
        <div className='bg-[#4B4C4E] pt-[32px] pb-[64px] justify-evenly flex flex-wrap mb-1'>
            <div className=" max-w-[500px]">
                <img src={assets.logoFooter} alt="" className='pb-[32px]'/>
                <p className='text-white font-[600] leading-loose'>Mulailah petualangan perjalananmu sekarang dan temukan keajaiban dunia dengan Tripease! Bergabunglah dengan komunitas kami dan rasakan pengalaman perjalanan yang tak terlupakan</p>

                <div className="flex pt-[32px]">
                    <img src={assets.google} alt="googleplay" className='w-[138px] pe-[16px]' />
                    <img src={assets.ios} alt="ios" className='w-[128px]' />
                </div>
            </div>

            <div className="text-white flex flex-col">
                <p className='font-[700] pb-[16px]'>Informasi Tambahan</p>
                <a href="" className='pb-[12px]'>Kebijakan Privasi</a>
                <a href="" className='pb-[12px]'>Syarat dan Ketentuan</a>
                <a href="">Pemberitahuan Hukum</a>
            </div>

            <div className="text-white flex flex-col">
                <p className='font-[700] pb-[16px]'>Kontak Kami</p>

                <div className="flex items-center justify-start pb-[12px]">
                    <img src={assets.supportFooter} alt="kontak" />
                    <a href="" className='ps-2'>+62 123 4567 890</a>
                </div>

                <div className="flex items-center justify-start pb-[12px]">
                    <img src={assets.emailFooter} alt="kontak" />
                    <a href="" className='ps-2'>support.tripease@gmail.com</a>
                </div>
            </div>
        </div>
        <div className="bg-[#262627] py-[19px] flex justify-between px-[130px] flex-wrap">
            <div className="">
                <p className='text-[12px] font-[400] text-white'>© 2023 Tripease. Seluruh hak cipta dilindungi.</p>
            </div>

            <div className="flex items-center gap-[34px]">
                <img src={assets.facebook} alt="" />
                <img src={assets.instagram} alt="" />
                <img src={assets.twitter} alt="" />
                <img src={assets.youtube} alt="" />
            </div>
        </div>
    </div>
  )
}
