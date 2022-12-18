import React, { useContext } from 'react'
import { CartContext } from '../../../context/CartContext'

import { ReactComponent as ShoppingCart } from '../../../assets/shopping-bag.svg'
const CartIcon = () => {
    const {isOpen,setIsOpen,cartItems} = useContext(CartContext)

    const handleOpen = () =>{
        setIsOpen(!isOpen)
    
    }
  return (
    <>
    <div className='flex relative items-center cart-icon' onClick={handleOpen}>
            <div className='w-[24px]'><ShoppingCart/></div>
            <span className='absolute top-0 -right-2 text-[11px] bg-sky-400 text-white w-[15px] flex items-center justify-center h-[15px] rounded-[50%]'>
              {cartItems.reduce((total,item) => (total + item.quantity),0)}
            </span>
    </div>
    </>
    
  )
}

export default CartIcon