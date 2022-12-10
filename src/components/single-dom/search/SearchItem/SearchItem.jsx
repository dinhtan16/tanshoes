import React from 'react'
import { Link } from 'react-router-dom'
import './searchItem.scss'
const SearchItem = ({data,onClick }) => {
    console.log(data)
  return ( 
    <Link to={`/shop/product/${data.ID}`} className='wrapper'  onClick={onClick}>
<div className='flex px-4 h-[100px]'>
        <div className='avatar'>
            <img src={data.url} alt={data.name} />
        </div>
        <div className='info'>
            <h4 className='name'>
                <span>{data.productName}</span>
            </h4>
</div>
        <span className='price'>{data.productPrice}$</span>
    </div>
    </Link>
  )
}

export default SearchItem