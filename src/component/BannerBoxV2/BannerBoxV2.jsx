import React from 'react'
import { Link } from 'react-router'

function BannerBoxV2() {
  return (
   <> <div className='BannerBox2 w-[30%] h-[250px] overflow-hidden rounded-2xl relative'>
            <Link to="/">
                <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/cms-banner-1.jpg" className='w-full h-full transition-all duration-500 hover:scale-120' />
            </Link>
            <div className='flex-col '>
                <h3 className='absolute top-10 right-5 text-xl font-bold  '>S22 Samsung <br /> Smartphone</h3>
                <h2 className='absolute top-30 right-20 text-[#ff5252] text-xl font-bold'>$250.00</h2>
            </div>
        </div>

        <div className='BannerBox2 w-[30%] h-[250px] overflow-hidden rounded-2xl  relative'>
            <Link to="/">
                <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/cms-banner-2.jpg" className='w-full h-full transition-all duration-500 hover:scale-120' />
            </Link>
            <div className='flex-col '>
                <h3 className='absolute top-10 right-5 text-xl font-bold  '>Armchair Mad <br /> By shopstic</h3>
                <h2 className='absolute top-30 right-20 text-[#ff5252] text-xl font-bold'>$190.00</h2>
            </div>
        </div>
        
        <div className='BannerBox2 w-[30%] h-[250px] overflow-hidden rounded-2xl  relative'>
            <Link to="/">
                <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/cms-banner-3.jpg" className='w-full h-full transition-all duration-500 hover:scale-120' />
            </Link>
            <div className='flex-col '>
                <h3 className='absolute top-10 right-5 text-xl font-bold  '>Noise Wireless <br /> Headphones</h3>
                <h2 className='absolute top-30 right-20 text-[#ff5252] text-xl font-bold'>$129.00</h2>
            </div>
        </div>
        </>
  )
}

export default BannerBoxV2