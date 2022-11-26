import React, { useState } from 'react'
import Navbar from "../../components/navbar/Navbar"
import "./Search.css"
import {allProductData} from "../../constants/data"

const Search = () => {
    const [filter, setFilter]=useState("");

    const searchInputData=(event)=>{
      setFilter(event.target.value)
    };
    let dataSearch = allProductData.filter(item =>{
      return Object.keys(item).some(key=>
        item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
        )
    })

    return (
      <>
         <Navbar />
         <div className='SearchBar'>
        <input 
            type="text"
            value={filter}
            placeholder='Search here...'
            onChange={searchInputData.bind(this)}
        />
    </div>
     <div className='newSearch'>
            <div className='searchContainer' >
            {dataSearch.map((item, index)=>{
          return(
           <div className="card" key={item.id}>
           <div className="imgBx">
            <img src={item.img} />
           </div>
            <div className='content'>
              <div className='productName'>
                <h3>{item.productName}</h3>
              </div>
              <div className='priceRating'>
                <h2>{item.price}</h2>
                <div className='rating'>
                {/* <FontAwesomeIcon icon="fa-solid fa-star" />
                <FontAwesomeIcon icon="fa-solid fa-star" />
            */}
                </div>
              </div>
              <button>ADD TO CART</button>
            </div>
           </div>
          )
         })}
         </div>
        </div>
      </>
      )
}
export default Search