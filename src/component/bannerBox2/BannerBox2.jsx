import React from 'react'
import "../bannerBox2/style.css"
import { Link } from 'react-router'
function BannerBox2() {
    return (
        <> <div className='BannerBox2 w-full h-[250px] overflow-hidden rounded-2xl mt-7 relative'>
            <Link to="/">
                <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-1.jpg" className='w-full h-full transition-all duration-500 hover:scale-120' />
            </Link>
            <div className='flex-col '>
                <h3 className='absolute top-10 left-5 text-xl font-bold  '>Samsung Gear <br /> VR Camera</h3>
                <h2 className='absolute top-30 left-5 text-[#ff5252] text-xl font-bold'>$129.00</h2>
            </div>
        </div>

            <div className='BannerBox2 w-full h-[250px] overflow-hidden rounded-2xl mt-7 relative'>
                <Link to="/">
                    <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-2.jpg" className='w-full h-full transition-all duration-500 hover:scale-120' />
                </Link>
                <div className='flex-col '>
                    <h3 className='absolute top-10 right-5 text-xl font-bold  '>Marcel Dining
                        <br /> Room Chair</h3>
                    <h2 className='absolute top-30 right-20 text-[#ff5252] text-xl font-bold'>$129.00</h2>
                </div>
            </div>


        </>
    )
}

export default BannerBox2