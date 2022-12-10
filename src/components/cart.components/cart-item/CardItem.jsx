import React from 'react'
import { useContext } from 'react'
import {FaTimes} from 'react-icons/fa'
import { CartContext } from '../../../context/CartContext'
const CardItem = ({item}) => {
    const {  productPrice, productName, url } = item;

    // const {imgUrl,name,price} = item
    const {deleteItemToCart} = useContext(CartContext)
    const deleteItem = () => deleteItemToCart(item)
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
        <div className="delete cursor-pointer" onClick={deleteItem} ><FaTimes/></div>
    </div>
 
</div>
   </>
  )
}

export default CardItem