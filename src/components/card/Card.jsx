import React from 'react'
import fullStar from '../Assets/star_icon.png'
import fullncomStar from '../Assets/star_dull_icon.png'
import {motion} from 'framer-motion'

const Card = ({image,name,price,index}) => {
  return (
    <motion.div 
        className='max-w-[380px] relative' 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        viewport={{amount:0.5}}
        transition={{duration:.5,delay:.1*index}}
    >
      <div className='flex flex-col gap-6 p-7 shadow-xl rounded-xl' >
        <div className='overflow-hidden rounded-xl' >
            <img src={image} alt="" className='bg-orange-100 w-[320px] h-[220px] object-cover rounded-xl hover:scale-125 duration-150' />
        </div>
        <div className='flex flex-col items-center gap-4' >
            <h4 className='text-2xl font-bold' >{name}</h4>
            <div className='flex gap-2' >
                <img src={fullStar} alt="" />
                <img src={fullStar} alt="" />
                <img src={fullStar} alt="" />
                <img src={fullStar} alt="" />
                <img src={fullncomStar} alt="" />
            </div>
            <div className='w-full flex justify-between items-center px-5' >
                <p className='text-xl font-bold' >${price}</p>
                <button  
                  className='border-2 border-green-500 text-green-500 rounded-3xl font-semibold py-2 px-14 hover:text-white hover:bg-green-500 duration-200'
                > Acheter </button>
            </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Card
