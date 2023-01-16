import React, { useState } from 'react'
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./Search.css"
import {allProductData} from "../../constants/data"
import Pagination from '../Pagination/Pagination'

const Search = () => {
    const [filter, setFilter]=useState("");
    const [currentPage, setCurrentPage]=useState(1);
    const [postsPerPage, setPostsPerPage]=useState(8);

    const searchInputData=(event)=>{
      setFilter(event.target.value)
    };
    let dataSearch = allProductData.filter(item =>{
      return Object.keys(item).some(key=>
        item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
        )
    })

    const lastPostIndex= currentPage * postsPerPage;
    const firstPostIndex= lastPostIndex - postsPerPage;
    const currentPosts= dataSearch.slice(firstPostIndex, lastPostIndex);

    return (
      <>
         <Navbar />
         <div className='SearchBar'>
        <input 
            type="text"
            value={filter}
            placeholder='Search here...'
            onChange={searchInputData.bind(this)}
            className="SearchInput"
        />
    </div>
     <div className='newSearch'>
            <div className='searchContainer' >
            {currentPosts.map((item, index)=>{
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
              <button className='btn'>ADD TO CART</button>
            </div>
           </div>
          )
         })}
         </div>
        </div>
        <Pagination 
        totalPosts={dataSearch.length}
        postsPerPage={postsPerPage}  
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        />
        <Footer/>
      </>
      )
}
export default Search