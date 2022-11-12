import React from 'react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { MDBContainer, MDBTypography } from 'mdb-react-ui-kit';
import Card from '../components/Card';

export default function NewProducts() {
     SwiperCore.use([Autoplay])
     return (
          <>
               <MDBContainer className='pt-5'>
                    <MDBTypography tag='h3' className='text-center mb-3 text-dark' >Latest Products</MDBTypography>
                    <Swiper
                         className='pb-5'
                         modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                         spaceBetween={50}
                         slidesPerView={3}
                         // navigation
                         autoplay={{ delay: 3000 }}
                         pagination={{ clickable: true }}
                         breakpoints={{
                              0: {
                                   slidesPerView: 1,
                              },
                              426: {
                                   slidesPerView: 2,
                              },
                              769: {
                                   slidesPerView: 3,
                              },
                              1200: {
                                   slidesPerView: 4,
                              },
                         }}
                    >
                         <SwiperSlide>
                              <Card name={'LED TV'} image={'assets/images/latest/LED.webp'} />
                         </SwiperSlide>
                         <SwiperSlide>
                              <Card name={'Smart TV'} image={'assets/images/latest/smart.webp'} />
                         </SwiperSlide>
                         <SwiperSlide>
                              <Card name={'Home Theater Speaker'} image={'assets/images/latest/home.png'} />
                         </SwiperSlide>
                         <SwiperSlide>
                              <Card name={'Dual Tower Speaker'} image={'assets/images/latest/dual.webp'} />
                         </SwiperSlide>
                         <SwiperSlide>
                              <Card name={'Drawbar Speaker'} image={'assets/images/latest/drawbar.webp'} />
                         </SwiperSlide>
                         <SwiperSlide>
                              <Card name={'Fan'} image={'assets/images/latest/fan.webp'} />
                         </SwiperSlide>
                    </Swiper>

               </MDBContainer>
          </>
     )
}
