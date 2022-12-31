import React from 'react'
import {FaTimes} from 'react-icons/fa'

import { useDispatch } from 'react-redux';
import { deleteItem } from '../../../store/cart/cartsSlice';
const CardItem = ({item}) => {
    const {  productPrice, productName, url } = item;

    // const {imgUrl,name,price} = item
    // const {deleteItemToCart} = useContext(CartContext)
    // const deleteItem = () => deleteItemToCart(item)
    const dispatch=useDispatch()
  return (
   <>
   <div className='flex justify-between items-center mt-6 px-4 z-10'>
    <div className="item-left flex gap-2">
        <img src={url} alt="none" className='w-[60px] h-[60px]'/>
        <div className="item-left__info font-light">
            <div className="name">
                {productName}
            </div>
            <span className='font-bold'>Size :{item.selectedSize}</span>
            <div className="quantity text-sm">Qty: {item.quantity}</div>
        </div>
    </div>
    <div className="item-right flex items-center gap-4">
        <div className="price">{productPrice}$</div>
        <div className="delete cursor-pointer" onClick={() => dispatch(deleteItem(item))} ><FaTimes/></div>
    </div>
 
</div>
   </>
  )
}

export default CardItem