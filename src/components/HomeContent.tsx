import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { EffectCube, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import Book1 from "../assets/book1.jpg";
import Book2 from "../assets/book2.jpg";
import Book3 from "../assets/book3.jpg";
import Book4 from "../assets/book4.jpg";

import './styles.css';

const HomeContent = () => {
    return ( 
        <div>
            <div className='w-10/12 lg:w-7/12 mx-auto mt-8'>
                <h1 className=' text-white text-center font-roboto font-black text-3xl lg:text-4xl'>
                    Get Different books recommendation at J Books
                </h1>
                <h3 className='font-roboto font-extrabold text-center text-[#94a3b8] text-lg lg:text-xl my-6'>
                    You get detailed summary of the books, and you're also able to
                    add books you've want to recommend for others
                </h3>
            </div>
            <Swiper
                effect={'cube'}
                grabCursor={true}
                cubeEffect={{
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
                }}
                modules={[EffectCube, Pagination, Autoplay]}
                autoplay={{ delay: 3500, disableOnInteraction: false, }}
                speed={3000}
                loop={true}
                pagination={false}
                className="mySwiper" 
            >
                <SwiperSlide>
                    <img src={Book1} className=' w-20 h-full'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Book2} className=' w-20 h-full'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Book3} className=' w-20 h-full'/>
                </SwiperSlide>
                <SwiperSlide>
                <img src={Book4} className=' w-20 h-full'/>
                </SwiperSlide>
            </Swiper>
        </div>
     );
}
 
export default HomeContent;