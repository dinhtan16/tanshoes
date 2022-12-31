import React from 'react'

import { ReactComponent as ShoppingCart } from '../../../assets/shopping-bag.svg'
import { useDispatch,useSelector } from 'react-redux'
import { setCartOpen } from '../../../store/cart/cartsSlice'

const CartIcon = () => {
    const dispatch = useDispatch()

    const isOpen = useSelector(state => state.cart.isOpen) 
  
    const cartItems = useSelector(state => state.cart.cartItems)
  
    const handleOpen = () =>{
        dispatch(setCartOpen(!isOpen))
    
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