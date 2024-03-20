import React from "react"
import image from './images/pizza.jpg'

const Card =()=>{
    return (
        <>
        <div className='w-[400px] border border-red-100 overflow-hidden rounded-xl'>
            <div className='h-[250px] overflow-hidden'>
            <img src={image} className='w-full h-full hover:scale-110 duration-500 object-cover' alt="img" />
            </div>
            <div className='p-4'>
                <h2 className='text-2xl font-semibold'>Classical Mushroom Capsicum</h2>
                <p className='text-[16px] pb-3'>Personal pizza topped with our classic pan sauce, </p>
                <div className='flex gap-4'>
                    <select>
                        <option value="">Half</option>
                        <option value="">Full</option>
                    </select>
                    <b>₹ 130</b>

                </div>

            </div>
        </div>

        
        
        </>
    )
}

export default Card