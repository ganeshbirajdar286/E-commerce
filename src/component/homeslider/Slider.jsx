import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './styles.css';
import { Navigation, Pagination, Autoplay, Keyboard } from 'swiper/modules';

function Slider() {
    const images = ["https://serviceapi.spicezgold.com/download/1751685200593_1721277298204_banner.jpg", "https://serviceapi.spicezgold.com/download/1748955908049_NewProject(13).jpg", "https://serviceapi.spicezgold.com/download/1751685183248_NewProject(6).jpg", "https://serviceapi.spicezgold.com/download/1751685164864_NewProject(10).jpg", "https://serviceapi.spicezgold.com/download/1751685144346_NewProject(11).jpg", "https://serviceapi.spicezgold.com/download/1748955932914_NewProject(1).jpg"
    ]
    return (
        <>
            <div className='homeSlider'>
                <Swiper className="mySwiper mt-2" slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    keyboard={{
                        enabled: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation,Autoplay,Keyboard]}>
                    {images.map((image, index) => {
                        return <>
                            <SwiperSlide key={index}>
                                <img src={`${image}`}></img>
                            </SwiperSlide>
                        </>
                    })}
                </Swiper>
            </div>
        </>
    )
}

export default Slider