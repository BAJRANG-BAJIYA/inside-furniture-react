import React, { useState } from 'react'
import Navbar from "../../components/navbar/Navbar"
import "./Search.css"
import {allProductData} from "../../constants/data"

const Search = () => {
    const [data, setData]=useState("");

    const inputEvent=(e)=>{
       const inputValueData= e.target.value;
        console.log(inputValueData);
    };

  return (
    <>
    <Navbar/>
    <div className='SearchBar'>
        <input 
            type="text"
            value={data}
            placeholder='search here'
            onChange={inputEvent}
        />
    </div>
    </>
  )
}

export default Search