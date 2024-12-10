import React from 'react'
import { menuPremium } from '../Assets/repas'
import Card from '../card/Card'

const PremuinDish = () => {
  return (
    <div className='max-w-7xl mx-auto flex flex-col items-center gap-5 mb-5' id='premiumDish' >
        <h1 className='text-4xl font-semibold text-center' >Menu Premuin</h1>
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5' >
        {
            menuPremium.map((item) => (
                <Card 
                    key={item.id}
                    image={item.image}
                    name={item.name}
                    index={item.id}
                    price={item.price}
                />
            ))
        }
       </div>
    </div>
  )
}

export default PremuinDish
