import React from 'react'
import { IoBedOutline } from "react-icons/io5";
import { FaBath } from "react-icons/fa";
import { FaKitchenSet } from "react-icons/fa6";
import { MdLiving } from "react-icons/md";
import { BiCloset } from "react-icons/bi";
import { PiSwimmingPoolDuotone } from "react-icons/pi";
const Grid = () => {
      return (
            <section className="w-full overflow-hidden py-14 bg-slate-900">
                  <div className="container">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                              {/* Grid Item 1 */}
                              <div className="bg-slate-800 p-6 rounded-lg shadow-lg hover:-translate-y-7 hover:opacity-60 cursor-not-allowed duration-300 ease-linear" data-aos="fade-up" data-aos-duration="1000">
                                    <div className='flex gap-3 items-center mb-4'>
                                          <IoBedOutline className="text-4xl text-gray-300" />
                                          <h3 className="font-title text-white">Bedroom</h3>
                                    </div>
                                    <p className="font-text mt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, temporibus quas ipsam praesentium totam quisquam minima doloremque, enim suscipit, impedit omnis provident veritatis adipisci est ea obcaecati. Velit quam illum ab ad beatae, sapiente repudiandae reiciendis officiis, facere iste cupiditate molestias qui laborum, eum eos aut blanditiis!</p>
                              </div>
                              {/* Grid Item 2 */}
                              <div className="bg-slate-800 p-6 rounded-lg shadow-lg hover:-translate-y-7 hover:opacity-60 cursor-not-allowed duration-300 ease-linear" data-aos="fade-up" data-aos-duration="1200">
                                    <div className='flex gap-3 items-center mb-4'>
                                          <FaBath className="text-4xl text-gray-300" />
                                          <h3 className="font-title text-white">Bathroom</h3>
                                    </div>
                                    <p className="font-text mt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, temporibus quas ipsam praesentium totam quisquam minima doloremque, enim suscipit, impedit omnis provident veritatis adipisci est ea obcaecati. Velit quam illum ab ad beatae, sapiente repudiandae reiciendis officiis, facere iste cupiditate molestias qui laborum, eum eos aut blanditiis!</p>
                              </div>
                              {/* Grid Item 3 */}
                              <div className="bg-slate-800 p-6 rounded-lg shadow-lg hover:-translate-y-7 hover:opacity-60 cursor-not-allowed duration-300 ease-linear" data-aos="fade-up" data-aos-duration="1400">
                                    <div className='flex gap-3 items-center mb-4'>
                                          <FaKitchenSet className="text-4xl text-gray-300" />
                                          <h3 className="font-title text-white">Kitchen</h3>
                                    </div>
                                    <p className="font-text mt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, temporibus quas ipsam praesentium totam quisquam minima doloremque, enim suscipit, impedit omnis provident veritatis adipisci est ea obcaecati. Velit quam illum ab ad beatae, sapiente repudiandae reiciendis officiis, facere iste cupiditate molestias qui laborum, eum eos aut blanditiis!</p>
                              </div>
                              {/* Grid Item 4 */}
                              <div className="bg-slate-800 p-6 rounded-lg shadow-lg hover:-translate-y-7 hover:opacity-60 cursor-not-allowed duration-300 ease-linear" data-aos="fade-up" data-aos-duration="1600">
                                    <div className='flex gap-3 items-center mb-4'>
                                          <MdLiving className="text-4xl text-gray-300" />
                                          <h3 className="font-title text-white">Living Room</h3>
                                    </div>
                                    <p className="font-text mt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, temporibus quas ipsam praesentium totam quisquam minima doloremque, enim suscipit, impedit omnis provident veritatis adipisci est ea obcaecati. Velit quam illum ab ad beatae, sapiente repudiandae reiciendis officiis, facere iste cupiditate molestias qui laborum, eum eos aut blanditiis!</p>
                              </div>
                              {/* Grid Item 5 */}
                              <div className="bg-slate-800 p-6 rounded-lg shadow-lg hover:-translate-y-7 hover:opacity-60 cursor-not-allowed duration-300 ease-linear" data-aos="fade-up" data-aos-duration="1800">
                                    <div className='flex gap-3 items-center mb-4'>
                                          <BiCloset className="text-4xl text-gray-300" />
                                          <h3 className="font-title text-white">Closet</h3>
                                    </div>
                                    <p className="font-text mt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, temporibus quas ipsam praesentium totam quisquam minima doloremque, enim suscipit, impedit omnis provident veritatis adipisci est ea obcaecati. Velit quam illum ab ad beatae, sapiente repudiandae reiciendis officiis, facere iste cupiditate molestias qui laborum, eum eos aut blanditiis!</p>
                              </div>
                              {/* Grid Item 6 */}
                              <div className="bg-slate-800 p-6 rounded-lg shadow-lg hover:-translate-y-7 hover:opacity-60 cursor-not-allowed duration-300 ease-linear" data-aos="fade-up" data-aos-duration="1800">
                                    <div className='flex gap-3 items-center mb-4'>
                                          <PiSwimmingPoolDuotone className="text-4xl text-gray-300" />
                                          <h3 className="font-title text-white">Swimming Pool</h3>
                                    </div>
                                    <p className="font-text mt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, temporibus quas ipsam praesentium totam quisquam minima doloremque, enim suscipit, impedit omnis provident veritatis adipisci est ea obcaecati. Velit quam illum ab ad beatae, sapiente repudiandae reiciendis officiis, facere iste cupiditate molestias qui laborum, eum eos aut blanditiis!</p>
                              </div>
                        </div>
                  </div>
            </section>
      )
}

export default Grid