import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <section className="w-full py-10 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold" data-aos="fade-up" data-aos-duration="1000">WellnessVista</h2>
            <p className="text-gray-400" data-aos="fade-up" data-aos-duration="1200">Your trusted partner in health and wellness.</p>
          </div>

          <div className='flex justify-between items-center flex-col'>
            <h2 className="text-lg font-semibold" data-aos="fade-up" data-aos-duration="1400">About Us</h2>
            <div className='flex justify-between flex-col items-start mt-2 gap-3' data-aos="fade-up" data-aos-duration="1600">
              <Link to={'/hiw'} className='font-text relative'> <hr />how it works</Link>
              <Link to={'/dg'} className='font-text relative'><hr /> design gallery</Link>
              <Link to={'/architects'} className='font-text relative'><hr /> architects</Link>
              <Link to={'/articles'} className='font-text relative'><hr /> articles</Link>
            </div>
          </div>


          <div>
            <h2 className="text-lg font-semibold" data-aos="fade-up" data-aos-duration="1800">Services</h2>
            <ul className="mt-2 gap-4 text-gray-300 capitalize" data-aos="fade-up" data-aos-duration="2000">
              <li className="mb-1 hover:text-green-400 transition-colors cursor-pointer">build your dream house.</li>
              <li className="mb-1 hover:text-green-400 transition-colors cursor-pointer">build professional valuable room.</li>
              <li className="mb-1 hover:text-green-400 transition-colors cursor-pointer">build yoour need with archmove.</li>
              <li className="mb-1 hover:text-green-400 transition-colors cursor-pointer">Realize Your Dream project with archmove.</li>
            </ul>
          </div>


          <div>
            <h2 className="text-lg font-semibold" data-aos="fade-up" data-aos-duration="2200">Contact</h2>
            <p className="mt-2 text-gray-300" data-aos="fade-up" data-aos-duration="2400">123 Wellness St, Healthy City, HC 12345</p>
            <p className="mt-1 text-gray-300" data-aos="fade-up" data-aos-duration="2600">Email:
              <a href="mailto:contact@wellnessvista.com" className="text-green-400 hover:underline"> contact@wellnessvista.com</a>
            </p>
            <p className="mt-1 text-gray-300" data-aos="fade-up" data-aos-duration="2800">Phone: <a href="tel:+1234567890" className="text-green-400 hover:underline">+1 (234) 567-890</a></p>



          </div>
          <div className="flex space-x-4" data-aos="fade-up" data-aos-duration="3000">
            <a href="#" className="hover:text-green-400 transition-colors">Facebook</a>
            <a href="#" className="hover:text-green-400 transition-colors">Twitter</a>
            <a href="#" className="hover:text-green-400 transition-colors">Instagram</a>
          </div>
        </div>
        <div className="mt-6 text-center text-gray-500 text-sm" data-aos="fade-up" data-aos-duration="3200">
          &copy; {new Date().getFullYear()} WellnessVista. All rights reserved.
        </div>
      </div>
    </section>
  )
}

export default Footer