import React, { useState } from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router'
import ProductZoom from '../../component/ProductZoom/ProductZoom';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import QtBox from '../../component/QtBox/QtBox';
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaCodeCompare } from "react-icons/fa6";
import ProductReview from '../../component/ProductReview/ProductReview';
import ProductsSlider from '../../component/productsSlider/ProductsSlider';

function ProductDetails() {
  const [ProductActionIndex, setProductActionIndex] = useState(null)
  const [view, setView] = useState("description");

  return (
    <>
      <div className='py-3'>
        <div className='container '>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/" className='link transition-all
        '>
              Home
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/"
              className='link transition-all'
            >
              Fashion
            </Link>
          </Breadcrumbs>
        </div>
      </div>
      <section className='bg-white py-5'>
        <div className='container flex gap-4'>
          <div className='productZoomContainer '>
            <ProductZoom />
          </div>
          <div className='ProductContent w-[60%] p-8'>
            <h1 className='text-[30px] font-[600]'>Floral Embroidered Saree</h1>
            <div className='flex items-center gap-4'>
              <span className=' text-[17px] text-gray-400'>Brands : <span className=' text-[17px] text-black'>kasee</span></span>
              <span><Rating name="half-rating" defaultValue={2.5} precision={0.5} readOnly /></span>
              <span className='cursor-pointer text-[#666]'>Review (1)</span>
            </div>
            <div className='flex items-center gap-5 mt-5'>
              <span className='old-price line-through text-gray-400 font-bold text-2xl'>₹2999</span>
              <span className='new-price text-[#FF5252] font-bold text-2xl'>₹3250</span>
              <span className='text-[15px] text-[#666]'>Available In Stock:<span className='text-[15px] text-green-500'>144 items</span></span>

            </div>
            <div className='mt-3'>
              <p className='text-[#666]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.ac</p>
            </div>

            <div className='flex items-center gap-3 mt-3'>
              <span className='text-[16px] text-[#666] '>Size:</span>
              <Button className={`${ProductActionIndex === 0 && "!bg-[#ff5252] !text-white "} !text-[#000]  !h-[full] !border-2 !w-[full]  !border-solid !border-black `} onClick={() => setProductActionIndex(0)}>S</Button>
              <Button className={`${ProductActionIndex === 1 && "!bg-[#ff5252] !text-white "} !text-[#000]  !h-[full] !border-2 !w-[full]  !border-solid !border-black `} onClick={() => setProductActionIndex(1)} >M</Button>
              <Button className={`${ProductActionIndex === 2 && "!bg-[#ff5252] !text-white "} !text-[#000]  !h-[full] !border-2 !w-[full]  !border-solid !border-black `} onClick={() => setProductActionIndex(2)}>L</Button>
              <Button className={`${ProductActionIndex === 3 && "!bg-[#ff5252] !text-white "} !text-[#000]  !h-[full] !border-2 !w-[full]  !border-solid !border-black `} onClick={() => setProductActionIndex(3)}>XL</Button>
            </div>

            <div className='mt-4'>
              <h3>Free Shipping (Est. Delivery Time 2-3 Days)</h3>
            </div>

            <div className='flex items-center'>
              <div className='qty w-[50px]'>
                <QtBox />
              </div>
              <Button
                variant="contained"
                className='!bg-[#FF5252] hover:!bg-red-600 text-white font-semibold px-6 py-2 rounded-lg w-fit !ml-10 !mt-3'
              >
                <MdOutlineShoppingCart className='text-2xl mr-3' /> Add to Cart
              </Button>
            </div>
            <div className='flex items-center mt-12 gap-10 cursor-pointer '>
              <div>
                <p className='flex items-center justify-center text-[20px] gap-3 hover:text-[#ff5252]'>
                  <span><FaRegHeart /></span>
                  Add to Wishlist
                </p>
              </div>

              <div>
                <p className='flex items-center justify-center text-[20px] gap-3 hover:text-[#ff5252]'>
                  <span><FaCodeCompare /></span>
                  Add to Compare
                </p>
              </div>
            </div>

          </div>
        </div>
        <div className='container pt-10'>
          <div className='flex items-center gap-4 mb-7'>
            <span className={`link text-[20px] cursor-pointer font-[500] ${view === 'description' ? 'color-primary' : 'text-[#3E3E3E]'} `} onClick={() => setView("description")}>Description</span>
            <span className={`link text-[20px] cursor-pointer font-[500] ${view === 'reviews' ? 'color-primary' : 'text-[#3E3E3E]'} `} onClick={() => setView("reviews")}>Reviews (1)</span>
          </div>

          {view === "description" ? (
            <div className='shadow-[0_35px_35px_rgba(0,0,0,0.4)] w-full p-5 rounded-md'>
              <p className='font-[500] text-[18px]'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry...
              </p>
            </div>
          ) : (
            <ProductReview />
          )}

          <section className='py-5 bg-white mt-10'>
            <div className='container '>
              <h3 className='font-[500] text-[30px] text-gray-600'>Related Products</h3>
              <ProductsSlider items={4} />
            </div>
          </section>


        </div>
      </section>
    </>
  )
}

export default ProductDetails