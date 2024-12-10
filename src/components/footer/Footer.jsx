import React from 'react'
import './footer.css'
import logo from '/logo.png'
import { MdEmail, MdPhone } from 'react-icons/md'
import { FaFacebook, FaInstagram, FaTwitch, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-[#091122da] rounded-t-2xl' >
      <div className=' max-w-7xl mx-auto  flex flex-col gap-5 items-center justify-center text-white px-10 py-10' >
        <div className='w-full flex flex-wrap items-start gap-10'>
            <div className='flex items-center gap-2' >
              <img src={logo} alt="" className='w-14 h-14' />
              <h3 className='font-bold text-xl' >Noory</h3>
            </div>

            <div className='w-full flex flex-wrap justify-around gap-7' >
              <div className='someOptionContainer'>
                <h3 className='titleOption' >Liens</h3>
                <ul className='someOptionContainerInside' >
                  <li>
                    <a href="#repas">Plats</a>
                  </li>
                  <li>
                    <a href="#about">A propo</a>
                  </li>
                  <li>
                    <a href="#premiumDish">Menu</a>
                  </li>
                  <li>
                    <a href="#customerReview">Critiques</a>
                  </li>
                </ul>
              </div>

              <div className='someOptionContainer' >
                <h3 className='titleOption' >Menu</h3>
                <ul className='someOptionContainerInside' >
                  <li>
                    <a href="#repas">Nos Plats</a>
                  </li>
                  <li>
                    <a href="#premiumDish">Menu Premium</a>
                  </li>
                </ul>
              </div>

              <div className='someOptionContainer' >
                <h3 className='titleOption' >Nous Contactez</h3>
                <div className='someOptionContainerInside' >
                  <p className='flex items-center' >
                    <MdEmail className='text-white' /> : NooryRestaurent@gmail.com
                  </p>
                  <p className='flex items-center' >
                    <MdPhone className='text-white' /> : +243 843 453 555
                  </p>
                  <span className='flex items-center justify-between gap-2 text-2xl' >
                    <a href="#"><FaFacebook/></a>
                    <a href="#"><FaInstagram/></a>
                    <a href="#"><FaTwitter/></a>
                    <a href="#"><FaYoutube/></a>
                  </span>
                </div>
              </div>
          </div>

        </div>
          <div className='text-gray-400 text-xs lg:text-sm'> 
            <p>&#169;copyright developpé par <span className='text-green-400' >KabesaYebula</span> |  All Right Reserved.</p> 
        </div>
      </div>
    </div>
  )
}

export default Footer
