import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Banner = () => {
    return (
        <div className="relative w-full">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper w-full mx-auto rounded-2xl"
            >
                <SwiperSlide>
                    <img src="https://i0.wp.com/goelgangadevelopments.com/wp-content/uploads/2019/08/28.jpg?fit=1000%2C500&ssl=1" alt="" className='w-full h-auto sm:h-[300px] md:h-[400px] lg:h-[600px]' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://www.bankrate.com/2022/09/01171315/Commercial-real-estate.jpg?auto=webp&optimize=high&crop=16:9" alt="" className='w-full h-auto sm:h-[300px] md:h-[400px] lg:h-[600px]' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://www.arabianbusiness.com/cloud/2023/10/10/dubai-office-market.jpg" alt="" className='w-full h-auto sm:h-[300px] md:h-[400px] lg:h-[600px]' />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;
