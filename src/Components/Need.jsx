import React from 'react'
import { RiShieldCheckLine } from "react-icons/ri";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { FaRegCircle } from "react-icons/fa";
import F1 from '../assets/f1.jpg'
const Need = () => {
  return (
     <section className="w-full overflow-hidden py-14 bg-slate-900">
                      <main className='container mt-12'>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                                  {/* family-left */}
                                  <div data-aos="fade-up" data-aos-delay="100">
                                        <img src={F1} alt="Family" className='md:w-[620px] sm:h-[470px] md:h-[620px] rounded-lg hover:scale-110 duration-300 ease-linear cursor-pointer' />
                                  </div>
    
                                  {/* family-right*/}
                                  <div className=' flex flex-col gap-4 items-start mt-7'>
                                        <h2 className="font-title" data-aos="fade-right" data-aos-delay="200">build yoour need with archmove</h2>
    
                                        <div className='flex justify-center gap-4 items-start'>
                                              <RiShieldCheckLine className='text-orange-500 w-[170px] h-[170px]' data-aos="fade-up" data-aos-delay="400" />
                                              <div>
                                                    <p className="font-desc mt-4" data-aos="fade-left" data-aos-delay="600">100% guaranted project completion</p>
                                                    <p className="font-desc mt-4" data-aos="fade-left" data-aos-delay="800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, labore aspernatur distinctio doloribus ipsa adipisci voluptatem laboriosam sequi? Consectetur magnam dicta eum asperiores commodi dolorem placeat praesentium!</p>
                                              </div>
                                        </div>
    
                                        <div className='flex justify-center gap-4 items-start'>
                                              <RiMoneyDollarCircleLine className='text-orange-500 w-[170px] h-[170px]' data-aos="fade-up" data-aos-delay="800" />
                                              <div>
                                                    <p className="font-desc mt-4" data-aos="fade-left" data-aos-delay="400">100% guaranted project completion</p>
                                                    <p className="font-desc mt-4" data-aos="fade-left" data-aos-delay="600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, labore aspernatur distinctio doloribus ipsa adipisci voluptatem laboriosam sequi? Consectetur magnam dicta eum asperiores commodi dolorem placeat praesentium!</p>
                                              </div>
                                        </div>
    
    
                                        <div className='flex justify-center gap-4 items-start'>
                                              <FaRegCircle className='text-orange-500 w-[170px] h-[170px]' data-aos="fade-up" data-aos-delay="1000" />
                                              <div>
                                                    <p className="font-desc mt-4" data-aos="fade-left" data-aos-delay="400">100% guaranted project completion</p>
                                                    <p className="font-desc mt-4" data-aos="fade-left" data-aos-delay="600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, labore aspernatur distinctio doloribus ipsa adipisci voluptatem laboriosam sequi? Consectetur magnam dicta eum asperiores commodi dolorem placeat praesentium!</p>
                                              </div>
                                        </div>
    
                                        <div data-aos="fade-up" data-aos-delay="1200">
                                              <button className="btn" >free consulation</button>
                                        </div>
                                  </div>
                            </div>
                      </main>
                </section>
  )
}

export default Need