import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./styles.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

import One from '../../assets/images/product/tv/43FZ1.jpg'
import Two from '../../assets/images/product/tv/43FZ2.jpg'
import Three from '../../assets/images/product/tv/43FZ3.jpg'
import Four from '../../assets/images/product/tv/43FZ4.jpg'
import Five from '../../assets/images/product/tv/43FZ5.jpg'

export default function ProductSlider() {
     const [thumbsSwiper, setThumbsSwiper] = useState(null);

     return (
          <>
               <Swiper
                    style={{
                         "--swiper-navigation-color": "#fff",
                         "--swiper-pagination-color": "#fff",
                    }}
                    loop={true}
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2"
               >
                    <SwiperSlide>
                         <img src={One} alt='...' />
                    </SwiperSlide>
                    <SwiperSlide>
                         <img src={Two} alt='...' />
                    </SwiperSlide>
                    <SwiperSlide>
                         <img src={Three} alt='...' />
                    </SwiperSlide>
                    <SwiperSlide>
                         <img src={Four} alt='...' />
                    </SwiperSlide>
                    <SwiperSlide>
                         <img src={Five} alt='...' />
                    </SwiperSlide>
               </Swiper>

               <Swiper
                    onSwiper={setThumbsSwiper}
                    loop={true}
                    spaceBetween={10}
                    slidesPerView={5}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper"
               >
                    <SwiperSlide className="rounded">
                         <img src={One} alt='...' />
                    </SwiperSlide>
                    <SwiperSlide>
                         <img src={Two} alt='...' />
                    </SwiperSlide>
                    <SwiperSlide>
                         <img src={Three} alt='...' />
                    </SwiperSlide>
                    <SwiperSlide>
                         <img src={Four} alt='...' />
                    </SwiperSlide>
                    <SwiperSlide>
                         <img src={Five} alt='...' />
                    </SwiperSlide>
               </Swiper>
          </>
     )
}
