import React from 'react'
import B1 from '../assets/b1.webp'
import B2 from '../assets/b2.jpg'
import B3 from '../assets/b3.jpg'
import B4 from '../assets/b4.avif'
import B5 from '../assets/b5.webp'
import B6 from '../assets/b6.jpg'
import B7 from '../assets/b7.jpg'
const Build = () => {
      return (
            <section className="w-full overflow-hidden py-14 bg-slate-900">
                  <div className="container mt-12 flex flex-col items-start gap-12">
                        {/* build-left */}
                        <div className='text-left'>
                              <h2 className="font-title" data-aos="fade-right" data-aos-delay="200">build professional valuable rom</h2>
                              <p className="text-slate-300 mt-4" data-aos="fade-left" data-aos-delay="400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                        </div>

                        {/* build-right */}
                        <div className='grid grid-cols-2 md:grid-cols-3 gap-12'>
                              <img src={B1} alt="Build Image 1" className='md:w-[320px] md:h-[320px] sm:h-[320px] rounded-lg hover:scale-110 duration-300 ease-linear cursor-pointer' data-aos="fade-up" data-aos-delay="200"/>
                              <img src={B2} alt="Build Image 2" className='md:w-[320px] md:h-[320px] sm:h-[320px] rounded-lg hover:scale-110 duration-300 ease-linear cursor-pointer' data-aos="fade-up" data-aos-delay="400"/>
                              <img src={B3} alt="Build Image 3" className='md:w-[320px] md:h-[320px] sm:h-[320px] rounded-lg hover:scale-110 duration-300 ease-linear cursor-pointer' data-aos="fade-up" data-aos-delay="600"/>
                              <img src={B4} alt="Build Image 4" className='md:w-[320px] md:h-[320px] sm:h-[320px] rounded-lg hover:scale-110 duration-300 ease-linear cursor-pointer' data-aos="fade-up" data-aos-delay="800"/>
                              <img src={B5} alt="Build Image 5" className='md:w-[320px] md:h-[320px] sm:h-[320px] rounded-lg hover:scale-110 duration-300 ease-linear cursor-pointer' data-aos="fade-up" data-aos-delay="1000"/>
                              <img src={B6} alt="Build Image 6" className='md:w-[320px] md:h-[320px] sm:h-[320px] rounded-lg hover:scale-110 duration-300 ease-linear cursor-pointer' data-aos="fade-up" data-aos-delay="1200"/>
                              <img src={B7} alt="Build Image 7" className='md:w-[320px] md:h-[320px] sm:h-[320px] rounded-lg hover:scale-110 duration-300 ease-linear cursor-pointer' data-aos="fade-up" data-aos-delay="1400"/>
                        </div>
                  </div>
            </section>
      )
}

export default Build