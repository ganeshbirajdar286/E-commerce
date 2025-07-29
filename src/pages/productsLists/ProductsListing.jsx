import React, { useState } from 'react'
import SideBar from '../../component/sideBar/SideBar'
import { IoGrid } from "react-icons/io5";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import ProductItems from '../../component/productItems/ProductItems';
import Button from '@mui/material/Button';
import { MdOutlineMenu } from "react-icons/md";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ProductItemsListView from '../../component/productItemsListView/ProductItemsListView';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


function ProductsListing() {
  const [isItemsView, setIsItemsView] = useState("grid");


  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <section className='py-8'>
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
        <div className='bg-white p-2 mt-4'>
          <div className='container flex gap-3'>
            <div className='sidebarwrapper w-[20%] h-full bg-white p-3 '>
              <SideBar />
            </div>
            <div className='rightContent w-[80%]'>
              <div className='bg-[#f1f1f1] p-2 w-full mb-3 rounded-sm flex items-center justify-between'>
                <div className="col1 flex items-center gap-3">
                  <Button className={`!w-[40px] !h-[40px] !min-w-[40px] !text-[#000] !rounded-full !text-2xl ${isItemsView==="list" && "!text-[#ff5252]"}`} onClick={() => setIsItemsView("list")}><MdOutlineMenu /></Button>
                  <Button className={`!w-[40px] !h-[40px] !min-w-[40px] !text-[#000] !rounded-full !text-2xl ${isItemsView==="grid" && "!text-[#ff5252]"}`} onClick={() => setIsItemsView("grid")}><IoGrid /></Button>
                  <span className=' text-[15px] pl-3 text-[rgba(0,0,0,0.7)]'>There are 9 products</span>
                </div>
                <div className='col2 ml-auto flex items-center justify-end '>
                  <span className='text-[14px] font-[500] pl-3 text-[rgba(0,0,0,0.7)]'>
                    Sort By
                    <Button
                      id="basic-button"
                      aria-controls={open ? 'basic-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                      onClick={handleClick}
                      className='!bg-white !ml-2 !text-[#000]'
                    >
                      Name, A to Z
                    </Button>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      slotProps={{
                        list: {
                          'aria-labelledby': 'basic-button',
                        },
                      }}
                    >
                      <MenuItem onClick={handleClose}>Name, A to Z</MenuItem>
                      <MenuItem onClick={handleClose}>Name, Z to A</MenuItem>
                      <MenuItem onClick={handleClose}>Price, low to high</MenuItem>
                      <MenuItem onClick={handleClose}>Price, high to low</MenuItem>
                    </Menu>

                  </span>

                </div>
              </div>
              <div className='flex justify-center'>
                <div className={`grid ${isItemsView === "grid"
                  ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
                  : "grid-cols-1"
                  } max-w-[1200px] w-full`}>
                  {isItemsView === "grid" ?
                    <>
                      <ProductItems />
                      <ProductItems />
                      <ProductItems />
                      <ProductItems />
                      <ProductItems />
                      <ProductItems />
                      <ProductItems />
                      <ProductItems />
                      <ProductItems />

                    </>
                    :
                    <>
                      <ProductItemsListView />
                      <ProductItemsListView />
                      <ProductItemsListView />
                    </>
                  }

                </div>
              </div>
              {isItemsView === "grid" && (
                <div className="flex items-center justify-center mt-10">
                  <Stack spacing={4}>
                    <Pagination
                      count={10}
                      variant="outlined"
                      size="large"
                      shape="rounded"
                      sx={{
                        '& .MuiPaginationItem-root': {
                          color: '#000', // Default text color
                        },
                        '& .MuiPaginationItem-root:hover': {
                          backgroundColor: '#ffeaea',
                        },
                        '& .MuiPaginationItem-root.Mui-selected': {
                          backgroundColor: '#ff5252',
                          color: '#ffffff',
                          borderColor: '#ff5252',
                          fontWeight: 'bold',
                          transform: 'scale(1.05)',
                        },
                      }}
                    />
                  </Stack>
                </div>
              )}


            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default ProductsListing