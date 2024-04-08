

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';



const Banner = () => {
    return (
        <>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper w-full mx-auto rounded-2xl"
            >
                <SwiperSlide><img src="https://i0.wp.com/goelgangadevelopments.com/wp-content/uploads/2019/08/28.jpg?fit=1000%2C500&ssl=1" alt="" className='w-full h-[600px]' /></SwiperSlide>
                <SwiperSlide><img src="https://www.bankrate.com/2022/09/01171315/Commercial-real-estate.jpg?auto=webp&optimize=high&crop=16:9" alt="" className='w-full h-[600px]' /></SwiperSlide>
                <SwiperSlide><img src="https://www.arabianbusiness.com/cloud/2023/10/10/dubai-office-market.jpg" alt="" className='w-[1250px] h-[600px]' /></SwiperSlide>
            </Swiper>
        </>
    );
};

export default Banner;