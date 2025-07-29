import React from 'react'
import "../productItems/style1.css"
import { Link } from 'react-router-dom'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { FaRegHeart } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";

function ProductItemsListView() {
  return (
    <div className='flex flex-col md:flex-row bg-[#f5f5f5] rounded-xl overflow-hidden border border-[#FF5252] p-4 gap-6 w-full max-w-6xl mx-auto mb-6'>

      {/* Image Section */}
      <div className='relative w-full md:w-[300px]'>
        <Link to="#">
          <div className='relative h-full w-full'>
            <img 
              src="https://serviceapi.spicezgold.com/download/1742463096955_hbhb1.jpg" 
              className='w-full h-full rounded-lg object-cover' 
              alt='main shirt' 
            />
            <img 
              src="https://serviceapi.spicezgold.com/download/1742463096956_hbhb2.jpg" 
              className='absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 transition-opacity duration-500 object-cover rounded-lg' 
              alt='hover shirt' 
            />
          </div>
        </Link>

        <span className='absolute top-2 left-2 bg-[#ff5252] text-white rounded-lg text-[10px] px-2 py-1 font-bold z-10'>
          -$5.00
        </span>
      </div>

      {/* Info Section */}
      <div className='flex flex-col justify-center w-full'>
        <h6 className='text-[13px] text-gray-600 font-semibold mb-1'>
          <Link to="/" className='link transition-all'>TRIPR</Link>
        </h6>
        <h3 className='text-[18px] font-bold text-black mb-2'>
          <Link to="/" className='link transition-all'>Men Opaque Casual Shirt</Link>
        </h3>
        <p className='text-sm text-gray-700 mb-3'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>

        <Stack spacing={1} className='mb-3'>
          <Rating name="half-rating" defaultValue={2.5} precision={0.5} readOnly />
        </Stack>

        <div className='flex items-center gap-5 mb-4'>
          <span className='line-through text-gray-500 font-semibold'>$58.00</span>
          <span className='text-[#FF5252] font-semibold'>$53.00</span>
        </div>

        <div className='flex items-center gap-3 mb-4'>
          <Button className='!rounded-full !bg-white !text-black hover:!bg-[#ff5252] hover:!text-white shadow-md'>
            <MdOutlineZoomOutMap className='text-xl' />
          </Button>
          <Button className='!rounded-full !bg-white !text-black hover:!bg-[#ff5252] hover:!text-white shadow-md'>
            <FaCodeCompare className='text-lg' />
          </Button>
          <Button className='!rounded-full !bg-white !text-black hover:!bg-[#ff5252] hover:!text-white shadow-md'>
            <FaRegHeart className='text-lg' />
          </Button>
        </div>

        {/* ✅ Add to Cart Button */}
        <Button 
          variant="contained" 
          className='!bg-[#FF5252] hover:!bg-red-600 text-white font-semibold px-6 py-2 rounded-lg w-fit'
        >
         <MdOutlineShoppingCart  className='text-2xl mr-3'/> Add to Cart
        </Button>
      </div>
    </div>
  )
}

export default ProductItemsListView;
