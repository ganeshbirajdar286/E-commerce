import React from 'react'
import "../search/style.css"
import Button from '@mui/material/Button';
import { IoSearchSharp } from "react-icons/io5";


function Search() {
  return (
    <>
    <div className='searchBox w-[100%] h-[50px] bg-[#e5e5e5] rounded-[5px] relative p-1'>
        <input type='text' placeholder='search for products....'  className='w-full h-[40px] focus:outline-none bg-inherit p-2 text-[17px] '></input>
       <Button className='!absolute top-[5px] right-[5px] z-50 !w-[40px] !min-w-[40px] h-[40px] hover:!bg-[#ff5252] '><IoSearchSharp className='text-black text-2xl hover:!text-white '/></Button>
    </div>
    </>
  )
}

export default Search