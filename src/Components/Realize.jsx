import React from 'react'
import R1 from '../assets/r1.jpg'
const Realize = () => {
      return (
            <section className="w-full overflow-hidden py-14 bg-slate-900">
                  <div className="container mt-12">
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                              {/* realize-right */}
                              <div data-aos="fade-right" data-aos-delay="200" className='w-full h-[400px]'>
                                    <img src={R1} alt="Realize" className="w-full h-full object-cover rounded-lg shadow-lg" />
                              </div>


                              {/* realize-left */}
                              <div className='flex flex-col items-start gap-5'>
                                    <h2 className="font" data-aos="fade-left" data-aos-delay="200">Realize Your Dream project with <span className='span'>archmove</span></h2>
                                    <p className='uppercase text-white font-bold w-[200px] mx-auto mt-4 px-4 py-2 bg-orange-500 text-center rounded-lg' data-aos="fade-left" data-aos-delay="300">free consultation</p>
                              </div>
                        </div>
                  </div>
            </section>
      )
}

export default Realize