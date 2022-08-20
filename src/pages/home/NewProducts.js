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
               <MDBTypography tag='h3' className='text-center mb-3' >Latest Products</MDBTypography>
                    <Swiper
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
                              <Card name={'one'} />
                         </SwiperSlide>
                         <SwiperSlide>
                              <Card name={'one'} />
                         </SwiperSlide>
                         <SwiperSlide>
                              <Card name={'one'} />
                         </SwiperSlide>
                         <SwiperSlide>
                              <Card name={'one'} />
                         </SwiperSlide>
                         <SwiperSlide>
                              <Card name={'one'} />
                         </SwiperSlide>
                         <SwiperSlide>
                              <Card name={'one'} />
                         </SwiperSlide>
                         <SwiperSlide>
                              <Card name={'one'} />
                         </SwiperSlide>
                         <SwiperSlide>
                              <Card name={'one'} />
                         </SwiperSlide>
                    </Swiper>
               </MDBContainer>
          </>
     )
}
