import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import ProductItems from '../productItems/ProductItems';

function ProductsSlider({ items }) {
  return (
    <>
      <div className='productsSlider py-5'>
        <Swiper className="mySwiper"
          slidesPerView={items}
          spaceBetween={4}
          navigation={true}
          modules={[Navigation]}>

          <SwiperSlide><ProductItems /></SwiperSlide>
          <SwiperSlide><ProductItems /></SwiperSlide>
          <SwiperSlide><ProductItems /></SwiperSlide>
          <SwiperSlide><ProductItems /></SwiperSlide>
          <SwiperSlide><ProductItems /></SwiperSlide>
          <SwiperSlide><ProductItems /></SwiperSlide>
          <SwiperSlide><ProductItems /></SwiperSlide>
          <SwiperSlide><ProductItems /></SwiperSlide>
          <SwiperSlide><ProductItems /></SwiperSlide>
          <SwiperSlide><ProductItems /></SwiperSlide>
          <SwiperSlide><ProductItems /></SwiperSlide>

        </Swiper>
      </div>
    </>

  )
}

export default ProductsSlider