import React from 'react'
import { Link } from 'react-router'
import Search from '../search/Search'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { GoGitCompare } from "react-icons/go";
import { LuHeart } from "react-icons/lu";
import Tooltip from '@mui/material/Tooltip';
import Navigation from './navigation/Navigation';


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: '0 4px',
  },
}));
const Index = () => {
  return (
    <>
      <header className='bg-white'>
        <div className='top-strip py-2 border-t-1 border-b-1 border-gray-300  '>
          <div className='container'>
            <div className='flex items-center justify-center'>
              <div className='col1 w-[50%]'>
                <p className='text-[15px] font-[500]' >
                  Get up to 50% off new season styles, limited time only
                </p>
              </div>
              <div className='col2 flex  items-center justify-end '>
                <ul className=' flex items-center gap-10'>
                  <li className='list-none'>
                    <Link to="/help-center" className='link'>Help Center</Link>
                  </li>
                  <li className='list-none'>
                    <Link to="/order-tracking" className='link '>Order Tracking</Link>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
        <div className='header mt-2  border-b-1 border-gray-300 py-2'>
          <div className='container flex items-center justify-between '>
            <div className='col1 w-[25%]'>
              <Link to="/" >
                <img src='/logo.jpg'></img>
              </Link>
            </div>
            <div className='col2 w-[45%]'>
              <Search />
            </div>
            <div className='col3 w-[30%] flex items-center pl-7'>
              <ul className='flex items-center gap-3 justify-end w-full'>
                <li className='list-none'>
                  <Link to="/login" className='link transition text-[15px] font-[500]'>Login</Link> | &nbsp;<Link to="/register" className='link transition text-[15px] font-[500]'>Register</Link>
                </li>
                <li>
                  <Tooltip title="compare" placement='top'>
                    <IconButton aria-label="cart">
                      <StyledBadge badgeContent={4} color="secondary">
                        <GoGitCompare />
                      </StyledBadge>
                    </IconButton>
                  </Tooltip>

                </li>
                <li>
                   <Tooltip title="Wish List" placement='top'>
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={2} color="secondary">
                      <LuHeart />
                    </StyledBadge>
                  </IconButton>
                   </Tooltip>
                </li>
                <li>
                   <Tooltip title="cart" placement='top'>
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                      <ShoppingCartIcon />
                    </StyledBadge>
                  </IconButton>
                   </Tooltip>
                </li>
              </ul>
            </div>
          </div>
        </div>
          <Navigation/>
      </header>
    </>
  )
}

export default Index