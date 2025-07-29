import React, { useState } from 'react';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';

const images = [
    "https://serviceapi.spicezgold.com/download/1742452035507_rtrt1.jpg",
    "https://serviceapi.spicezgold.com/download/1742452035508_rtrt4.jpg",
    "https://serviceapi.spicezgold.com/download/1742452035508_rtrt.jpg",
    "https://serviceapi.spicezgold.com/download/1742452035509_rtrt2.jpg"
];

function ProductZoom() {
    const [selectedImage, setSelectedImage] = useState(images[0]);

    return (
        <div className="flex gap-5 ">
            {/* Thumbnail Swiper */}
            <div className="w-24">
                <Swiper
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    direction="vertical"
                    slidesPerView={3}
                    spaceBetween={10}
                    className="!max-h-[500px]"
                >
                    {images.map((img, idx) => (
                        <SwiperSlide key={idx} >
                            <img
                                src={img}
                                alt={`thumb-${idx}`}
                                onClick={() => setSelectedImage(img)}
                                className={`cursor-pointer border p-1 !max-w-[100px] transition-all duration-200 ${selectedImage === img ? 'opacity-100 border-red-500' : 'opacity-50'
                                    }`}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Zoom Area */}
            <div className="flex-1  max-w-[400px] ">
                <InnerImageZoom
                    src={selectedImage}
                    zoomType="hover"
                    zoomPreload={true}
                    className="w-full max-w-lg "
                />
            </div>
        </div>
    );
}

export default ProductZoom;
