import React from 'react'
import Category from '../category/Category';
function Directory() {
    const categories = [
        {
          id: 1,
          title: "Hats",
          image:'https://images.pexels.com/photos/4226881/pexels-photo-4226881.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
          id: 2,
          title: "Mens",
          image:'https://images.pexels.com/photos/3844788/pexels-photo-3844788.jpeg?auto=compress&cs=tinysrgb&w=600'
        },  {
          id: 3,
          title: "Womens",
          image:'https://images.pexels.com/photos/4194850/pexels-photo-4194850.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
          id: 4,
          title: "Pants",
          image:'https://images.pexels.com/photos/3737018/pexels-photo-3737018.jpeg?auto=compress&cs=tinysrgb&w=600'
        },  {
          id: 5,
          title: "Shirts",
          image:'https://images.pexels.com/photos/4016579/pexels-photo-4016579.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
      ];
  return (
    <div className="categories-container">
      {
        categories.map(({id,title,image}) => (
          <Category key={id} title={title} className='categories-container' image={image}/>
        ))
      }
   </div>
  )
}

export default Directory