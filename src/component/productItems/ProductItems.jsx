
import React from 'react'
import "../productItems/style1.css"
import { Link } from 'react-router'  // Change to 'react-router-dom' if using newer versions
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { FaRegHeart } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";
import { MdOutlineZoomOutMap } from "react-icons/md";
import "../productItemsListView/style.css"
import { MdOutlineShoppingCart } from "react-icons/md";

function ProductItems() {
    return (
        <>
            <div className='producItems overflow-hidden rounded-2xl border-2 border-[#FF5252] w-[300px] '>
                <div className='group imgWrapper relative overflow-visible gap-6'>
                    <Link to="#">
                        <div className='img h-[350px] w-full relative '>
                            <img 
                                src="https://serviceapi.spicezgold.com/download/1742463096955_hbhb1.jpg" 
                                className='w-full block object-cover' 
                                alt='main shirt' 
                            />
                            <img 
                                src="https://serviceapi.spicezgold.com/download/1742463096956_hbhb2.jpg" 
                                className='w-full absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 object-cover' 
                                alt='hover shirt' 
                            />
                        </div>
                    </Link>

                    <span className='discount flex items-center absolute top-[10px] left-[10px] z-50 bg-[#ff5252] text-white rounded-lg text-[10px] p-1 font-bold'>
                        -$5.00
                    </span>

                    <div className='action absolute top-[-200px] right-[3px] z-50 flex items-center flex-col w-[50px] transition-all group-hover:top-[15px] duration-400 opacity-0 group-hover:opacity-100'>
                        <Button className='group'><MdOutlineZoomOutMap className='text-2xl' /></Button>
                        <Button><FaCodeCompare className='text-[20px]' /></Button>
                        <Button><FaRegHeart className='text-[20px]' /></Button>
                    </div>
                </div>

                <div className='info p-3 bg-gray-200 relative z-30'>
                    <h6 className='text-[13px] flex justify-start items-center'>
                        <Link to={"/"} className='link transition-all'>TRIPR</Link>
                    </h6>
                    <h3 className='text-[14px] title mt-2'>
                        <Link to={"/"} className='link transition-all'>Men Opaque Casual Shirt</Link>
                    </h3>
                    <Stack spacing={1}>
                        <Rating name="half-rating" defaultValue={2.5} precision={0.5} readOnly />
                    </Stack>
                    <div className='flex items-center gap-5'>
                        <span className='old-price line-through text-gray-700 font-bold'>$58.00</span>
                        <span className='new-price text-[#FF5252] font-bold'>$58.00</span>
                    </div>
                     <div className='mt-4  flex items-center justify-center'>
                        <Button 
                              variant="contained" 
                              className='!bg-[#FF5252] hover:!bg-red-600 text-white font-semibold px-6 py-2 rounded-lg w-fit '
                            >
                             <MdOutlineShoppingCart  className='text-2xl mr-3  '/> Add to Cart
                            </Button>
                     </div>
                </div>
            </div>
        </>
    )
}

export default ProductItems;    