import React from 'react'

const CardReview = ({name,imgProfile,comment}) => {
  return (
    <div 
        className='max-w-[380px] relative hover:scale-105 duration-150' 
     >
        <div className='flex flex-col gap-6 p-7 shadow-sm shadow-gray-600 rounded-xl' >
            <div className='overflow-hidden rounded-xl' >
             <p className='text-gray-500' >{comment}</p>
            </div>
            <div className='flex justify-center items-center gap-5' >
               <img src={imgProfile} alt="" className='w-12 h-12 object-cover rounded-full bg-orange-200' />
               <h4 className='text-lg font-bold' >{name}</h4>
            </div>
        </div>
    </div>
  )
}

export default CardReview
