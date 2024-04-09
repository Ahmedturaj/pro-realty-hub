import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';
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
                className="mySwiper w-full mx-auto rounded-b-2xl border-gray-900 border-2"
            >
                <SwiperSlide>
                    <img src="https://png.pngtree.com/background/20220720/original/pngtree-night-view-of-bauhaus-buildings-by-the-river-picture-image_1685741.jpg" alt="" className='w-full h-[300px] md:h-[400px] lg:h-[600px]' />
                    <div  className="absolute z-10 top-5 lg:top-40 text-white p-2 md:px-10  mx-auto text-center flex flex-col justify-center items-center gap-4">
                        <h2 data-aos='zoom-in' data-aos-duration='2000' className="md:text-4xl text-xl">PrimeSpace Solutions: Your Gateway to Commercial Real Estate Success</h2>
                        <Link to={'/update'}><button data-aos='zoom-in' 
                        data-aos-delay='1000'
                        data-aos-duration='2000' className='btn bg-green-500 text-[#f2f2f2f2] hover:bg-green-500'>Go To Profile</button></Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://www.axiomlandbase.in/wp-content/uploads/2021/06/Commercial-Real-Estate-the-Future-of-Investing.jpg" alt="" className='w-full h-[300px] md:h-[400px] lg:h-[600px]' />
                    <div  className="absolute z-10 top-5 lg:top-40 text-white p-2 md:px-10  mx-auto text-center flex flex-col justify-center items-center gap-4">
                        <h2 data-aos='zoom-in' data-aos-duration='2000' className="md:text-4xl text-xl">Elite Commercial Realty: Unlocking Opportunities for Your Business Ventures</h2>
                        <Link to={'/update'}><button data-aos='zoom-in' 
                        data-aos-delay='1000'
                        data-aos-duration='2000'  className='btn bg-green-500 text-[#f2f2f2f2] hover:bg-green-500'>Go To Profile</button></Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://www.arabianbusiness.com/cloud/2023/10/10/dubai-office-market.jpg" alt="" className='w-full h-[300px] md:h-[400px] lg:h-[600px]' />
                    <div className="absolute z-10 top-5 lg:top-40 text-white p-2 md:px-10  mx-auto text-center flex flex-col justify-center items-center gap-4">
                        <h2 data-aos='zoom-in' data-aos-duration='2000' className="md:text-4xl text-xl">Skyline Ventures: Elevating Your Commercial Real Estate Portfolio</h2>
                        <Link  to={'/update'}><button data-aos='zoom-in' 
                        data-aos-delay='1000'
                        data-aos-duration='2000' className='btn bg-green-500 text-[#f2f2f2f2] hover:bg-green-500'>Go To Profile</button></Link>
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>
    );
};

export default Banner;
