import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Slider43_1 from '../../assets/images/televisions/MI65DF1A.webp'
import Slider43_2 from '../../assets/images/televisions/MI32DF1A.webp'


// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./styles.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

export default function ProductSlider43() {
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
                         <img style={{
                              objectFit: 'contain'
                         }} src={Slider43_1} alt='...' />
                    </SwiperSlide>
                    <SwiperSlide>
                         <img style={{
                              objectFit: 'contain'
                         }} src={Slider43_2} alt='...' />
                    </SwiperSlide>
                    <SwiperSlide>
                         <img src={'assets/images/products/tv/43FZ3.webp'} alt='...' />
                    </SwiperSlide>
                    <SwiperSlide>
                         <img src={'assets/images/products/tv/43FZ4.webp'} alt='...' />
                    </SwiperSlide>
                    <SwiperSlide>
                         <img src={'assets/images/products/tv/43FZ5.webp'} alt='...' />
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
                    <SwiperSlide className="thumbnail">
                         <img src={Slider43_1} alt='...' />
                    </SwiperSlide>
                    <SwiperSlide className="thumbnail">
                         <img src={Slider43_2} alt='...' />
                    </SwiperSlide>
                    <SwiperSlide className="thumbnail">
                         <img src={'assets/images/products/tv/43FZ3.webp'} alt='...' />
                    </SwiperSlide>
                    <SwiperSlide className="thumbnail">
                         <img src={'assets/images/products/tv/43FZ4.webp'} alt='...' />
                    </SwiperSlide>
                    <SwiperSlide className="thumbnail">
                         <img src={'assets/images/products/tv/43FZ5.webp'} alt='...' />
                    </SwiperSlide>
               </Swiper>
          </>
     )
}
