import React from 'react'
import Slider from '../../component/homeslider/Slider'
import CatSlider from '../../component/catslider/CatSlider'
import { TbTruckDelivery } from "react-icons/tb";
import AdHomeSlider from '../../component/AdHomeSlider/AdHomeSlider';
import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link } from 'react-router';
import ProductsSlider from '../../component/productsSlider/ProductsSlider';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import BlogItems from '../../component/blogItems/BlogItems';
import HomeSliderV2 from '../../component/homeSliderV2/HomeSliderV2.JSX';
import BannerBox2 from '../../component/bannerBox2/BannerBox2';
import BannerBoxV2 from '../../component/BannerBoxV2/BannerBoxV2';



function Home() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const items = ["Fashion", "Electronics", "Bags", "Footwear", "Groceries",
    "Beauty", "Wellness", "Jewellery"]
  return (
    <>
      <Slider /> 
      <CatSlider />

      <section className='bg-white py-8'>
        <div className='container'>
          <div className='flex justify-between items-center'>
            <div className='leftsec'>
              <h3 className='font-[500] text-[30px] text-gray-600'>Popular Products</h3>
              <p className='font-[500] text-[17px] text-gray-600'>Do not miss the current offers until the end of March.</p>
            </div>
            <div className='rightsec '>
              <Box sx={{
                flexGrow: 1,
                maxWidth: { xs: 320, sm: 480 },
                bgcolor: 'background.paper',
              }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  variant="scrollable"
                  scrollButtons
                  allowScrollButtonsMobile
                  aria-label="scrollable tabs"
                  textColor="inherit"
                  TabIndicatorProps={{
                    style: {
                      backgroundColor: '#FF5252', 
                      height: 3,
                    },
                  }}
                  sx={{
                    [`& .${tabsClasses.scrollButtons}`]: {
                      '&.Mui-disabled': { opacity: 0.3 },
                    },
                  }}
                >
                  {items.map((items, index) => {
                    return <>

                      <Tab label={items} key={index} component={Link}
                        to={`/${items}`} sx={{
                          color: value === index ? '#FF5252' : 'black',     
                          fontWeight: value === index ? 'bold' : 'normal',  
                          textTransform: 'none',                         
                          transition: 'color 0.3s',
                          '&:hover': {
                            color: '#FF5252',
                          },
                        }} />


                    </>
                  })}


                </Tabs>
              </Box>
            </div>
          </div>
         <ProductsSlider items={4}/>
        </div>
      </section>
        <section>
        <div className='container flex items-center gap-5'>
          <div className='part-1 h-[480px] w-[75%] mt-10' >
          <HomeSliderV2/> 
          </div>
          <div className='part-2 w-[25%] h-[480px] flex items-center justify-between pl-5 flex-col ' ><BannerBox2/></div>
        </div>
      </section>
      <section className='py-5 bg-white mt-5'>
        <div className='container'>
          <div className='freeshiping w-full py-2 p-4 border border-[#FF5252] flex  items-center justify-between rounded-md' >
            <div className='col1 flex items-center gap-4'>
              <TbTruckDelivery className='text-[50px]' /><span className='text-2xl font-bold'>Free Shipping</span>
            </div>
            <div className='col2 text-[15px] '>
              <p>Free Delivery Now On Your First Order and over $200</p>
            </div>
            <div className='col3'>
              <p className='text-2xl font-bold'>- Only $200*</p>
            </div>
          </div>
          <AdHomeSlider items={4} />
        </div>
      </section>
      <section className='py-5 bg-white mt-10'>
           <div className='container '>
            <h3 className='font-[500] text-[30px] text-gray-600'>Latest Products</h3>
             <ProductsSlider items={4}/>
                 <div className='part-2 w-[100%] h-[480px] flex items-center justify-between pl-5  ' ><BannerBoxV2/></div>
           </div>
      </section>
      <section className='py-5 bg-white mt-10'>
           <div className='container '>
            <h3 className='font-[500] text-[30px] text-gray-600'>Featured Products</h3>
             <ProductsSlider items={4}/>
              <AdHomeSlider items={2.5} />
           </div>
      </section>

      <section  className='py-5 bg-white mt-10 blogSection '>
         <div className='container'  >
          <h3 className='font-[500] text-[30px] text-gray-600 mb-4'>From The Blog</h3>
             <Swiper className="blogSlider  "
                     slidesPerView={4}
                    spaceBetween={20}
                     navigation={true}
                     modules={[ Navigation]}>
                    
                    <SwiperSlide><BlogItems/></SwiperSlide>
                    <SwiperSlide><BlogItems/></SwiperSlide>
                    <SwiperSlide><BlogItems/></SwiperSlide>
                    <SwiperSlide><BlogItems/></SwiperSlide>
                    <SwiperSlide><BlogItems/></SwiperSlide>
                    <SwiperSlide><BlogItems/></SwiperSlide>
                    <SwiperSlide><BlogItems/></SwiperSlide>
                    <SwiperSlide><BlogItems/></SwiperSlide>


                     </Swiper>
         </div>
      </section>
    </>
  )
}

export default Home
