import React from 'react'
import assets from '../assets/assets'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Card from '../components/CardFitur/Card'
import CardFAQ from '../components/CardFAQ/CardFAQ'
import CardTesti from '../components/CardTestimoni/CardTesti'
import Footer from '../components/Footer/Footer'

export default function LandingPage() {
  return (
    <div>
        <Navbar/>
        <Hero/>
            <div className=" Partner flex flex-col bg-white">
                <p className="text-[#262627] font-[600] text-center py-[16px]">Partner</p>

                <div className="grid grid-cols-7 px-[32px] pb-[32px]">

                    <div className="">
                        <img src={assets.kai} alt="logoKai" />
                    </div>

                    <div className="">
                        <img src={assets.bankMandiri} alt="logoBankMandiri" />
                    </div>

                    <div className="">
                        <img src={assets.indomaret} alt="logoIndomaret" />
                    </div>

                    <div className="">
                        <img src={assets.ovo} alt="logoOvo" />
                    </div>

                    <div className="">
                        <img src={assets.pesonaIndonesia} alt="logoPesonaIndonesia" />
                    </div>

                    <div className="">
                        <img src={assets.gpay} alt="logoGopay" />
                    </div>

                    <div className="">
                        <img src={assets.dana} alt="logoDana" />
                    </div>

                </div>

            </div>

            <div 
                id='tentangKami'
                className="bg-gradient-to-r from-[#2137E7] to-[#8903FE] text-white flex justify-center">
                    <div className="text-center py-[64px] max-w-[60%] ">
                        <p className="text-[14px] pb-[16px]">Tentang Tripease</p>
                        <p className="text-[32px] font-[700]">Mengubah Cara Anda</p>
                        <p className="text-[32px] font-[700]">Merencanakan Perjalanan</p>
                        <p className="font-[400] pt-[32px]">Tripease adalah platform inovatif yang didedikasikan untuk memudahkan Anda merencanakan dan memesan perjalanan dengan mudah. Dengan kombinasi teknologi canggih dan keahlian dalam industri perjalanan, kami memberikan pengalaman terbaik untuk menjelajahi dunia tanpa batas.</p>
                    </div>
            </div>

            <div 
                className="bg-[#F9FAFB] justify-center flex"
                id='fitur'>
                    <div className="text-center py-[64px] max-w-[70%] ">
                        <p className="text-[32px] font-[700]">Fitur Unggulan Tripease</p>
                        <p className="font-[400] pt-[16px]">Temukan keajaiban perjalanan dengan fitur-fitur eksklusif Tripease. Dari penelusuran destinasi yang canggih hingga manajemen pemesanan yang mudah, Tripease memberikan pengalaman perjalanan yang tak terlupakan.</p>
                    </div>
            </div>

            <div className="bg-[#F9FAFB]">
                <div className="flex justify-evenly flex-wrap pb-[64px]">
                    <Card
                        img={assets.fiturOne}
                        title={'Rekomendasi Hotel Yang Bagus'}
                        description={'Rekomendasi hotel sesuai preferensi pengguna berdasarkan lokasi, akomodasi, fasilitas, anggaran'}/>
                    
                    <Card
                        img={assets.fiturTwo}
                        title={'Beli Tiket Dengan Mudah'}
                        description={'Pencarian cepat tiket dengan input tujuan, tanggal, dan jumlah penumpang'}/>
                    </div>

                    <div className="flex justify-evenly flex-wrap pb-[64px]">
                    <Card
                        img={assets.fiturThree}
                        title={'Jadwal Secara Real-Time'}
                        description={'Informasi terkini jadwal perjalanan, keberangkatan, acara dengan pembaruan real-time'}/>
                    
                    <Card
                        img={assets.fiturFour}
                        title={'Mudahnya Proses Refund'}
                        description={'Refund mudah melalui antarmuka intuitif, temukan opsi, isi formulir, kirim permintaan'}/>
                </div>
            </div>

            <div className="bg-white flex flex-wrap items-center justify-evenly py-[96px] px-[152px] ">
                <img src={assets.visimisi} alt="" />

                <div className="flex flex-col max-h-[380] ">
                    <p className="text-[#262627] text-[32px] font-[700] pb-[64px] max-w-[500px]">“Menghubungkan Dunia Melalui Petualangan Tanpa Batas.”</p>
                    <p className="text-[#262627] font-[700] text-[32px] pb-[12px]">Misi</p>
                    <p className="text-[#4B4C4E] font-[400] leading-7 max-w-[500px]">Misi kami adalah membantu Anda mewujudkan perjalanan impian Anda dengan memberikan akses ke destinasi yang menakjubkan, penawaran terbaik, dan pemesanan yang mudah. Kami berkomitmen untuk memberikan pengalaman perjalanan yang tak terlupakan dan memberikan inspirasi untuk petualangan baru.</p>
                </div>
            </div>

            <div className="bg-gradient-to-r from-[#2137E7] to-[#8903FE] text-white flex justify-center">
                <p className="font-[700] text-[32px] py-[96px]">"Mewujudkan Perjalanan Impian Anda dengan Tripease."</p>
            </div>

            <div 
                className="bg-white py-[96px] "
                id='testimoni'>
                    <div className="bg-white justify-center flex ">
                        <div className="text-center py-[64px] max-w-[60%] ">
                            <p className="text-[32px] font-[700]">Pendapat Mereka Tentang Tripease</p>
                            <p className="font-[400] pt-[16px]">Dengarkan apa kata pelanggan kami tentang pengalaman menggunakan Tripease dan bagaimana aplikasi ini telah membantu mereka menemukan dan merencanakan perjalanan yang tak terlupakan.</p>
                        </div>
                </div>

                <div className="flex overflow-x-hidden justify-center">
                    <CardTesti
                        nama={'David'}
                        tanggal={'23 Mei 2023'}
                        testimoni={'"Tripease adalah penyelamat perjalanan saya! Saya tidak memiliki banyak waktu untuk merencanakan liburan, tetapi dengan Tripease, saya dapat dengan cepat menemukan pilihan destinasi dan mengatur pemesanan dengan mudah. Saya sangat merekomendasikan Tripease kepada siapa pun yang ingin merencanakan perjalanan tanpa stres."'}/>
                </div>
            </div>

            <div 
                className="FAQ pb-[96px] bg-[#F9FAFB]"
                id='faq'>
                    <div className="bg-[#F9FAFB] justify-center flex">
                    <div className="text-center py-[64px] max-w-[70%] pt-[96]">
                        <p className="text-[32px] font-[700]">Frequently Asked Questions</p>
                        <p className="font-[400] pt-[16px]">Kami telah menyusun daftar pertanyaan umum yang sering diajukan oleh pengguna Tripease. Lihat di bawah untuk menemukan jawaban atas pertanyaan Anda dan mendapatkan informasi yang Anda butuhkan.</p>
                    </div>
                    </div>

                    <div className="bg-[#F9FAFB] justify-center flex">
                    <div className="">
                        <CardFAQ
                            text={'Apa yang membedakan Tripease dari platform perjalanan lainnya?'}
                            description={'Tripease menyediakan kombinasi fitur canggih dan antarmuka yang mudah digunakan untuk merencanakan perjalanan Anda. Dari penelusuran destinasi yang akurat hingga manajemen pemesanan yang efisien, kami menawarkan pengalaman perjalanan yang tak terlupakan.'}/>
                        <CardFAQ
                            text={'Bagaimana cara saya melakukan pemesanan melalui Tripease?'}
                            description={'Pemesanan melalui Tripease mudah dil akukan. Anda dapat memilih destinasi, tanggal perjalanan, dan preferensi lainnya, dan sistem kami akan menampilkan opsi terbaik untuk Anda. Setelah itu, Anda dapat melanjutkan dengan proses pembayaran yang aman dan nyaman.'}/>
                        <CardFAQ
                            text={'Apakah Tripease menyediakan ulasan pengguna?'}
                            description={'Ya, Tripease memiliki fitur ulasan pengguna yang memungkinkan pengguna lain berbagi pengalaman mereka. Anda dapat membaca ulasan dari pengguna lain untuk mendapatkan wawasan dan rekomendasi sebelum Anda membuat keputusan perjalanan.'}/>
                        <CardFAQ
                            text={'Bagaimana jika saya membutuhkan bantuan selama perjalanan saya?'}
                            description={'Tim dukungan pelanggan Tripease siap membantu Anda dengan pertanyaan atau masalah apa pun yang Anda hadapi selama perjalanan. Anda dapat menghubungi kami melalui layanan pelanggan 24/7 kami untuk mendapatkan bantuan yang dibutuhkan.'}/>
                        <CardFAQ
                            text={'Apakah Tripease menawarkan penawaran khusus atau diskon?'}
                            description={'Ya, Tripease menyediakan penawaran khusus dan diskon dari waktu ke waktu. Pastikan untuk mendaftar ke newsletter kami atau mengikuti akun media sosial kami untuk mendapatkan informasi terbaru tentang penawaran spesial.'}/>
                        <CardFAQ
                            text={'Bagaimana cara menghubungi tim dukungan pelanggan Tripease?'}
                            description={'Anda dapat menghubungi tim dukungan pelanggan Tripease melalui formulir kontak di halaman kami atau melalui email dan nomor telepon yang tercantum di situs kami. Tim kami siap membantu menjawab pertanyaan atau memberikan bantuan yang Anda butuhkan.'}/>
                    </div>
                    </div>
            </div>
            <Footer/>
    </div>
  )
}
