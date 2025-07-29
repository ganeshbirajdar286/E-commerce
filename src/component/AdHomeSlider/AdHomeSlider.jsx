import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation,Pagination } from 'swiper/modules';
import { Link } from 'react-router';

function AdHomeSlider({ items }) {
     const images = [
        "https://rukminim2.flixcart.com/fk-p-flap/1040/560/image/e549a027e172b730.jpg?q=60",
        "https://rukminim2.flixcart.com/fk-p-flap/1040/560/image/35f61c4271dcd718.jpg?q=60",
        "https://rukminim2.flixcart.com/fk-p-flap/1040/560/image/6fd208e38f7e5c86.jpg?q=60",
        "https://rukminim2.flixcart.com/fk-p-flap/1040/560/image/5e5677f3aba1bd8c.png?q=60",
        "https://rukminim2.flixcart.com/fk-p-flap/1040/560/image/2a4e25aa83d14ac1.jpg?q=60",
        "https://rukminim2.flixcart.com/fk-p-flap/1040/560/image/25fc7992288d87ea.jpg?q=60",
        "https://rukminim2.flixcart.com/fk-p-flap/1040/560/image/f4523a4d451644a0.jpg?q=60"
    ]
    return (
        <>
            <div className='py-5 w-full'>
                <Swiper slidesPerView={items}
                    spaceBetween={25}
                    navigation={true}
                     pagination={{
                            clickable: true,
                        }}
                    modules={[Navigation,Pagination]}
                    className="mySwiper">
                    {images.map((image, index) => {
                        return <>
                            <SwiperSlide key={index} className='m-10' >
                                <div className='box overflow-hidden rounded-2xl hover:scale-105 transition-all hover:rotate-2 ' >
                                    <Link to="#">
                                    <img src={image} ></img>
                                    </Link>
                                </div>
                            </SwiperSlide>
                        </>
                    })}

                </Swiper>
            </div>
        </>
    )
}

export default AdHomeSlider