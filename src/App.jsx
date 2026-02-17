import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Home from './Page/Home'
import Header from './Page/Header'
import Footer from './Page/Footer'
import Hiw from './Page/Hiw'
import Architects from './Page/Architects'
import Articles from './Page/Articles'
import Des from './Page/Des'
const App = () => {
  // AOS
    useEffect (()=>{
      AOS.init({
        duration:1000,
        offset:100,
        once: false
      })
    }, [])
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hiw" element={<Hiw />} />
        <Route path="/dg" element={<Des />} />
        <Route path="/architects" element={<Architects/>} />
        <Route path="/articles" element={<Articles />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App