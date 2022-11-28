import React from 'react'
import './CategoryItem.css';

const CategoryItem = ({item}) => {
  return (
    <div className='categoryContainer'>
        <img src={item.img}/>
        <div className='Info'>
            <h1 className='categoryTitle'>{item.title}</h1>
            <button className='categoryButton'>SHOP NOW</button>
        </div>
    </div>
  )
}

export default CategoryItem