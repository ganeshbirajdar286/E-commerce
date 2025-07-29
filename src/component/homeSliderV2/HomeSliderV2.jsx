import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import Button from '@mui/material/Button';
function HomeSliderV2() {
     const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.autoplay.start();
        }
    }, []);
    return (
        <> <Swiper
            spaceBetween={30}
            effect={'fade'}
            loop={true}
            navigation={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            modules={[EffectFade, Navigation, Pagination,Autoplay]}
            className="homeSliderV2"
        >
            <SwiperSlide>
                <div className='item w-full rounded-2xl overflow-hidden relative'>
                    <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_imageslider/views/img/sample-1.jpg" />
                    <div className='info absolute top-0 -right-[100%] opacity-0 w-[50%] z-50 p-8 h-full flex items-center flex-col justify-center transition-all duration-700' >
                        <h4 className='text-[20px] font-[600] w-full py-6 text-left relative -right-[100%] opacity-0'>Big Saving Days Sale</h4>
                        <h2 className='text-[35px] font-[800] w-full text-left relative -right-[100%] opacity-0'>Women Solid Round
                            Green T-Shirt</h2>
                        <h3 className='text-[18px] font-[500]  w-full text-left mt-3 mb-3 relative -right-[100%] opacity-0'>Starting At Only<span className='text-[30px] text-[#ff5252] font-bold ml-2'>$59.00</span></h3>
                        <div className='w-full text-left -bottom-[100%] relative btn_'>
                            <Button className='!bg-[#ff5252] !text-white !p-3 '>Shop Now</Button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='item w-full rounded-2xl overflow-hidden'>
                    <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_imageslider/views/img/sample-2.jpg" />
                    <div className='info absolute top-0 -right-[100%] opacity-0 w-[50%] z-50 p-8 h-full flex items-center flex-col justify-center transition-all duration-700' >
                        <h4 className='text-[20px] font-[600] w-full py-6 text-left relative -right-[100%] opacity-0'>Big Saving Days Sale</h4>
                        <h2 className='text-[35px] font-[800] w-full text-left relative -right-[100%] opacity-0'>Buy Modern Chair In
                            Black Color</h2>
                        <h3 className='text-[18px] font-[500]  w-full text-left mt-3 mb-3 relative -right-[100%] opacity-0'>Starting At Only<span className='text-[30px] text-[#ff5252] font-bold ml-2'>$99.00</span></h3>
                        <div className='w-full text-left -bottom-[100%] relative btn_'>
                            <Button className='!bg-[#ff5252] !text-white !p-3  relative btn_'>Shop Now</Button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>

        </>
    )
}

export default HomeSliderV2