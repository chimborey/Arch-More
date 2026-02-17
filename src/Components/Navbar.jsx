import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { MdCloseFullscreen } from "react-icons/md";
const Navbar = () => {

      // scroll event listener to add shadow to navbar
      const [isScrolled, setIsScrolled] = React.useState(false);
      useEffect (() =>{
            const handleScroll = () =>{
                  setIsScrolled (window.scrollY > 50);
            }
            window.addEventListener('scroll', handleScroll)
            return () => {
                  window.removeEventListener('scroll', handleScroll)
            }
      })

      // MENUClick
      const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    
    <section className={`w-full top-0 left-0 z-50 backdrop-blur-md shadow-md fixed border-slate-700 ${isScrolled ? '' : 'bg-black'}`}>
      <nav className='container flex justify-between items-center h-14' data-aos="zoom-in" data-aos-duration="1000">
            {/* logo */}
            <Link to={'/'} className='font-title'>Arch More</Link>

            {/* menu */}
            <div className='py-14 hidden md:block'>
                  <div className='flex space-x-8'>
                        <Link to={'/hiw'} className='font-text relative'> <hr/>how it works</Link>
                        <Link to={'/dg'} className='font-text relative'><hr/> design gallery</Link>
                        <Link to={'/architects'} className='font-text relative'><hr/> architects</Link>
                        <Link to={'/articles'} className='font-text relative'><hr/> articles</Link>
                  </div>
            </div>

            {/* burger */}
            <div className='md:hidden cursor-pointer'>
                  {isMenuOpen ? <MdCloseFullscreen size={25} className='text-slate-800' onClick={()=>setIsMenuOpen(!isMenuOpen)}/> : <GiHamburgerMenu size={25} className='text-slate-800' onClick={()=>setIsMenuOpen(!isMenuOpen)}/>}
            </div>
      </nav>

      {/* mobile menu */}
        <div className={`md:hidden absolute w-full bg-black -left-[500px] py-14 transition-all duration-300 ${isMenuOpen ? 'left-[0px]' : '-left-[-550px]'}`}>
                  <div className='flex flex-col justify-center items-center space-y-8'>
                        <Link to={'/hiw'} className='font-text relative'> <hr/>how it works</Link>
                        <Link to={'/dg'} className='font-text relative'><hr/> design gallery</Link>
                        <Link to={'/architects'} className='font-text relative'><hr/> architects</Link>
                        <Link to={'/articles'} className='font-text relative'><hr/> articles</Link>
                  </div>
            </div>
    </section>
  )
}

export default Navbar