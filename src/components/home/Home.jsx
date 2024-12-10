import React from 'react'
import bgImge from '../Assets/hero.jpg'
import {motion} from 'framer-motion'

const Home = () => {
  return (
    <div className='relative max-w-full min-h-screen' id='home'>
        <img src={bgImge} alt="" className='w-full min-h-screen object-cover' />
        <div className='absolute w-full h-full top-0 text-white flex items-center' >
            <div className='max-w-7xl w-full mx-auto px-10' >
                <div className='max-w-3xl flex flex-col  gap-7' >
                    <motion.h1 
                        className='text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-orange-100 relative' 
                        initial={{opacity:0,left:-100}}
                        whileInView={{opacity:1,left:0}}
                        viewport={{amount:0.5}}
                        transition={{duration:.8,delay:.2}}
                    >Elève ta gourmendise interieur avec un petit bouchet.</motion.h1>

                    <motion.p 
                        className='text-xs sm:text-sm font-semibold relative' 
                        initial={{opacity:0,left:-100}}
                        whileInView={{opacity:1,left:0}}
                        viewport={{amount:0.5}}
                        transition={{duration:.8,delay:.4}}
                        >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, quidem suscipit mollitia, 
                        sed voluptatem corporis nihil enim voluptatibus debitis necessitatibus tenetur alias quam fuga sapiente.
                         Iure eligendi magni veniam magnam.
                    </motion.p>
                    <motion.button
                        className='w-60 self-center text-green-500 py-3 border-2 border-green-500 text-sm font-semibold rounded-3xl hover:text-white hover:bg-green-500 
                                    duration-150 relative'
                        initial={{opacity:0,left:-100}}
                        whileInView={{opacity:1,left:0}}
                        viewport={{amount:0.5}}
                        transition={{duration:.5,delay:.6}}
                        >Commander Maintenant
                    </motion.button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home
