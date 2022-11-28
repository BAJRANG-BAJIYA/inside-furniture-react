import React, { useState } from 'react'
import './CategoryItem.css'
import featured from "../../constants/data";
import CategoryItem from './CategoryItem';
const Categories = () => {
let categoryData=featured;

  return (
    <div className="categoriesContainer" >
        { categoryData && categoryData.map(item=>(
            <CategoryItem item ={item} key={item.id} /> ))}
    </div>
  )
}

export default Categories;