import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import AOS from 'aos';
import 'aos/dist/aos.css'
AOS.init();

const Banner = () => {
    return (
        <div className="relative w-full">
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
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
            <div className="relative bottom-60 md:bottom-20 lg:bottom-28 z-10 w-4/6 mx-auto">
                <div data-aos='fade-up' data-aos-delay='1000' data-aos-duration='1000' className="relative bottom-0 sm:bottom-[200px] md:bottom-[300px] lg:bottom-[400px] mr-10 text-black font-bold text-justify bg-white bg-opacity-10 px-2">
                    <h2 className=" text-xs md:text-xl lg:text-4xl">ProRealtyHub: </h2>
                </div>
                <div data-aos='fade-up' data-aos-delay='1000' data-aos-duration="2000" className="relative bottom-0 sm:bottom-[200px] md:bottom-[300px] lg:bottom-[400px] mr-10 text-black font-bold text-justify bg-white bg-opacity-10 px-2">
                    <h2 className="text-xs md:text-xl lg:text-3xl font-bold">Your Premier Destination for Professional-grade Commercial Real Estate Solutions</h2>
                </div>
                <div data-aos='fade-up' data-aos-delay='2000' data-aos-duration="2000" className="relative bottom-0 sm:bottom-[200px] md:bottom-[300px] lg:bottom-[400px] mr-10 text-black font-bold text-justify bg-white bg-opacity-10 px-2">
                    <h2 className="text-xs md:text-xl lg:text-3xl font-bold">, Uniting Expertise, Innovation, and Opportunity under One Hub.</h2>
                </div>
            </div>

        </div>
    );
};

export default Banner;
