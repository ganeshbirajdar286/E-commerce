import React, { useState } from 'react'
import "../sideBar/style.css"
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Collapse } from 'react-collapse';
import { IoIosArrowDropdownCircle } from "react-icons/io";
import Button from '@mui/material/Button';
import { IoIosArrowDropupCircle } from "react-icons/io";
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack'

function SideBar() {
  const [open, setOpen] = useState(true)
  const [availability, setAvailability] = useState(true)
  const [size, setSize] = useState(true)
  const product = ["Fashion", "Electronics", "Bags", "Footwear", "Groceries", "Beauty", "Wellness", "Jewellery"]
  const availableProduct = ["Available", "in stock", "not Available"]
  const sizeProducts = ["Small", "Large", "XL", "XXL"]
  const sizeProduct = () => {
    setSize(!size)
  }
  const collapseBar = () => {
    setOpen(!open)
  }
  const Available = () => {
    setAvailability(!availability)
  }
  return (
    <>
      <aside className='sidebar py-5 '>
        <div className='box'>
          <h3 className='mb-3 text-[18px] text-[#3E3E3E] font-bold flex gap-2 justify-center items-center'>Shop By Category
            <Button onClick={collapseBar} className=' !text-[20px] !text-[#ff5252]  !rounded-full !min-w-[30px]' >{open ? <IoIosArrowDropdownCircle /> : <IoIosArrowDropupCircle />}</Button>
          </h3>
          <Collapse isOpened={open}>
            <div className='scroll '>
              {product.map((product, index) => (
                <div key={index} className='w-full'>
                  <FormControlLabel control={<Checkbox sx={{
                    color: '#ff5252',
                    '&.Mui-checked': {
                      color: '#ff5252',
                    },
                    '& .MuiSvgIcon-root': { fontSize: 20 }
                  }} />} label={product} />
                </div>
              ))}
            </div>
          </Collapse>
        </div>

        <div className='box mt-3'>
          <h3 className='mb-3 text-[18px] text-[#3E3E3E] font-bold flex gap-2 justify-center items-center'>Availability
            <Button onClick={Available} className=' !text-[20px] !text-[#ff5252]  !rounded-full !min-w-[30px]' >{availability ? <IoIosArrowDropdownCircle /> : <IoIosArrowDropupCircle />}</Button>
          </h3>
          <Collapse isOpened={availability}>
            <div className='scroll '>
              {availableProduct.map((product, index) => (
                <div key={index} className='w-full'>
                  <FormControlLabel control={<Checkbox sx={{
                    color: '#ff5252',
                    '&.Mui-checked': {
                      color: '#ff5252',
                    },
                    '& .MuiSvgIcon-root': { fontSize: 20 }
                  }} />} label={product} />
                </div>
              ))}
            </div>
          </Collapse>
        </div>

        <div className='box mt-3'>
          <h3 className='mb-3 text-[18px] text-[#3E3E3E] font-bold flex gap-2 justify-center items-center'>Size
            <Button onClick={sizeProduct} className=' !text-[20px] !text-[#ff5252]  !rounded-full !min-w-[30px]' >{size ? <IoIosArrowDropdownCircle /> : <IoIosArrowDropupCircle />}</Button>
          </h3>
          <Collapse isOpened={size}>
            <div className='scroll '>
              {sizeProducts.map((product, index) => (
                <div key={index} className='w-full'>
                  <FormControlLabel control={<Checkbox sx={{
                    color: '#ff5252',
                    '&.Mui-checked': {
                      color: '#ff5252',
                    },
                    '& .MuiSvgIcon-root': { fontSize: 20 }
                  }} />} label={product} />
                </div>
              ))}
            </div>
          </Collapse>
        </div>

        <div className='box mt-3'>
          <h3 className='w-full mb-3 text-[16px] font-[600] flex items-center  pr-5'>
            Filter By Price
          </h3>
          <RangeSlider />
          <div className='flex pt-2 pb-2 priceRange'>
            <span className='text-[13px]'>
              From:<strong className='text-dark'>Rs:{100}</strong>
            </span>
            <span className='ml-auto text-[13px]'>
              From: <strong className='text-dark'>Rs: {5000}</strong>
            </span>
          </div>

        </div>

        <div className='box mt-3'>
          <h3 className='w-full mb-3 text-[16px] font-[600] flex items-center  pr-5'>
            Filter By Rating
          </h3>
          <div className='flex pt-2 pb-2 priceRange'>
            <span >
              <Stack spacing={1}>
                 <FormControlLabel control={<Checkbox sx={{
                    color: '#ff5252',
                    '&.Mui-checked': {
                      color: '#ff5252',
                    },
                    '& .MuiSvgIcon-root': { fontSize: 20 }
                  }} />} label={<Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />} />
                
                <FormControlLabel control={<Checkbox sx={{
                    color: '#ff5252',
                    '&.Mui-checked': {
                      color: '#ff5252',
                    },
                    '& .MuiSvgIcon-root': { fontSize: 20 }
                  }} />} label={<Rating name="half-rating-read" defaultValue={4} precision={0.5} readOnly />} />
                  <FormControlLabel control={<Checkbox sx={{
                    color: '#ff5252',
                    '&.Mui-checked': {
                      color: '#ff5252',
                    },
                    '& .MuiSvgIcon-root': { fontSize: 20 }
                  }} />} label={<Rating name="half-rating-read" defaultValue={3} precision={0.5} readOnly />} />
                  <FormControlLabel control={<Checkbox sx={{
                    color: '#ff5252',
                    '&.Mui-checked': {
                      color: '#ff5252',
                    },
                    '& .MuiSvgIcon-root': { fontSize: 20 }
                  }} />} label={<Rating name="half-rating-read" defaultValue={2} precision={0.5} readOnly />} />
                  <FormControlLabel control={<Checkbox sx={{
                    color: '#ff5252',
                    '&.Mui-checked': {
                      color: '#ff5252',
                    },
                    '& .MuiSvgIcon-root': { fontSize: 20 }
                  }} />} label={    <Rating name="half-rating-read" defaultValue={1} precision={0.5} readOnly />} />
                
                
                
            

              </Stack>
            </span>
          </div>
        </div>
      </aside>
    </>
  )
}

export default SideBar