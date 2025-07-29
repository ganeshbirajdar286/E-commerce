import React from 'react'
import { Link } from 'react-router'
import Button from '@mui/material/Button'
import { BiPlusCircle } from "react-icons/bi";
import { GrSubtractCircle } from "react-icons/gr";
import { useState } from 'react';



function CategorayCollapse() {

    const [subMenuIndex, setSubMenuIndex] = useState(null);
    const [innerSubMenuIndex, setInnerSubMenuIndex] = useState(null);

    const toggleSubmenu = (index) => {
        setSubMenuIndex(prev => (prev === index ? null : index));
    };

    const toggleInnerSubMenu = (index) => {
        setInnerSubMenuIndex(prev => (prev === index ? null : index));
    };


    return (
        <>
            <div className='scroll'>
                <ul className='w-full cursor-pointer'>

                    {/* Fashion */}
                    <li className='list-none flex justify-between relative flex-col'>
                        <div className='w-full relative'>
                            <Button className='black w-full !justify-start'>Fashion</Button>
                            {subMenuIndex === 0
                                ? <GrSubtractCircle className='mt-2 absolute top-[5px] right-[5px]' onClick={() => toggleSubmenu(0)} />
                                : <BiPlusCircle className='mt-2 absolute top-[5px] right-[5px]' onClick={() => toggleSubmenu(0)} />}
                        </div>

                        {subMenuIndex === 0 && (
                            <ul className='submenu w-full pl-3 pr-3'>
                                <li className='list-none relative'>
                                    <div className='w-full relative'>
                                        <Button className='black w-full !justify-start'>Apparel</Button>
                                        {innerSubMenuIndex === 0
                                            ? <GrSubtractCircle className='mt-2 absolute top-[5px] right-[5px]' onClick={() => toggleInnerSubMenu(0)} />
                                            : <BiPlusCircle className='mt-2 absolute top-[5px] right-[5px]' onClick={() => toggleInnerSubMenu(0)} />}
                                    </div>

                                    {innerSubMenuIndex === 0 && (
                                        <ul className='inner_submenu w-full pl-3 pr-3 mb-1'>
                                            {["smart tablet", "crepe t-shirt", "leather watch", "rolling diamond"].map((item, i) => (
                                                <li key={i} className='list-none ml-3'>
                                                    <Link to="/" className='link black text-[13px] font-[500] transition capitalize'>
                                                        {item}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            </ul>
                        )}
                    </li>

                    {/* Electronics */}
                    <li className='list-none flex justify-between relative flex-col mt-2'>
                        <div className='w-full relative'>
                            <Button className='black w-full !justify-start'>Electronics</Button>
                            {subMenuIndex === 1
                                ? <GrSubtractCircle className='mt-2 absolute top-[5px] right-[5px]' onClick={() => toggleSubmenu(1)} />
                                : <BiPlusCircle className='mt-2 absolute top-[5px] right-[5px]' onClick={() => toggleSubmenu(1)} />}
                        </div>

                        {subMenuIndex === 1 && (
                            <ul className='submenu w-full pl-3 pr-3'>
                                <li className='list-none relative'>
                                    <div className='w-full relative'>
                                        <Button className='black w-full !justify-start'>Apparel</Button>
                                        {innerSubMenuIndex === 1
                                            ? <GrSubtractCircle className='mt-2 absolute top-[5px] right-[5px]' onClick={() => toggleInnerSubMenu(1)} />
                                            : <BiPlusCircle className='mt-2 absolute top-[5px] right-[5px]' onClick={() => toggleInnerSubMenu(1)} />}
                                    </div>

                                    {innerSubMenuIndex === 1 && (
                                        <ul className='inner_submenu w-full pl-3 pr-3 mb-1'>
                                            {["smart tablet", "crepe t-shirt", "leather watch", "rolling diamond"].map((item, i) => (
                                                <li key={i} className='list-none ml-3'>
                                                    <Link to="/" className='link black text-[13px] font-[500] transition capitalize'>
                                                        {item}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            </ul>
                        )}
                    </li>

                </ul>
            </div>
        </>
    )
}

export default CategorayCollapse