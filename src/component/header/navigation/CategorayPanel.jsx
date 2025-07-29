import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { IoMdCloseCircle } from "react-icons/io";
import "./style.css";
import { useState } from 'react';
import CategorayCollapse from '../../CategorayCollapse/CategorayCollapse';

function CategorayPanel({ isOpenCategoryPanel, setIsOpenCategoryPanel }) {

  const handleDrawerClose = () => {
        setIsOpenCategoryPanel(false);
    };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" className="categoryPanel">
      <h3 className='p-3 text-[16px] font-[500] flex justify-between items-center'>
        Shop By Categories
        <IoMdCloseCircle onClick={handleDrawerClose} className='cursor-pointer text-[20px]' />
      </h3>
      <CategorayCollapse />
    </Box> 
  );

  return (
    <Drawer open={isOpenCategoryPanel} onClose={handleDrawerClose}>
      {DrawerList}
    </Drawer>
  );
}

export default CategorayPanel;
