import React from 'react'
import '../../styles/categories.style.scss'
const Category = ({title,image}) => {
  return (
    
        <div className="category-container">
            <div className="background-image" style={{backgroundImage: `url(${image})`}}></div>
            <div className="category-content">
                <h2>{title}</h2>
                <h3>Shop Now</h3>
            </div>
        </div>
    
  )
}

export default Category