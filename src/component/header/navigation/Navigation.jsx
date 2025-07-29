import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { CgMenuLeftAlt } from "react-icons/cg";
import { FaAngleDown } from "react-icons/fa";
import { IoRocketOutline } from "react-icons/io5";
import { Link } from 'react-router';
import CategorayPanel from './CategorayPanel';


function Navigation() {
  const [isOpenCategoryPanel, setIsOpenCategoryPanel] = useState(false)

  const openCategoryPanel = () => {
    setIsOpenCategoryPanel(true)
  }

  const categories = [
    {
      name: "men",
      sub: ["Shirts", "T-Shirts", "Jeans"]
    },
    {
      name: "women",
      sub: ["Dresses", "Tops", "Skirts"]
    },
    {
      name: "kids",
      sub: ["Toys", "Clothing"]
    },
    {
      name: "girls",
      sub: ["Dresses", "Hair Accessories"]
    },
    {
      name: "boys",
      sub: ["Shorts", "Shirts"]
    }
  ];
  return (
    <>
      <nav>
        <div className='container'>
          <div className='flex justify-center items-center'>
            <div className='col_1 w-[15%] border-r-2 border-gray-300'>
              <Button className='!text-black gap-2  w-full' onClick={openCategoryPanel}>
                <CgMenuLeftAlt className='text-[18px]' />
                Shop By  Categories
                <FaAngleDown className='text-[18px]' />
              </Button>

            </div>
            <div className='col_2 w-[55%]'>
              <ul className='flex items-center p-3 nav'>
                <li className='list-none'>
                  <Link to="/" className='link transition text-[15px] font-[500]'>
                    <Button className='!text-black h-full link transition'>Home</Button>
                  </Link>
                </li>
                <li className='list-none relative'>
                  <Link to="/productListing" className='link transition text-[15px] font-[500]'>
                    <Button className='!text-black h-full link transition'>Fashion</Button>
                  </Link>
                  <div className='submenu absolute top-[100%] left-[0%] min-w-[300px] bg-white shadow-md opacity-0 transition-all z-[1000] '>
                    <ul >
                      {categories.map((category, index) => (
                        <li className='list-none relative group link ' key={index}>
                          <Link to={`/${category.name} `} className='hover:text-[#FF5252]'>
                            <Button className='w-full flex !justify-start ' sx={{
                              color: 'black',
                              '&:hover': {
                                color: '#FF5252',
                              }
                            }}>
                              {category.name}
                            </Button>
                          </Link>

                          {/* Submenu for subcategories */}
                          {category.sub && category.sub.length > 0 && (
                            <div className='absolute left-full top-0 bg-white min-w-[200px] shadow-md opacity-0 group-hover:opacity-100 transition-all z-10'>
                              <ul>
                                {category.sub.map((subItem, subIndex) => (
                                  <li key={subIndex} className='list-none'>
                                    <Link to={`/${category.name}/${subItem.toLowerCase()}`}>
                                      <Button className='w-full flex !justify-start ' sx={{
                                        color: 'black',
                                        '&:hover': {
                                          color: '#FF5252',
                                        }
                                      }}>
                                        {subItem}
                                      </Button>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
                <li className='list-none'>
                  <Link to="/electronics" className='link transition text-[15px] font-[500]'>
                    <Button className='!text-black h-full link transition'>Electronics</Button>
                  </Link>
                </li>
                <li className='list-none'>
                  <Link to="/bags" className='link transition text-[15px] font-[500]'>
                    <Button className='!text-black h-full link transition'>Bags</Button>
                  </Link>
                </li>
                <li className='list-none'>
                  <Link to="/footwear" className='link transition text-[15px] font-[500]'>
                    <Button className='!text-black h-full link transition'>Footwear</Button>
                  </Link>
                </li>
                <li className='list-none'>
                  <Link to="/groceries" className='link transition text-[15px] font-[500]'>
                    <Button className='!text-black h-full link transition'>Groceries</Button>
                  </Link>
                </li>
                <li className='list-none'>
                  <Link to="/beauty" className='link transition text-[15px] font-[500]'>
                    <Button className='!text-black h-full link transition'>Beauty</Button>
                  </Link>
                </li>
                <li className='list-none'>
                  <Link to="/wellness" className='link transition text-[15px] font-[500]'>
                    <Button className='!text-black h-full link transition'>Wellness</Button>
                  </Link>
                </li>
                <li className='list-none'>
                  <Link to="/jewellery" className='link transition text-[15px] font-[500]'>
                    <Button className='!text-black h-full link transition'>Jewellery</Button>
                  </Link>
                </li>
              </ul>
            </div>
            <div className='col_3 w-[30%] ml-10'>
              <div className='flex justify-center items-center'>
                <p className='text-[18px] font-bold flex justify-center items-center'>
                  <IoRocketOutline className='text-[18px] mr-2 font-[500]' />
                  Free International Delivery
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <CategorayPanel isOpenCategoryPanel={isOpenCategoryPanel} setIsOpenCategoryPanel={setIsOpenCategoryPanel} />
    </>
  );
}

export default Navigation;
