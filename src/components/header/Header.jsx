import React, { useEffect, useState } from 'react'
import './header.css'
import logo from '/logo.png'
import {MdClose, MdMenu} from 'react-icons/md'

const Header = () => {

    const [open ,setOpen] = useState(false);
    const handleClose = () =>{
        setOpen((prev) => prev===true? prev=false : prev=true  )
    }

    const [scrolled,setScrolled] = useState(false); //pour changer de couleur lorsque on scroll
    useEffect(()=>{
      const myScroll = () =>{
        if(window.scrollY > 200){
          setScrolled(true)
        }else{
          setScrolled(false)
        }}
        window.addEventListener("scroll", myScroll)
  
        return () =>{
          window.removeEventListener("scroll" , myScroll)
        }
      },[])

  return (
    <div className={`${scrolled&&'bg-slate-200 shadow-lg'} fixed bg-white z-50 w-full py-5`} >
        <div className='max-w-7xl mx-auto flex justify-between items-center px-7' >
            <a href="#home">
                <div className='flex items-center gap-1' >
                    <img src={logo} alt="logo du site" className='w-10 h-10' />
                    <h2 className='font-bold' >Noory</h2>
                </div>
            </a>

            <div className={`${!open&&'activer'} navbarResponsive flex md:flex-row md:static items-center gap-10 `} >
                <ul className='flex flex-col md:flex-row items-center gap-8 font-semibold relative optionContainer' >
                    <li onClick={()=>{handleClose()}}>
                        <a href="#home">Home</a>
                    </li>
                    <li onClick={handleClose}>
                        <a href="#repas">Plats</a>
                    </li>
                    <li onClick={handleClose}>
                        <a href="#about">A propo</a>
                    </li>
                    <li onClick={handleClose}>
                        <a href="#premiumDish">Menu</a>
                    </li>
                    <li onClick={handleClose}>
                        <a href="#customerReview">Critiques</a>
                    </li>
                </ul>

                <button
                  className='py-2 border border-green- text-green-500 px-5 rounded-3xl text-sm font-semibold hover:bg-green-600 hover:text-white hover:border-none duration-150'
                >Se connecter</button>
            </div>

            {
                open&& open?(
                    <MdClose className='buttonNav md:hidden' onClick={handleClose} />
                ):(
                    <MdMenu className='buttonNav md:hidden' onClick={handleClose} />
                )
            }
        </div>
    </div>
  )
}

export default Header
