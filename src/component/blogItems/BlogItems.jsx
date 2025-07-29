import React from 'react'
import { IoIosTime } from "react-icons/io";
import { FaChevronRight } from "react-icons/fa";
import { Link } from 'react-router';

function BlogItems() {
  return (
    <div className='blogItem group'  >
        <div className='imgWrapper overflow-hidden rounded-md pb-4 w-full relative' >
            <img src="https://serviceapi.spicezgold.com/download/1750304462017_1000005912.jpg" alt='blog1' className='w-full transition-all group-hover:!scale-120 group-hover:rotate-2'></img>
            <span className='absolute flex items-center justify-center bottom-[25px] right-3 text-white
             text-[12px] bg-[#FF5252] gap-1 p-1 rounded-full'><IoIosTime />2025-03-12</span>
        </div>
        <div className='info py-2  '>
            <h2 className='hover:text-[#FF5252]  text-left font-bold transition-all text-[15px]'><Link to="/">sustainable living through cutting-edge prefabricated homes</Link></h2>
            <h3 className='text-left text-[#3E3E3E] text-[15px] mb-5'>Give2 lady of they such they sure it. Me contained explained my education. Vulgar as hearts by ...</h3>
            <h5 className=' gap-2 text-[14px] py-2 text-left hover:text-[#ff5252] font-bold transition-all'><Link to="/" className='flex items-center'>Read More <FaChevronRight /></Link> </h5>
        </div>
    </div>
  )
}

export default BlogItems