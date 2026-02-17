import React from 'react'
import H1 from '../assets/h1.webp'
const Hero = () => {
      return (
            <section className="overflow-hidden w-full bg-slate-900 py-14">
                  <main className='container mt-12 overflow-hidden justify-center items-center flex'>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                              {/* hero-left */}
                              <div className='flex flex-col justify-center items-start'>
                                    <h1 className='text-7xl font-title' data-aos="zoom-in" data-aos-delay="100">build your dream house</h1>
                                    <p className='text-slate-300 mt-4' data-aos="zoom-in" data-aos-delay="200">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime numquam itaque fugit exercitationem dolorum? Sit aut saepe harum iure quos exercitationem soluta esse iste, ad possimus voluptatem magni ipsum praesentium.</p>

                                    <div className='mt-8' data-aos="zoom-in" data-aos-delay="300">
                                          <button className='btn'>free consultation</button>
                                    </div>
                              </div>

                              {/* hero-right */}
                              <div className='mt-12' data-aos="zoom-in" data-aos-delay="400">
                                    <img src={H1} alt="hero image" className='w-full h-full object-cover rounded-lg' />
                              </div>
                        </div>
                  </main>
            </section>
      )
}

export default Hero