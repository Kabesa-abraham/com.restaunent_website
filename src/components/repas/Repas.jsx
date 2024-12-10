import React from 'react'
import Card from '../card/Card'
import { repas } from '../Assets/repas.js'

const Repas = () => {
  return (
    <div className='min-h-screen max-w-7xl mx-auto w-full flex flex-col items-center gap-8  my-10' id='repas'>
      <h1 className='text-4xl font-bold' >Nos Repas</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 ' >
        {
            repas.map((item) =>(
                <Card
                    key={item.id}
                    name={item.name}
                    image={item.image}
                    price={item.price}
                    index={item.id}
                />
            ))
        }
      </div>
    </div>
  )
}

export default Repas
