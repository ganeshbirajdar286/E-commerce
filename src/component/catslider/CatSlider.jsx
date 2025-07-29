import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
import { Link } from 'react-router';


function CatSlider() {

    const data = [
        {
            name: "Fashion",
            image: "https://png.pngtree.com/element_pic/00/16/11/015818906aa3f8c.jpg"
        },
        {
            name: "Electronics",
            image: "https://serviceapi.spicezgold.com/download/1741660988059_ele.png"
        },
        {
            name: "Bags",
            image: "https://serviceapi.spicezgold.com/download/1741661045887_bag.png"
        },
        {
            name: "Footwear",
            image: "https://serviceapi.spicezgold.com/download/1741661061379_foot.png"
        },
        {
            name: "Groceries",
            image: "https://serviceapi.spicezgold.com/download/1741661077633_gro.png"
        },
        {
            name: "Beauty",
            image: "https://serviceapi.spicezgold.com/download/1741661092792_beauty.png"
        },
        {
            name: "Wellness",
            image: "https://serviceapi.spicezgold.com/download/1741661105893_well.png"
        },
        {
            name:"Jewellery",
            image:"https://serviceapi.spicezgold.com/download/1749273446706_jw.png"
        }

    ]
    return (
        <>
            <div className='catslider'>
                <div className='container'>
                    <Swiper
                        spaceBetween={5}
                        className="mySwiper"
                    >
                        {data.map((data, index) => {
                            return <>
                                <SwiperSlide className='my-10 !w-[170px]'>
                                    <div className='item p-3 bg-white rounded-sm text-center flex justify-start items-center flex-col py-8 h-[200px] ' key={index}>
                                        <Link to={`/${data.name}`} className=''>
                                            <div className=' w-[140px] '>
                                                <div className='proimages flex justify-center items-center'>
                                                    <img src={`${data.image}`} className='!w-[60px] h-1 ml-1 mt-3' >
                                                    </img>
                                                </div>

                                                <div className='mt-8'>
                                                    <h3 className='text-[20px] font-bold mt-3 text-black hover:text-[#FF5252]' key={index}>{data.name}</h3>
                                                </div>
                                            </div>

                                        </Link>
                                    </div>
                                </SwiperSlide>
                            </>
                        })}

                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default CatSlider