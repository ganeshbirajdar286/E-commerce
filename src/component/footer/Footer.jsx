import React from 'react'
import { LiaShippingFastSolid } from "react-icons/lia";
import { PiKeyReturnLight } from "react-icons/pi";
import { IoWalletOutline } from "react-icons/io5";
import { FaGift } from "react-icons/fa";
import { MdOutlineHeadsetMic } from "react-icons/md";
import { Link } from 'react-router';
import { IoChatbubbleOutline } from "react-icons/io5";
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import { FaFacebookF } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io5";



function Footer() {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const product = [
    "Prices drop", "New products", "Best sales", "Contact us", "Sitemap", "Stores"
  ]
  const company = [
    "Delivery", "Legal Notice", "Terms and conditions of use", "About us", "Secure payment", "Login"
  ]
  return (
    <>
      <div className='py-6 mt-10 bg-white    '>
        <div className=' container  '>
          <div className=' flex justify-evenly items-center   '>
            <div className='flex items-center justify-center gap-2'>
              <div className='col text-center flex justify-center items-center flex-col group'>
                <LiaShippingFastSolid className='text-[50px] group-hover:text-[#FF5252] transition-all duration-300 group-hover:translate-y-3' />
                <h3 className='text-[18px] font-[600] mt-4'>Free Shipping</h3>
                <p className='text-[14px] font-[500] text-gray-500'>For all Orders Over $100</p>
              </div>
            </div>

            <div className='flex items-center justify-center gap-2'>
              <div className='col text-center flex justify-center items-center flex-col group'>
                <PiKeyReturnLight className='text-[50px] group-hover:text-[#FF5252] transition-all duration-300 group-hover:translate-y-3' />
                <h3 className='text-[18px] font-[600] mt-4'>30 Days Returns</h3>
                <p className='text-[14px] font-[500] text-gray-500'>30 Days Returns
                  For an Exchange Product</p>
              </div>
            </div>

            <div className='flex items-center justify-center gap-2'>
              <div className='col text-center flex justify-center items-center flex-col group'>
                <IoWalletOutline className='text-[50px] group-hover:text-[#FF5252] transition-all duration-300 group-hover:translate-y-3' />
                <h3 className='text-[18px] font-[600] mt-4'>Secured Payment</h3>
                <p className='text-[14px] font-[500] text-gray-500'>Payment Cards Accepted</p>
              </div>
            </div>

            <div className='flex items-center justify-center gap-2'>
              <div className='col text-center flex justify-center items-center flex-col group'>
                <FaGift className='text-[50px] group-hover:text-[#FF5252] transition-all duration-300 group-hover:translate-y-3' />
                <h3 className='text-[18px] font-[600] mt-4'>Special Gifts</h3>
                <p className='text-[14px] font-[500] text-gray-500'>Our First Product Order</p>
              </div>
            </div>

            <div className='flex items-center justify-center gap-2'>
              <div className='col text-center flex justify-center items-center flex-col group'>
                <MdOutlineHeadsetMic className='text-[50px] group-hover:text-[#FF5252] transition-all duration-300 group-hover:translate-y-3' />
                <h3 className='text-[18px] font-[600] mt-4'>Support 24/7</h3>
                <p className='text-[14px] font-[500] text-gray-500'>Contact us Anytime</p>
              </div>
            </div>
          </div>
          <hr className='mt-9 border-b-2 border-b-gray-500'></hr>

          <div className='footer flex items-center py-8  '>
            <div className='part-1 w-[30%] flex items-center flex-col'>
              <h2 className='text-[30px] font-[600] text-gray-600' >Contact us</h2>
              <h3 className='text-[14px] font-[400] text-[#6A7282] '>Classyshop - Mega Super Store<br />
                507-Union Trade Centre France</h3>
              <Link className='link text-[#6A7282] ' to="mailto:someone@example.com"><h2 className='mt-8'>sales@yourcompany.com</h2></Link>
              <span className='text-[#ff5252] text-[25px] inline-block mt-3 text-left text-bold  '>(+91) 9876-543-210</span>
              <div className='flex items-center mt-2 gap-2'>
                <IoChatbubbleOutline className='text-[45px] text-[#ff5252]' /><span className='text-[20px] font-bold'>Online Chat<br />
                  Get Expert Help</span>
              </div>
            </div>
            <div className='part-2 w-[20%] '>
              <div className='part-2_col1'>
                <h2 className='text-[30px] font-[600] text-gray-600' >Products</h2>
                <ul>
                  {product.map((product, index) => (
                      <li key={index} className='mt-3 hover:text-[#ff5252] transition-all duration-200'>{product}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className='part-2 w-[20%] '>
              <div className='part-2_col2'>
                <h2 className='text-[30px] font-[600] text-gray-600' >Our company</h2>
                <ul>
                  {company.map((company, index) =>(
                      <li key={index} className='mt-3 hover:text-[#ff5252] transition-all duration-200'>{company}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className='part-2 w-[30%]'>
              <div className='part_col3'>
                <h2 className='text-[30px] font-[600] text-gray-600' >Subscribe to newsletter</h2>
                <p className='text-[15px] text-gray-500'>Subscribe to our latest newsletter to get news about special discounts.</p>
                <form className='mt-5'>
                  <input type="email" placeholder='Enter your Email Address' className='w-full h-[53px] border outline-none pl-4 pr-4 rounded-2xl text-lg'></input>
                  <Button className='!bg-[#ff5252] !text-white !mt-4'>Subscribe</Button>
                  <div>
                    <Checkbox {...label} sx={{
                      color: '#ff5252',
                      '&.Mui-checked': {
                        color: '#ff5252',
                      },
                    }} /><span>I agree to the terms and conditions and the privacy policy</span>
                  </div>
                </form>
              </div>
            </div>
          </div>


        </div>
      </div>

      <div className='bottomStrip border-t border-gray-600'>
        <div className='container flex justify-between items-center '>
          <ul className='flex  gap-2'>
            <li className='list-none py-4'>
               <div className='w-[40px] h-[40px] rounded-full flex justify-center items-center  border hover:bg-[#ff5252] hover:text-white'>
              <Link to="/" target='_blank'>
              <FaFacebookF className='text-[20px]' />
            </Link></div>
            </li>
            <li className='list-none py-4'>
               <div className='w-[40px] h-[40px] rounded-full flex justify-center items-center  border hover:hover:bg-[#ff5252] hover:text-white'>
              <Link to="/" target='_blank'>
              <FiYoutube className='text-[20px]' />
            </Link></div>
            </li>
            <li className='list-none py-4 '>
               <div className='w-[40px] h-[40px] rounded-full flex justify-center items-center  border hover:hover:bg-[#ff5252] hover:text-white'>
              <Link to="/" target='_blank'>
              <IoLogoInstagram className='text-[20px] ' />
            </Link></div>
            </li>
          </ul>
          <div>
              © 2024 - Ecommerce Template
          </div>

          <div className='flex justify-center items-center'>
            <img src="/carte_bleue.png"/>
            <img src="/master_card.png"/>
            <img src="/american_express.png"/>
            <img src="/paypal.png"/>
            <img src="/visa.png"/>
          </div>
        </div>

      </div>
      
    </>
  )
}

export default Footer